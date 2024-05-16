// Funtions Return type 
function fun1(a: number,b:number): number { 
    return a * b;
}

let result: number;

result = fun1(2, 3);

console.log(result)


type retnType = string | number

function personage(age: retnType): retnType { 
    return age;  
}
console.log(personage(40))
console.log(personage('nine'))
// let ageOfPerson: boolean = personage(true) -> this will throw error

function fun2(age: number): void { 
    console.log(age);  
}

// optional paramters

function fun3(a: number, b: number, c?: string): number {
    console.log(c)
    return a + b
}

console.log(fun3(3, 4))
console.log(fun3(3, 5, "hey give me result"))

// console.log(fun3(, ,"string")) --> this will throw error


//deafult parameter
function fun4(a: number, b: number, c: string = "Hey this will pirnt your result"): number {
    console.log(c)
    return a + b
}

fun4(2, 3)
fun4(2, 5, "print this")


function waitForLoaderToDisapper(xpath: string = "//div[@id='loader']") {
    //page.waitforelemenettodisapper(xpath)
}
waitForLoaderToDisapper("//div[@id='pageLoader']")
    
