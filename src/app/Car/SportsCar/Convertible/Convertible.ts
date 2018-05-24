import { SportsCar } from '../SportsCar';
import { Colors } from '../../../core/Enums/Colors';
export class Convertible extends SportsCar {

    public static standardMaxSpeed: number = 350;
    public static standardAceleration: number = 0.2; //k / h * h
    public static standardNumberOfDoors: number = 4;
    public static standardCapacity: number = 4;
    public static standardColor: Colors = Colors.Blue;
    protected static standarModelName: string = 'Convertible';
    constructor() {
        super(); 
        this.isConvertible = true;
    }
}