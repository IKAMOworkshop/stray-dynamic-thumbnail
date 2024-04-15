import Experience from "../Experience";
import Floor from "./Floor.js"
import Environment from "./Environment";
import Robot from "./Robot";

export default class World{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.resources.on('ready', () => {
            // Setup
            this.robot = new Robot();
            this.floor = new Floor();
            this.environment = new Environment();
        })
    }

    update(){
        if(this.robot){
            this.robot.update();
        }
    };
}