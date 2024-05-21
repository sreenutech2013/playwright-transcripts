var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.getArea = function () {
        return 123;
    };
    Rectangle.prototype.getWidth = function () {
        return 345;
    };
    Rectangle.prototype.getRecBox = function () {
        console.log("this is rectangle");
    };
    return Rectangle;
}());
var rec = new Rectangle();
console.log(rec.getArea());
