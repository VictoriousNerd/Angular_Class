class Car {
    make: string;
    model: string;

    constructor(make:string, model:string) {
        this.make = make;
        this.model = model;
    }

    displayInfo(): void {
        console.log('Make: ' + this.make + ', Model: ' + this.model);
    }
}

const myCar = new Car('Ford', 'Mustang');

myCar.displayInfo();