import { Colors } from '../core/Enums/Colors';
import { OptionsMuscle } from '@app/CarFactory/OptionsMuscle';
import { MuscleCar } from '../Car/SportsCar/MuscleCar/MuscleCar';

export class MuscleFactory {
    protected static standardMaxSpeed: number = 300;
    protected static standardAceleration: number = 0.4; //k / h * h
    protected static standardNumberOfDoors: number = 2;
    protected static standardCapacity: number = 4;
    public static standardHasSpoiler: boolean = false;
    public static standardIsConvertible: boolean = false;
    public static standardColor: Colors = Colors.Blue;
    public static standardConvertible: boolean = false;
    protected static standarModelName: string = 'Muscle';
    constructor() {}
    public make( options: OptionsMuscle)
        : MuscleCar {
            const muscle: MuscleCar = new MuscleCar(
                options.model_name? options.model_name: MuscleFactory.standarModelName,
                options.color? options.color: MuscleFactory.standardColor,
                options.aceleration?  options.aceleration: MuscleFactory.standardAceleration,
                options.numberOfDoors? options.numberOfDoors: MuscleFactory.standardNumberOfDoors,
                options.maxSpeed? options.maxSpeed: MuscleFactory.standardNumberOfDoors,
                options.capacity? options.capacity: MuscleFactory.standardCapacity,
                options.hasSpoiler? options.hasSpoiler: MuscleFactory.standardHasSpoiler,
                options.convertible? options.convertible: MuscleFactory.standardIsConvertible
                );
            return muscle;
    }
}