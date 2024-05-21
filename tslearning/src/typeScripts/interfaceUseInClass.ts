interface Shape {
    getArea(): number;
    getWidth(): number;
}

class Rectangle implements Shape{

    getArea(): number {
        
        return 123;
    }

    getWidth(): number {
        return 345;
    }

    getRecBox() {
        console.log("this is rectangle")
    }
}


let rec = new Rectangle();

console.log(rec.getArea())
