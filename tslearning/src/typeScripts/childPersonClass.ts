import { Person } from "./personClass";

class childPerson extends Person{

    public constructor(name: string) {
        super(name)
        this.name;
        // console.log(this.getFullName());

        // this.getData() --> This will throw error 
    }

    public getChildData(): string {
        return this.getFullName();
    }
    
}

let child = new childPerson("child Kumar")

console.log(child.getName());
console.log(child.getChildData());