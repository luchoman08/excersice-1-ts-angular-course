import { SportsCar } from '../SportsCar';
import { Colors } from '../../../core/Enums/Colors';
abstract class MuscleCar extends SportsCar {
    protected static standardMaxSpeed: number = 300;
    protected static standardAceleration: number = 0.4; //k / h * h
    protected static standardNumberOfDoors: number = 2;
    protected static standardCapacity: number = 4;
    constructor(
    ) {  super(); }
}