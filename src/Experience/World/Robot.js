import { min } from "three/examples/jsm/nodes/Nodes.js";
import Experience from "../Experience";
import * as THREE from 'three'

export default class Fox {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.sizes = this.experience.sizes
        this.cursor = this.experience.cursor

        // Debug
        if(this.debug.active){
            this.debugFolder = this.debug.ui.addFolder('fox')
        }

        // Setup
        this.resources = this.resources.items.robotModel

        this.setModel();
        this.setLookAt();
        this.update()
    };

    setModel(){
        this.model = this.resources.scene
        this.model.position.set(0, -.5, 0)
        this.scene.add(this.model)

        this.model.traverse((child) => {
            if(child instanceof THREE.Mesh){
                child.castShadow = true;
            }
        })

        this.head = this.model.children[1]
        this.body = this.model.children[0]
        this.bottom = this.model.children[3]
        this.arm_r = this.model.children[2]
        this.arm_l = this.model.children[4]

        this.bodyGroup = new THREE.Group()

        this.bodyGroup.add(this.body, this.bottom, this.arm_l, this.arm_r)
        this.bodyGroup.position.set(0, -.5, 0)
        this.scene.add(this.bodyGroup)
    };

    setLookAt() {
        this.lookAtMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                transparent: true,
                opacity: 0
            })
        )
        this.cursorLight = new THREE.PointLight(0xAEFAFF, 8)
        this.cursorLight.castShadow = true
        this.cursorLight.shadow.camera.far = 15
        this.cursorLight.shadow.mapSize.set(1024, 1024)
        this.cursorLight.shadow.normalBias = 0.05
        this.lookAtMesh.position.z = 2

        this.lookAtMesh.add(this.cursorLight)

        this.scene.add(this.lookAtMesh)
    }

    update(){
        this.lookAtMesh.position.x = (this.cursor.cursorX / this.sizes.width - .5) * 14
        this.lookAtMesh.position.y = - (this.cursor.cursorY / this.sizes.height - .5) * 8


        this.head.lookAt(new THREE.Vector3(this.lookAtMesh.position.x * .05, this.lookAtMesh.position.y * .02 + .20, 0))
        this.bodyGroup.rotation.y = (this.cursor.cursorX / this.sizes.width - .5) * .5
        this.arm_l.rotation.z = -(Math.abs(this.cursor.cursorX / this.sizes.width - .5)) * .5
        this.arm_r.rotation.z = (Math.abs(this.cursor.cursorX / this.sizes.width - .5)) * .5
    
    }
}