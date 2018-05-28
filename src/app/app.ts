import { Convertible } from './Car/SportsCar/Convertible/Convertible';
import * as syntaxHighlight from './lib/syntaxHighlight' ;
import { Colors } from './core/Enums/Colors';
import { ConvertibleFactory } from './CarFactory/ConvertibleFactory';
import { MuscleFactory } from './CarFactory/MuscleFactory';
import { MuscleCar } from './Car/SportsCar/MuscleCar/MuscleCar';
import "./load";
import { RaceCar } from './Car/SportsCar/RaceCar/RaceCar';
import { RaceFactory } from './CarFactory/RaceFactory';
import { FamilyCar } from '@app/Car/FamilyCar/FamilyCar';
import { FamilyCarFactory } from './CarFactory/FamilyCarFactory';
export function init() {
const convertibleFactory: ConvertibleFactory = new ConvertibleFactory();
const muscleFactory: MuscleFactory = new MuscleFactory();
const raceFactory: RaceFactory = new RaceFactory();
const familyCarFactory: FamilyCarFactory = new FamilyCarFactory();
const convertible: Convertible = convertibleFactory.make({color: Colors.Green,
model_name: "Chevrolet Camaro SS"});
const muscle: MuscleCar = muscleFactory.make( {
    model_name: 'Dodge Charger',
    color: Colors.LigthGreen,
    convertible: false,
    aceleration: 0.8, 
    maxSpeed: 320,
    
})

const familyCar: FamilyCar = familyCarFactory.make( {
    hasCarBabySeat: true,
    maxSpeed: 100,
    color: Colors.Orange,
    numberOfDoors: 6,
    currentGasoline: 10,
    model_name: 'Skoda Octavia hatchback'
})

familyCar.turn_on();

const raceCar: RaceCar = raceFactory.make( {
    model_name: 'Jaguar XJS',
    color: Colors.Orange,
    aceleration: 0.5, 
    convertible: false,
    maxSpeed: 420,
    hasSpoiler: true
    
})
syntaxHighlight.output(
    syntaxHighlight.syntaxHighlight(JSON.stringify(convertible, undefined, 4)),
    convertible.color);
syntaxHighlight.output(syntaxHighlight.syntaxHighlight(JSON.stringify(muscle, undefined, 4)),
muscle.color);
syntaxHighlight.output(syntaxHighlight.syntaxHighlight(JSON.stringify(raceCar, undefined, 4)),
raceCar.color);
syntaxHighlight.output(syntaxHighlight.syntaxHighlight(JSON.stringify(familyCar, undefined, 4)),
raceCar.color);
}



