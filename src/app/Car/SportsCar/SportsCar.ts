import { Car } from '../Car';
import { Colors } from '../../core/Enums/Colors';
export abstract class SportsCar extends Car {
    protected static standardMaxSpeed: number = 300;
    protected static standardAceleration: number = 0.6; //k / h * h
    protected static standardNumberOfDoors: number = 2;
    protected static standardCapacity: number = 2;
    constructor(
    ) {  super(); }
}