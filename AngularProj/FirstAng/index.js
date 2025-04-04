var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student = /** @class */ (function () {
    function student(_id, _name, _department, _gender) {
        this.id = _id;
        this.name = _name;
        this.department = _department;
        this.gender = "female";
    }
    student.prototype.printDep = function () {
        return ("This students department is currently ".concat(this.department));
    };
    student.prototype.printDetails = function () {
        return ("ID: ".concat(this.id, ", name: ").concat(this.name, ", department: ").concat(this.department, ", Gender: ").concat(this.gender));
    };
    return student;
}());
var student2 = new student(4, "jhonny bravo", "Economics");
var student3 = new student(5, "Marco Nueez", "Math");
console.log(student2.printDetails());
console.log(student3.printDetails());
console.log(student3.printDep());
console.log(student2.printDep());
var Undergrad = /** @class */ (function (_super) {
    __extends(Undergrad, _super);
    function Undergrad(_id, _name, _department, _country, _gpa, _gender) {
        var _this = _super.call(this, _id, _name, _department, _gender) || this;
        _this.country = _country;
        _this.gpa = _gpa;
        return _this;
    }
    Undergrad.prototype.printDep = function () {
        return ("This students department is currently ".concat(this.department));
    };
    Undergrad.prototype.printDetails = function () {
        return _super.prototype.printDetails.call(this) + ", Country: ".concat(this.country, ", Gpa: ").concat(this.gpa);
    };
    return Undergrad;
}(student));
var student4 = new Undergrad(6, "Marnnie Maple", "Education", "Canada", 4);
var student5 = new Undergrad(7, "Akari Emmie", "Computer Science", "Japan", 3.5);
console.log(student4.printDetails());
console.log(student5.printDetails());
console.log(student5.printDep());
console.log(student4.printDep());
