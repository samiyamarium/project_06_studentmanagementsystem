#! /usr/bin/env node
class student{
    constructor(name:string,Rnumb:number,course:string){
        console.log("\n",'GIAIC student: ',"\n",`Name: ${name} \n Roll Number: ${Rnumb} \n Enrolled in course:  ${course}`)
}}

let i=10000;

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

console.log("\n","STATUS","\n","\n", "STUDENT'S PARTICULARS WITH ACCOUNT BALANCE","\n")
class balance extends student{
    constructor(){
let account=10000
 let balance=account-(Math.floor(Math.random()*10000))
super("Samiya",i,"Computer")
console.log(" Student's balance amount is ",account-(Math.floor(Math.random()*10000)))
super("Maria",i+1,"English")
console.log(" Student's balance amount is ", account-(Math.floor(Math.random()*10000)))
super("ZAfar",i+2,"AI")
console.log(" Student's balance amount is ",account-(Math.floor(Math.random()*10000)))
super("Danish",i+3,"Urdu")
console.log(" Student's balance amount is ", account-(Math.floor(Math.random()*10000)))
super("Marium",i+4,"Maths")
console.log(" Student's balance amount is ",account-(Math.floor(Math.random()*10000)))
super("Marina",i+5,"Physics")
console.log(" Student's balance amount is ", account-(Math.floor(Math.random()*10000)))
super("Samira",i+6,"Chemistry")
console.log(" Student's balance amount is ",account-(Math.floor(Math.random()*10000)))
super("Ariz",i+7,"Cloud Computing")
console.log(" Student's balance amount is ", account-(Math.floor(Math.random()*10000)))
super("Sami",i+8,"Generative AI")
console.log(" Student's balance amount is ",account-(Math.floor(Math.random()*10000)))
super("Maira",i+9,"Developer")
console.log(" Student's balance amount is ", account-(Math.floor(Math.random()*10000)))
}}

    const viewbal=new balance()

