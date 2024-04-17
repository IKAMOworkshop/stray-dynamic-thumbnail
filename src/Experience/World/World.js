import Experience from "../Experience.js";
import Floor from "./Floor.js"
import Environment from "./Environment.js";
import ImagePlate from "./ImagePlate.js";

export default class World{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.resources.on('ready', () => {
            // Setup
            this.imagePlate = new ImagePlate();
            this.floor = new Floor();
            this.environment = new Environment();
        })
    }

    update(){
        if(this.imagePlate){
            this.imagePlate.update();
        }
    };
}