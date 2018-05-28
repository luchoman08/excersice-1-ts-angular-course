import { Colors } from '../core/Enums/Colors';
import { RaceCar } from '../Car/SportsCar/RaceCar/RaceCar';
import { OptionsRace } from './OptionsRace';

export class RaceFactory {
    public static standardMaxSpeed: number = 350;
    public static standardAceleration: number = 0.2; //k / h * h
    public static standardNumberOfDoors: number = 4;
    public static standardCapacity: number = 4;
    public static standardColor: Colors = Colors.Blue;
    public static standardHasSpoiler: boolean = false;
    public static standardIsConvertible: boolean = false;
    protected static standarModelName: string = 'RaceFactory';
    constructor() {}
    public make( options: OptionsRace)
        : RaceCar {
            const raceCar: RaceCar = new RaceCar(     
                options.model_name? options.model_name: RaceFactory.standarModelName,
                options.color? options.color: RaceFactory.standardColor,
                options.aceleration?  options.aceleration: RaceFactory.standardAceleration,
                options.numberOfDoors? options.numberOfDoors: RaceFactory.standardNumberOfDoors,
                options.maxSpeed? options.maxSpeed: RaceFactory.standardNumberOfDoors,
                options.capacity? options.capacity: RaceFactory.standardCapacity,
                options.hasSpoiler? options.hasSpoiler: RaceFactory.standardHasSpoiler,
                options.convertible? options.convertible: RaceFactory.standardIsConvertible
                );
            return raceCar;
    }
}