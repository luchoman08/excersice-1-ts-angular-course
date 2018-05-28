import { SportsCar } from '../SportsCar';
import { Colors } from '../../../core/Enums/Colors';
export abstract class RaceCar extends SportsCar {
    protected static standardMaxSpeed: number = 420;
    protected static standardAceleration: number = 0.06; //k / h * h
    protected static standardNumberOfDoors: number = 2;
    protected static standardCapacity: number = 1;
    constructor(modelName: string, color: Colors, aceleration: number, numberOfDoors: number,
        maxSpeed: number, capacity: number, isConvertible: boolean) {
            super(modelName, color, aceleration, numberOfDoors, maxSpeed, capacity, isConvertible);
        }
}
