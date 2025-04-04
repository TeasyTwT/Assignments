

interface Istudent{
    id: number;
    name: string;
    department: string;
}

class student {
  id: number;
  name: string;
  department: string;

  constructor(_id: number, _name: string, _department: string, _gender: string) {
    this.id = _id;
    this.name = _name;
    this.department = _department;
    this.gender = "female"
  }

  printDep(){
    return(
    `This students department is currently ${this.department}`
    );
  }

  printDetails() {
    return(
      `ID: ${this.id}, name: ${this.name}, department: ${this.department}, Gender: ${this.gender}`
    );
  }
}

let student2 = new student(4, "jhonny bravo", "Economics");
let student3 = new student(5, "Marco Nueez", "Math");

console.log(student2.printDetails());
console.log(student3.printDetails());
console.log(student3.printDep());
console.log(student2.printDep());


class Undergrad extends student implements Istudent {
  country: string;
    gpa: number;
  constructor(
    _id: number,
    _name: string,
    _department: string,
    _country: string,
    _gpa: number,
    _gender: string
    
  ) {
    super(_id, _name, _department, _gender);
    this.country = _country;
    this.gpa = _gpa;
  }

  printDep(){
    return(
    `This students department is currently ${this.department}`
    );
  }

  printDetails() {
      return super.printDetails() + `, Country: ${this.country}, Gpa: ${this.gpa}`;
  }
}

let student4 = new Undergrad(6, "Marnnie Maple", "Education", "Canada", 4)
let student5 = new Undergrad(7, "Akari Emmie", "Computer Science", "Japan", 3.5)


console.log(student4.printDetails());
console.log(student5.printDetails());
console.log(student5.printDep());
console.log(student4.printDep());