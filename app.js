class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        }

        honk(){
            return "Beep";
        }
        toString(){
            return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
        }
    }


class Car extends Vehicle{
    constructor(make, model, year){
        this.numWheels = 4;
        super(make, model, year);
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        this.numWheels = 2;
        super(make, model, year);
    }
    revEngine(){
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity){
    this.vehicles = [];
    this.capacity = capacity;
    }
    add(newVehicle){
        if (this.vehicles.length >= this.capacity){
            return "Sorry, we're full";
        }
        if (this.newVehicle instanceof Vehicle){
        return "Only vehicles are allowed in here";
        }
        this.vehicles.push(newVehicle);
        return "New Vehicle Added!";
    
    }
}

