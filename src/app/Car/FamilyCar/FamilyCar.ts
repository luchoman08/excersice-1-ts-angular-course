import { Car } from '../Car';
import { Colors } from '../../core/Enums/Colors';
class FamilyCar extends Car {

    protected static standardMaxSpeed: number = 200;
    protected static standardAceleration: number = 1; //k / h * h
    protected static standardNumberOfDoors: number = 4;
    protected static standardCapacity: number = 7;
    constructor(
    ) {  super(); 
    }
}