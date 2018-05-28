import { Car } from '../Car';
import { Colors } from '../../core/Enums/Colors';
export abstract class SportsCar extends Car {
    protected static standardColor: Colors = Colors.Blue; 
    protected static standardMaxSpeed: number = 300;
    protected static standardAceleration: number = 0.6; //k / h * h
    protected static standardNumberOfDoors: number = 2;
    protected static standardCapacity: number = 2;

   
    private _hasSpoiler: boolean;
    constructor(modelName: string, color: Colors, aceleration: number, numberOfDoors: number,
        maxSpeed: number, capacity: number, isConvertible: boolean, hasSpoiler: boolean) {
            super(modelName, color, aceleration, numberOfDoors, maxSpeed, capacity, isConvertible);
            this._hasSpoiler = hasSpoiler;
        }
    /**
     * Getter hasSpoiler
     * @return {boolean}
     */
	public get hasSpoiler(): boolean {
		return this._hasSpoiler;
	}

    /**
     * Setter hasSpoiler
     * @param {boolean} value
     */
	public set hasSpoiler(value: boolean) {
		this._hasSpoiler = value;
	}
}