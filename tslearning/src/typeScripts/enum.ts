import { carYear, Car } from "./typesLearning"
import { empData } from "./interfaces";
//enum --> is a special class that represents group of constants

// flovors --> String and Numberic

let carYr: carYear;
carYr = "MG"

let carData: Car = {
    year: 12321,
    cartpe: "stringh",
    model: "21312",
    name: "string"
    // name2: "string" --> This will throw error

}



export enum sreenuTech { Name = "Sreenutech.inc", Address = "Hyd" }


enum locators { contactName = "#contactName"}

// sreenuTech.Address= "some" -- this will throw error 

console.log(sreenuTech.Name)

console.log("SreeNU.inc")



export enum directions {
    West = "WEST",
    North = "NORTH",
    East = "EAST",
    South = "SOUTH"
}
