var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.displayInfo = function () {
        console.log('Make: ' + this.make + ', Model: ' + this.model);
    };
    return Car;
}());
var myCar = new Car('Ford', 'Mustang');
myCar.displayInfo();
