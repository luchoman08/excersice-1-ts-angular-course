import { SportsCar } from '../SportsCar';
import { Colors } from '../../../core/Enums/Colors';
class Convertible extends SportsCar {

    protected static standardMaxSpeed: number = 350;
    protected static standardAceleration: number = 0.2; //k / h * h
    protected static standardNumberOfDoors: number = 4;
    protected static standardCapacity: number = 4;
    constructor(
    ) {  super(); 
        this.isConvertible = true;
    }
}