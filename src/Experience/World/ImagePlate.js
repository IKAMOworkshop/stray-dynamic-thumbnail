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
        this.index = this.experience.thumbnailIndex

        this.setTexture()
        this.setModel()
        this.setHover()
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
                uTime: new THREE.Uniform(0),
                uTexture: new THREE.Uniform(this.thumbnailTextures[this.index])
            },
            transparent: true,
        })
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.group = new THREE.Group()
        this.group.add(this.mesh)
        this.mesh.position.z = 10
        this.group.position.z = -20

        this.scene.add(this.group)
    }

    setHover() {
        const lift42 = document.getElementById('lift-42')
        lift42.addEventListener('mouseover', () => {
            this.index = 0
        })

        const aida102 = document.getElementById('aida-102')
        aida102.addEventListener('mouseover', () => {
            this.index = 1
        })

        const kyaroru102 = document.getElementById('kyaroru-102')
        kyaroru102.addEventListener('mouseover', () => {
            this.index = 2
        })

        const aida103 = document.getElementById('aida-103')
        aida103.addEventListener('mouseover', () => {
            this.index = 3
        })

        const kyaroru103 = document.getElementById('kyaroru-102')
        kyaroru103.addEventListener('mouseover', () => {
            this.index = 4
        })

        const kyaroru40 = document.getElementById('kyaroru-40')
        kyaroru40.addEventListener('mouseover', () => {
            this.index = 5
        })

        const lift41 = document.getElementById('lift-41')
        lift41.addEventListener('mouseover', () => {
            this.index = 6
        })

        const prisma = document.getElementById('prisma')
        prisma.addEventListener('mouseover', () => {
            this.index = 7
        })

        const polygon = document.getElementById('polygon')
        polygon.addEventListener('mouseover', () => {
            this.index = 8
        })
    }

    update(){
        this.group.rotation.y = this.group.rotation.y + ((this.cursor.cursorX / this.sizes.width - .5) - this.group.rotation.y) * .01
        
        this.material.uniforms.uTime.value = this.time.elapsed * .01

        this.material.uniforms.uTexture.value = this.thumbnailTextures[this.index]
    }
}