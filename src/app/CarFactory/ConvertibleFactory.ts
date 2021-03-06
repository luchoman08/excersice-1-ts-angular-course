import { Convertible } from '../Car';
import { Colors } from '../core';
import { OptionsConvertible } from '@app/CarFactory/OptionsConvertible';

export class ConvertibleFactory {
    public static standardMaxSpeed: number = 350;
    public static standardAceleration: number = 0.2; //k / h * h
    public static standardNumberOfDoors: number = 4;
    public static standardHasSpoiler: boolean = false;
    public static standardCapacity: number = 4;
    public static standardColor: Colors = Colors.Blue;
    protected static standarModelName: string = 'Convertible';
    constructor() {}
    public make( options: OptionsConvertible)
        : Convertible {
            const convertible: Convertible = new Convertible(
                options.model_name? options.model_name: ConvertibleFactory.standarModelName,
                options.color? options.color: ConvertibleFactory.standardColor,
                options.aceleration?  options.aceleration: ConvertibleFactory.standardAceleration,
                options.numberOfDoors? options.numberOfDoors: ConvertibleFactory.standardNumberOfDoors,
                options.maxSpeed? options.maxSpeed: ConvertibleFactory.standardNumberOfDoors,
                options.capacity? options.capacity: ConvertibleFactory.standardCapacity,
                options.hasSpoiler? options.hasSpoiler: ConvertibleFactory.standardHasSpoiler,
                true
                );
            return convertible;
    }
}