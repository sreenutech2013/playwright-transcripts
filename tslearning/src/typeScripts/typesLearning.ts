
import { directions, sreenuTech } from "./enum"


let firstName: string = "Kumar" //explicit type
let age: number = 19
let isExists: boolean = true

let lastName = "Suresh" // implicit type

// lastName = 1312 //--> This will throw error 

console.log(firstName)
console.log(age)
console.log(isExists)


//any

let jclass: any;
jclass = 'first'
console.log(jclass)
jclass = 1
console.log(jclass)
jclass = true

//unknown
let electionResult: unknown
electionResult = true
electionResult = "maybe someone"
electionResult = null
//union

let rank: string|number
rank = 12
rank = "second"
// rank = null  --> This will throw error
// rank = true --> This will throw error  error TS2322: Type 'boolean' is not assignable to type 'string | number'.


// ARRAY
let names: string[] = ['1','2', '03']
let ages: number[] = [48,45,35]

let imNames = [1, '2']

// imNames.push(true) -- this will throw error
let exMultiTypeName: (string | boolean | number)[] = []

exMultiTypeName.push(true)
exMultiTypeName.push("Tsclass")
exMultiTypeName.push(2)
console.log(exMultiTypeName)


//READonly
const nameOfTheCompany: readonly string[] = ['Sreeu Tech']

// nameOfTheCompany.push('something') This will throw error 

const nameOfTheCompany2 = ['name1']

nameOfTheCompany2.push('name2')
nameOfTheCompany2[0]='xyz'


// tuple
let person: [string, number, string] = ['kumar', 40,'se']

console.log(person)
console.log(person[0])



//object type

let car: {type: string, model: string, year: number} = {
    type: "MG",
    model: "Astor",
    year: 2023
}
    

let bike: {typeOfbike: string, model: string, year: number} = {
    typeOfbike: "Honda",
    model: "something",
    year: 2023
}

bike.typeOfbike = "Hero Honda"
    
console.log(car)

console.log(bike)


//Custom Type/Alias

// dropdown list :- car, bike, bus


type dropDownValues = "car" | "bike" | "bus" | "care" | "noValue"

function assignDropDown(values: dropDownValues) {  
    console.log(values)
}

assignDropDown("car") 
// assignDropDown("care33") -- This is throw error

export type carYear = number  | string
type carType = string | number
type carModel = string

export type Car = {
    year: carYear,
    cartpe: carType,
    model: carModel
    name: string
}

let carData: Car;

carData = {
    year: 2024,
    cartpe: "mg",
    model: "astor",
    name: "MG"
}

//utlizing enum value in this file

console.log("plot # 34:- " + directions.East)

console.log("plot # 36:- " + directions.South)


console.log("sreenuEnum "+ sreenuTech.Name)