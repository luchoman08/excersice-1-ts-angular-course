import { Convertible } from './Car/SportsCar/Convertible/Convertible';

import { Colors } from './core/Enums/Colors';
import { ConvertibleFactory } from './CarFactory/ConvertibleFactory';
export function init() {
let convertibleFactory: ConvertibleFactory = new ConvertibleFactory();
let convertible: Convertible = convertibleFactory.make({color: Colors.Blue});
console.log(convertible.color);
}


