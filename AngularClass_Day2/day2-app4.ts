class Student {
    private rollNo: number;
    private fName: string;
    private lName: string;

    constructor(rollNo: number, fName: string, lName: string) {
        this.rollNo = rollNo;
        this.fName = fName;
        this.lName = lName;
    }

    printDetails = (): void => {
        console.log('Roll Number: ' + this.rollNo);
        console.log('First Name: ' + this.fName);
        console.log('Last Name: ' + this.lName);
    };

}

const student = new Student(1, 'John', 'Doe');
student.printDetails();    