#! /usr/bin/env node
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
    function student(name, Rnumb, course) {
        console.log("\n", 'GIAIC student: ', "\n", "Name: ".concat(name, " \n Roll Number: ").concat(Rnumb, " \n Enrolled in course:  ").concat(course));
    }
    return student;
}());
var i = 10000;
// const student1=new student("Samiya",i,"Computer")
// const student2=new student("Maria",i+1,"English")
// const student3=new student("ZAfar",i+2,"AI")
// const student4=new student("Danish",i+3,"Urdu")
// const student5=new student("Marium",i+4,"Maths")
// const student6=new student("Marina",i+5,"Physics")
// const student7=new student("Samira",i+6,"Chemistry")
// const student8=new student("ariz",i+7,"Cloud Computing")
// const student9=new student("Sami",i+8,"Generative AI")
// const student10=new student("Maira",i+9,"Developer")
console.log("\n", "STATUS", "\n", "\n", "STUDENT'S PARTICULARS WITH ACCOUNT BALANCE", "\n");
var balance = /** @class */ (function (_super) {
    __extends(balance, _super);
    function balance() {
        var _this = this;
        var account = 10000;
        var balance = account - (Math.floor(Math.random() * 10000));
        _this = _super.call(this, "Samiya", i, "Computer") || this;
        console.log(" Student's balance amount is ", account - (Math.floor(Math.random() * 10000)));
        _this = _super.call(this, "Maria", i + 1, "English") || this;
        console.log(" Student's balance amount is ", account - (Math.floor(Math.random() * 10000)));
        _this = _super.call(this, "ZAfar", i + 2, "AI") || this;
        console.log(" Student's balance amount is ", account - (Math.floor(Math.random() * 10000)));
        _this = _super.call(this, "Danish", i + 3, "Urdu") || this;
        console.log(" Student's balance amount is ", account - (Math.floor(Math.random() * 10000)));
        _this = _super.call(this, "Marium", i + 4, "Maths") || this;
        console.log(" Student's balance amount is ", account - (Math.floor(Math.random() * 10000)));
        _this = _super.call(this, "Marina", i + 5, "Physics") || this;
        console.log(" Student's balance amount is ", account - (Math.floor(Math.random() * 10000)));
        _this = _super.call(this, "Samira", i + 6, "Chemistry") || this;
        console.log(" Student's balance amount is ", account - (Math.floor(Math.random() * 10000)));
        _this = _super.call(this, "Ariz", i + 7, "Cloud Computing") || this;
        console.log(" Student's balance amount is ", account - (Math.floor(Math.random() * 10000)));
        _this = _super.call(this, "Sami", i + 8, "Generative AI") || this;
        console.log(" Student's balance amount is ", account - (Math.floor(Math.random() * 10000)));
        _this = _super.call(this, "Maira", i + 9, "Developer") || this;
        console.log(" Student's balance amount is ", account - (Math.floor(Math.random() * 10000)));
        return _this;
    }
    return balance;
}(student));
var viewbal = new balance();
