import { Car } from '@app/Car';
import { Colors } from '@app/core';
export abstract class Hatchback extends Car {
    protected static standardColor: Colors = Colors.Blue; 
    protected static standardMaxSpeed: number = 200;
    protected static standardAceleration: number = 1.8; //k / h * h
    protected static standardNumberOfDoors: number = 4;
    protected static standardCapacity: number = 4;
    constructor(modelName: string, color: Colors, aceleration: number, numberOfDoors: number,
        maxSpeed: number, capacity: number, isConvertible: boolean) {
            super(modelName, color, aceleration, numberOfDoors, maxSpeed, capacity, isConvertible);
        }
}