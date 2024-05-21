
export class Person{

    protected name: string;

    public lastName: string;

    public constructor(givename: string, lstName: string= "NoLastName") {
        this.name = givename;
        this.lastName = lstName
    }

    public getName(): string{
        return this.name
    }

    protected getFullName(): string{
        return this.name +" "+ this.lastName
    }

    private getData(): string{
        return "PersonalData"
    }


}

let person = new Person("Kumar")

let person2 = new Person("Kumar" , "Trinad")

console.log(person.getName())

// console.log(person.getFullName()) --> This will throw error as it is private 

console.log(person.lastName)

console.log(person2.lastName)