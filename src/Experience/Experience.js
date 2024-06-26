import Sizes from "./Utils/Sizes.js";
import Cursor from "./Utils/Cursor.js";
import Time from "./Utils/Time";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import World from './World/World.js';
import Resources from "./Utils/Resources.js";
import sources from './sources.js'
import Debug from './Utils/Debug.js';

import * as THREE from 'three';

let instance = null;

export default class Experience{
    constructor(canvas, index){
        if(instance){
            return instance;
        }
        instance = this;

        // Global Access
        window.experience = this

        // Options
        this.canvas = document.getElementById('webgl');
        this.thumbnailIndex = index

        // Setup
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.cursor = new Cursor()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        // Reize Event
        this.sizes.on('resize', () => {
            this.resize();
        });

        // Time Tick Event
        this.time.on('tick', () => {
            this.update();
        })

    };

    resize(){
        this.camera.resize();
        this.renderer.resize();
    };

    update(){
        this.camera.update();
        this.world.update();
        this.renderer.update();
    };

    destroy(){
        // Traverse the whole scene
        this.scene.traverse((child) =>
        {
            if(child instanceof THREE.Mesh){
                child.geometry.dispose();

                for(const key in child.material){
                    const value = child.material[key];
                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose();
                    }
                }
            }
        })

        this.camera.controls.dispose();
        this.renderer.instance.dispose();

        if(this.debug.active){
            this.debug.ui.destroy();
        }
    }
};