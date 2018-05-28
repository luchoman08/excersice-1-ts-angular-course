import { Car } from '../Car';
import { Colors } from '../../core/Enums/Colors';
export class FamilyCar extends Car {

    protected static standardMaxSpeed: number = 200;
    protected static standardAceleration: number = 1; //k / h * h
    protected static standardNumberOfDoors: number = 4;
    protected static standardCapacity: number = 7;
    constructor(modelName: string, color: Colors, aceleration: number, numberOfDoors: number,
        maxSpeed: number, capacity: number, isConvertible: boolean) {
            super(modelName, color, aceleration, numberOfDoors, maxSpeed, capacity, isConvertible);
        }
}