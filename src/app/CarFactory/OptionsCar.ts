import { Colors } from '@app/core/Enums/Colors';
export interface OptionsCar {
    model_name?: string;
    capacity?: number;
    numberOfDoors?: number;
    maxSpeed?: number;
    aceleration?: number;
    currentSpeed?: number; // in k/h
    currentGasoline?: number; // in galons
    isTurnedOn?: boolean;
    sealtBeltIsOn?: boolean;
    color?: Colors;
}