import { SportsCar } from '../SportsCar';
import { Colors } from '../../../core/Enums/Colors';
export  class RaceCar extends SportsCar {

    constructor(modelName: string, color: Colors, aceleration: number, numberOfDoors: number,
        maxSpeed: number, capacity: number, isConvertible: boolean, hasSpoiler: boolean) {
            super(modelName, color, aceleration, numberOfDoors, maxSpeed, capacity, isConvertible, hasSpoiler);
        }
}
