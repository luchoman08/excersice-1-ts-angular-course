import { Colors } from "../core/Enums/Colors";
import { CarWarnings } from "../core/Enums/CarWarnings";

export abstract class Car {
    private _aceleration: number; // in k / h * h
    private _capacity: number;
    private _numberOfDoors: number;
    private _maxSpeed: number;
    private _currentSpeed: number; // in k/h
    private _currentGasoline: number; // in galons
    private _isTurnedOn: boolean;
    private _sealtBeltIsOn: boolean;
    private _color: Colors;


    private _isConvertible: boolean;
    protected static standardMaxSpeed: number = 80;
    protected static standardAceleration: number = 1; //k / h * h
    protected static standardNumberOfDoors: number = 4;
    protected static standardCapacity: number = 4;
    protected static standardIsConvertible: boolean = false; 
    constructor() {
        this._currentGasoline = 0;
        this._currentSpeed = 0;
        this._sealtBeltIsOn = false;
        this._isTurnedOn = false;
    }
    make(color: Colors) {
        this._color = color;
        this._aceleration ? null : this._aceleration = Car.standardAceleration;
        this._numberOfDoors ? null : this._numberOfDoors = Car.standardNumberOfDoors;
        this._maxSpeed ? null : this._maxSpeed = Car.standardMaxSpeed;
        this._capacity ? null : this._capacity = Car.standardCapacity;
        this._isConvertible ? null: this._isConvertible = Car.standardIsConvertible;
    }

    public _acelerationacelerate() {
        this._currentSpeed = this._currentSpeed + this._aceleration;
    }
    public brake() {
        this._currentSpeed = this._currentSpeed - this._aceleration;
    }
    public get_warnings(): string[] {
        let warnings: string[] = new Array<string>();
        this._sealtBeltIsOn ? warnings.push(CarWarnings.SealBeltIsNotOn) : null;
        this._currentGasoline < 1 ? warnings.push(CarWarnings.LittleGasoline) : null;
        return warnings;
    }
    /**
     * Turn on the car 
     * @returns List of warnings
     */
    public turn_on() {
        this._isTurnedOn = true;
    }
    /**
     * Turn off the car
     * @returns List of warnings
     */
    public turn_off(): string[] {
        this._isTurnedOn = true;
        return this.get_warnings();
    }
  /**
     * Getter aceleration
     * @return {number}
     */
	public get aceleration(): number {
		return this._aceleration;
	}

    /**
     * Getter capacity
     * @return {number}
     */
	public get capacity(): number {
		return this._capacity;
	}

    /**
     * Getter numberOfDoors
     * @return {number}
     */
	public get numberOfDoors(): number {
		return this._numberOfDoors;
	}
    /**
     * Getter color
     * @return {Colors}
     */
	public get color(): Colors {
		return this._color;
	}
    /**
     * Getter maxSpeed
     * @return {number}
     */
	public get maxSpeed(): number {
		return this._maxSpeed;
	}

    /**
     * Getter currentSpeed
     * @return {number}
     */
	public get currentSpeed(): number {
		return this._currentSpeed;
	}

    /**
     * Getter currentGasoline
     * @return {number}
     */
	public get currentGasoline(): number {
		return this._currentGasoline;
	}

    /**
     * Getter isTurnedOn
     * @return {boolean}
     */
	public get isTurnedOn(): boolean {
		return this._isTurnedOn;
	}

    /**
     * Getter sealtBeltIsOn
     * @return {boolean}
     */
	public get sealtBeltIsOn(): boolean {
		return this._sealtBeltIsOn;
	}

    /**
     * Setter aceleration
     * @param {number} value
     */
	public set aceleration(value: number) {
		this._aceleration = value;
	}

    /**
     * Setter capacity
     * @param {number} value
     */
	public set capacity(value: number) {
		this._capacity = value;
	}

    /**
     * Setter numberOfDoors
     * @param {number} value
     */
	public set numberOfDoors(value: number) {
		this._numberOfDoors = value;
	}

    /**
     * Setter maxSpeed
     * @param {number} value
     */
	public set maxSpeed(value: number) {
		this._maxSpeed = value;
	}

    /**
     * Setter currentSpeed
     * @param {number} value
     */
	public set currentSpeed(value: number) {
		this._currentSpeed = value;
    }
    /**
     * Setter color
     * @param {Colors} value
     */
	public set color(value: Colors) {
		this._color = value;
	}
    /**
     * Setter currentGasoline
     * @param {number} value
     */
	public set currentGasoline(value: number) {
		this._currentGasoline = value;
	}

    /**
     * Setter isTurnedOn
     * @param {boolean} value
     */
	public set isTurnedOn(value: boolean) {
		this._isTurnedOn = value;
	}

    /**
     * Setter sealtBeltIsOn
     * @param {boolean} value
     */
	public set sealtBeltIsOn(value: boolean) {
		this._sealtBeltIsOn = value;
	}

    /**
     * Getter isConvertible
     * @return {boolean}
     */
	public get isConvertible(): boolean {
		return this._isConvertible;
	}

    /**
     * Setter isConvertible
     * @param {boolean} value
     */
	public set isConvertible(value: boolean) {
		this._isConvertible = value;
	}
}