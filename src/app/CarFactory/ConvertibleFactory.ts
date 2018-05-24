import { Convertible } from '../Car/SportsCar/Convertible/Convertible';
import { Colors } from '../core/Enums/Colors';
export class ConvertibleFactory {
    /**
     * private _model_name: string;
    private _capacity: number;
    private _numberOfDoors: number;
    private _maxSpeed: number;
    private _currentSpeed: number; // in k/h
    private _currentGasoline: number; // in galons
    private _isTurnedOn: boolean;
    private _sealtBeltIsOn: boolean;
    private _color: Colors;
     */
    constructor() {}
    public make( options: {
        capacity? : number,
        numberOfDoors?: number,
        maxSpeed?: number,
        color?: Colors
        }
        ): Convertible {
            let convertible: Convertible = new Convertible();
            options.capacity? convertible.capacity = options.capacity : null;
            options.numberOfDoors? convertible.numberOfDoors = options.numberOfDoors: null;
            options.maxSpeed? convertible.maxSpeed = options.maxSpeed: null;
            options.color? convertible.color = options.color: null;
            return convertible;
    }
}