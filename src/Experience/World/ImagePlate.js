import Experience from "../Experience";
import * as THREE from 'three'

export default class ImagePlate {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.sizes = this.experience.sizes
        this.cursor = this.experience.cursor

        this.setModel()
        this.setLookAt()
        this.update()
    };

    setModel(){
        this.geometry = new THREE.PlaneGeometry(10, 5)
        this.material = new THREE.ShaderMaterial({

        })
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.group = new THREE.Group()
        this.group.add(this.mesh)
        this.mesh.position.z = 5
        this.group.position.z = -15

        this.scene.add(this.group)
    }

    setLookAt() {
        console.log(this.cursor.cursorX)
    }

    update(){
        this.group.rotation.y = this.group.rotation.y + ((this.cursor.cursorX / this.sizes.width - .5) - this.group.rotation.y) * .03
    
    }
}