import { Car } from '../Car';
import { Colors } from '../../core/Enums/Colors';
export abstract class SportsCar extends Car {
    protected static standardColor: Colors = Colors.Blue; 
    protected static standardMaxSpeed: number = 300;
    protected static standardAceleration: number = 0.6; //k / h * h
    protected static standardNumberOfDoors: number = 2;
    protected static standardCapacity: number = 2;
    constructor(modelName: string, color: Colors, aceleration: number, numberOfDoors: number,
        maxSpeed: number, capacity: number, isConvertible: boolean) {
            super(modelName, color, aceleration, numberOfDoors, maxSpeed, capacity, isConvertible);
        }
}