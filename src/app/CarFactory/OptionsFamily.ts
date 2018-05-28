import { OptionsCar } from '@app/CarFactory/OptionsCar';

export interface OptionsFamily extends OptionsCar {
    hasCarBabySeat?: boolean;
}