import { OptionsCar } from '@app/CarFactory';

export interface OptionsSportCar extends OptionsCar {
    hasSpoiler?: boolean;
}