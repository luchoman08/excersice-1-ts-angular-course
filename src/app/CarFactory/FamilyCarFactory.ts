import { Colors } from '../core';
import { OptionsFamily } from '@app/CarFactory/OptionsFamily';
import { FamilyCar } from '../Car/FamilyCar/FamilyCar';

export class FamilyCarFactory {

    protected static standardMaxSpeed: number = 200;
    protected static standardAceleration: number = 1; //k / h * h
    protected static standardNumberOfDoors: number = 4;
    protected static standardCapacity: number = 7;
    public static standardHasSpoiler: boolean = false;
    public static standardColor: Colors = Colors.Blue;
    protected static standarModelName: string = 'Convertible';
    protected static hasBabySeat: boolean = false;
    constructor() {}
    public make( options: OptionsFamily)
        : FamilyCar {
            const familyCar: FamilyCar = new FamilyCar(
                options.model_name? options.model_name: FamilyCarFactory.standarModelName,
                options.color? options.color: FamilyCarFactory.standardColor,
                options.aceleration?  options.aceleration: FamilyCarFactory.standardAceleration,
                options.numberOfDoors? options.numberOfDoors: FamilyCarFactory.standardNumberOfDoors,
                options.maxSpeed? options.maxSpeed: FamilyCarFactory.standardNumberOfDoors,
                options.capacity? options.capacity: FamilyCarFactory.standardCapacity,
                options.hasCarBabySeat? options.hasCarBabySeat: FamilyCarFactory.standardHasSpoiler
                );
            return familyCar;
    }
}