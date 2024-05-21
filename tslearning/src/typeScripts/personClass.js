"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(givename, lstName) {
        if (lstName === void 0) { lstName = "NoLastName"; }
        this.name = givename;
        this.lastName = lstName;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getFullName = function () {
        return this.name + " " + this.lastName;
    };
    Person.prototype.getData = function () {
        return "PersonalData";
    };
    return Person;
}());
exports.Person = Person;
var person = new Person("Kumar");
var person2 = new Person("Kumar", "Trinad");
console.log(person.getName());
// console.log(person.getFullName()) --> This will throw error as it is private 
console.log(person.lastName);
console.log(person2.lastName);
