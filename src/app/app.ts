import { Convertible } from './Car/SportsCar/Convertible/Convertible';
import { Colors } from './core/Enums/Colors';

let blueCamaroSportMaker: typeof Convertible = Convertible;
blueCamaroSportMaker.standardColor = Colors.Blue;
blueCamaroSportMaker.standardCapacity = 2;
let blueCamaroSport1: Convertible = new blueCamaroSportMaker();
let blueCamaroSport2: Convertible = new blueCamaroSportMaker();
blueCamaroSport2.color = Colors.Blue;


