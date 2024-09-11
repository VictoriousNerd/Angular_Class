
export class Vehicle {
    constructor(public name: string, public speed: number) {}
  
    drive(): void {
      console.log(`Driving at speed ${this.speed}`);
    }
  }
  
  export class Car extends Vehicle {
    constructor(name: string, speed: number, public fuelType: string) {
      super(name, speed); 
    }
  
    drive(): void {
      console.log(`Driving at speed ${this.speed} using ${this.fuelType}`);
    }
  }
  