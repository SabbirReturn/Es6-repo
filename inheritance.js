class Vehicle{
    constructor(make,model, color){
        this.make = make;
        this.model = model;
        this.color = color;
    }
    getName(){
        return this.make + ' ' + this.color
    }
}
let details = new Vehicle('Toyota','2020','Red');
// console.log(details);
// console.log(details.getName())

class Bus extends Vehicle{
    constructor(color,name,make,model,age){
        super(make,model,color)
        this.name = name;
        this.age = age
    }
    move(){
        return `Go to hotel`
    }
}

let detail = new Bus('Gold','Sb Super Deluxe','Tata',2020,26,);
// console.log(detail.move());
// console.log(detail);

class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Name is ${this.name}`)
    }
    activity(){
        console.log('Kacha Badam Ghum')
    }
}

let output = new person('Sabbir',25);
// let lazy = output.activity();
// console.log(lazy)
// output.sleep()
console.log(output);