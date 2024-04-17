import Experience from "../Experience";
import * as THREE from 'three'

import plateVertex from '../shaders/thumbnail/vertex.glsl'
import plateFragment from '../shaders/thumbnail/fragment.glsl'


export default class ImagePlate {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.sizes = this.experience.sizes
        this.cursor = this.experience.cursor

        this.setTexture()
        this.setModel()
        this.update()
    }

    setTexture() {
        this.thumbnailTextures = []

        this.imageOne = this.resources.items.ff42Lift
        this.imageTwo = this.resources.items.c102Aida
        this.imageThree = this.resources.items.c102Kyaroru
        this.imageFour = this.resources.items.c103Aida
        this.imageFive = this.resources.items.c103Kyaroru
        this.imageSix = this.resources.items.ff40Kyaroru
        this.imageSeven = this.resources.items.ff41Lift
        this.imageEight = this.resources.items.prisma
        this.imageNine = this.resources.items.polygon

        this.thumbnailTextures.push(this.imageOne, this.imageTwo, this.imageThree, this.imageFour, this.imageFive, this.imageSix, this.imageSeven, this.imageEight, this.imageNine)
    }

    setModel(){
        this.geometry = new THREE.PlaneGeometry(10, 5, 64, 64)
        this.material = new THREE.ShaderMaterial({
            vertexShader: plateVertex,
            fragmentShader: plateFragment,
            uniforms: {
                uTime: new THREE.Uniform(this.time.elapsed),
                uTexture: new THREE.Uniform(this.thumbnailTextures[3])
            }
        })
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.group = new THREE.Group()
        this.group.add(this.mesh)
        this.mesh.position.z = 10
        this.group.position.z = -20

        this.scene.add(this.group)
    }

    update(){
        this.group.rotation.y = this.group.rotation.y + ((this.cursor.cursorX / this.sizes.width - .5) - this.group.rotation.y) * .01
    
    }
}