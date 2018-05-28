import { Convertible } from './Car/SportsCar/Convertible/Convertible';
import * as syntaxHighlight from './lib/syntaxHighlight' ;
import { Colors } from './core/Enums/Colors';
import { ConvertibleFactory } from './CarFactory/ConvertibleFactory';
import { MuscleFactory } from './CarFactory/MuscleFactory';
import { MuscleCar } from './Car/SportsCar/MuscleCar/MuscleCar';
import "./load";
export function init() {
const convertibleFactory: ConvertibleFactory = new ConvertibleFactory();
const muscleFactory: MuscleFactory = new MuscleFactory();
const convertible: Convertible = convertibleFactory.make({color: Colors.Green,
model_name: "Chevrolet Camaro SS"});
const muscle: MuscleCar = muscleFactory.make( {
    model_name: 'Dodge Charger',
    color: Colors.LigthGreen,
    convertible: false,
    aceleration: 0.8, 
    maxSpeed: 320,
    
})

syntaxHighlight.output(syntaxHighlight.syntaxHighlight(JSON.stringify(convertible, undefined, 4)));
syntaxHighlight.output(syntaxHighlight.syntaxHighlight(JSON.stringify(muscle, undefined, 4)));
}


