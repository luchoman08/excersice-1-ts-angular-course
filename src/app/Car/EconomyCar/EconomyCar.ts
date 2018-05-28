import { Car } from '../Car';
import { Colors } from '../../core/Enums/Colors';
export class EconomyCar extends Car {

    protected static standardMaxSpeed: number = 150;
    protected static standardAceleration: number = 1; //k / h * h
    protected static standardNumberOfDoors: number = 4;
    protected static standardCapacity: number = 5;
    constructor(modelName: string, color: Colors, aceleration: number, numberOfDoors: number,
        maxSpeed: number, capacity: number, isConvertible: boolean) {
            super(modelName, color, aceleration, numberOfDoors, maxSpeed, capacity, isConvertible);
        }
}
