var Student = /** @class */ (function () {
    function Student(rollNo, fName, lName) {
        var _this = this;
        this.printDetails = function () {
            console.log('Roll Number: ' + _this.rollNo);
            console.log('First Name: ' + _this.fName);
            console.log('Last Name: ' + _this.lName);
        };
        this.rollNo = rollNo;
        this.fName = fName;
        this.lName = lName;
    }
    return Student;
}());
var student = new Student(1, 'John', 'Doe');
student.printDetails();
