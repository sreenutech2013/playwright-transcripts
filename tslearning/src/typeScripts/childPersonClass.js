"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var personClass_1 = require("./personClass");
var childPerson = /** @class */ (function (_super) {
    __extends(childPerson, _super);
    function childPerson(name) {
        var _this = _super.call(this, name) || this;
        _this.name;
        return _this;
        // console.log(this.getFullName());
        // this.getData() --> This will throw error 
    }
    childPerson.prototype.getChildData = function () {
        return this.getFullName();
    };
    return childPerson;
}(personClass_1.Person));
var child = new childPerson("child Kumar");
console.log(child.getName());
console.log(child.getChildData());
