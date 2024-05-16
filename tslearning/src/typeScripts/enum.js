"use strict";
//enum --> is a special class that represents group of constants
Object.defineProperty(exports, "__esModule", { value: true });
exports.directions = void 0;
// flovors --> String and Numberic
var sreenuTech;
(function (sreenuTech) {
    sreenuTech["Name"] = "Sreenutech.inc";
    sreenuTech["Address"] = "Hyd";
})(sreenuTech || (sreenuTech = {}));
var locators;
(function (locators) {
    locators["contactName"] = "#contactName";
})(locators || (locators = {}));
// sreenuTech.Address= "some" -- this will throw error 
console.log(sreenuTech.Name);
console.log("SreeNU.inc");
var directions;
(function (directions) {
    directions["West"] = "WEST";
    directions["North"] = "NORTH";
    directions["East"] = "EAST";
    directions["South"] = "SOUTH";
})(directions || (exports.directions = directions = {}));
