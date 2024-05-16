"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("./enum");
var firstName = "Kumar"; //explicit type
var age = 19;
var isExists = true;
var lastName = "Suresh"; // implicit type
// lastName = 1312 //--> This will throw error 
console.log(firstName);
console.log(age);
console.log(isExists);
//any
var jclass;
jclass = 'first';
console.log(jclass);
jclass = 1;
console.log(jclass);
jclass = true;
//unknown
var electionResult;
electionResult = true;
electionResult = "maybe someone";
electionResult = null;
//union
var rank;
rank = 12;
rank = "second";
// rank = null  --> This will throw error
// rank = true --> This will throw error  error TS2322: Type 'boolean' is not assignable to type 'string | number'.
// ARRAY
var names = ['1', '2', '03'];
var ages = [48, 45, 35];
var imNames = [1, '2'];
// imNames.push(true) -- this will throw error
var exMultiTypeName = [];
exMultiTypeName.push(true);
exMultiTypeName.push("Tsclass");
exMultiTypeName.push(2);
console.log(exMultiTypeName);
//READonly
var nameOfTheCompany = ['Sreeu Tech'];
// nameOfTheCompany.push('something') This will throw error 
var nameOfTheCompany2 = ['name1'];
nameOfTheCompany2.push('name2');
nameOfTheCompany2[0] = 'xyz';
// tuple
var person = ['kumar', 40, 'se'];
console.log(person);
console.log(person[0]);
//object type
var car = {
    type: "MG",
    model: "Astor",
    year: 2023
};
var bike = {
    typeOfbike: "Honda",
    model: "something",
    year: 2023
};
bike.typeOfbike = "Hero Honda";
console.log(car);
console.log(bike);
function assignDropDown(values) {
    console.log(values);
}
assignDropDown("car");
// assignDropDown("care33") -- This is throw error
//utlizing enum value in this file
console.log("plot # 34:- " + enum_1.directions.East);
console.log("plot # 36:- " + enum_1.directions.South);
