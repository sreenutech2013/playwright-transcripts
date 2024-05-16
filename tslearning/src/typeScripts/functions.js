// Funtions Return type 
function fun1(a, b) {
    return a * b;
}
var result;
result = fun1(2, 3);
console.log(result);
function personage(age) {
    return age;
}
console.log(personage(40));
console.log(personage('nine'));
// let ageOfPerson: boolean = personage(true) -> this will throw error
function fun2(age) {
    console.log(age);
}
// optional paramters
function fun3(a, b, c) {
    console.log(c);
    return a + b;
}
console.log(fun3(3, 4));
console.log(fun3(3, 5, "hey give me result"));
// console.log(fun3(, ,"string")) --> this will throw error
//deafult parameter
function fun4(a, b, c) {
    if (c === void 0) { c = "Hey this will pirnt your result"; }
    console.log(c);
    return a + b;
}
fun4(2, 3);
fun4(2, 5, "print this");
