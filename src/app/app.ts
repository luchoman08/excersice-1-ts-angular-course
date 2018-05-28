import { Convertible } from './Car/SportsCar/Convertible/Convertible';
import * as syntaxHighlight from './lib/syntaxHighlight' ;
import { Colors } from './core/Enums/Colors';
import { ConvertibleFactory } from './CarFactory/ConvertibleFactory';
import { MuscleFactory } from './CarFactory/MuscleFactory';
import { MuscleCar } from './Car/SportsCar/MuscleCar/MuscleCar';
import "./load";
import { RaceCar } from './Car/SportsCar/RaceCar/RaceCar';
import { RaceFactory } from './CarFactory/RaceFactory';
export function init() {
const convertibleFactory: ConvertibleFactory = new ConvertibleFactory();
const muscleFactory: MuscleFactory = new MuscleFactory();
const raceFactory: RaceFactory = new RaceFactory();
const convertible: Convertible = convertibleFactory.make({color: Colors.Green,
model_name: "Chevrolet Camaro SS"});
const muscle: MuscleCar = muscleFactory.make( {
    model_name: 'Dodge Charger',
    color: Colors.LigthGreen,
    convertible: false,
    aceleration: 0.8, 
    maxSpeed: 320,
    
})
const raceCar: RaceCar = raceFactory.make( {
    model_name: 'Jaguar XJS',
    color: Colors.Orange,
    aceleration: 0.5, 
    convertible: false,
    maxSpeed: 420,
    
})
syntaxHighlight.output(
    syntaxHighlight.syntaxHighlight(JSON.stringify(convertible, undefined, 4)),
    convertible.color);
syntaxHighlight.output(syntaxHighlight.syntaxHighlight(JSON.stringify(muscle, undefined, 4)),
muscle.color);
syntaxHighlight.output(syntaxHighlight.syntaxHighlight(JSON.stringify(raceCar, undefined, 4)),
raceCar.color);

}



