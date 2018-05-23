import { Colors } from "../core/Enums/Colors";

class Car {
    protected acelerationTime: number;
    protected capacity: number; 
    protected numberOfDoors: number;
    protected maxSpeed: number;
    public color: Colors;

    constructor(
        acelerationTime: number,
        capacity: number,
        numberOfDoors: number,
        maxSpeed: number,
        color: Colors){
            this.acelerationTime = acelerationTime;
            this.capacity = capacity;
            this.numberOfDoors = numberOfDoors;
            this.maxSpeed = maxSpeed;
            this.color = color;
        }
    
}