import { SportsCar } from '../SportsCar';
import { Colors } from '@app/core/Enums/Colors';
export class MuscleCar extends SportsCar {
    protected static standardMaxSpeed: number = 300;
    protected static standardAceleration: number = 0.4; //k / h * h
    protected static standardNumberOfDoors: number = 2;
    protected static standardCapacity: number = 4;
    constructor(modelName: string, color: Colors, aceleration: number, numberOfDoors: number,
        maxSpeed: number, capacity: number, isConvertible: boolean, hasSpoiler: boolean) {
            super(modelName, color, aceleration, numberOfDoors, maxSpeed, capacity, isConvertible, hasSpoiler);
        }
}