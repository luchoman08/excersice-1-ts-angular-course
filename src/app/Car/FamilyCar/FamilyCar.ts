import { Car } from '../Car';
import { Colors } from '../../core/Enums/Colors';
export class FamilyCar extends Car {

    protected static standardMaxSpeed: number = 200;
    protected static standardAceleration: number = 1; //k / h * h
    protected static standardNumberOfDoors: number = 4;
    protected static standardCapacity: number = 7;

    /**
     * Getter hasCarBabySeat
     * @return {boolean}
     */
	public get hasCarBabySeat(): boolean {
		return this._hasCarBabySeat;
	}

    /**
     * Setter hasCarBabySeat
     * @param {boolean} value
     */
	public set hasCarBabySeat(value: boolean) {
		this._hasCarBabySeat = value;
	}
    private _hasCarBabySeat: boolean;
    constructor(modelName: string, color: Colors, aceleration: number, numberOfDoors: number,
        maxSpeed: number, capacity: number, hasCarBabySeat: boolean) {
            super(modelName, color, aceleration, numberOfDoors, maxSpeed, capacity, false);
            this._hasCarBabySeat = hasCarBabySeat;
        }
}