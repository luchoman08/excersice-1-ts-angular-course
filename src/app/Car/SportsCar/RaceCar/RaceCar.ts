import { SportsCar } from '../SportsCar';
import { Colors } from '../../../core/Enums/Colors';
abstract class RaceCar extends SportsCar {
    protected static standardMaxSpeed: number = 420;
    protected static standardAceleration: number = 0.06; //k / h * h
    protected static standardNumberOfDoors: number = 2;
    protected static standardCapacity: number = 1;
    constructor(
    ) {  super(); }
}