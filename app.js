// ----------------------{VAR , LET AND CONST}---------------------

// var name = "Ibad";
// console.log(name);
// var fullname = "Ibad";
// function foo() {
//   let fullname = "Ibad";
// }
// console.log(fullname);
// // -------x----------
// var name;
// function foo1() {
//   name = "Asif";
// }
// foo1();
// console.log(name);
// // -------x----------
// if (true) {
//   name = "Ibad Asif";
// }

// console.log(name);
// // -------x----------
// if (true) {
//   let _name = "Ibad";

//   console.log(_name);
// }
// // console.log(_name);
// // ------x-----------
// var fullname = "Umar";
// var fullname = "Hammad";
// console.log(fullname);
// // ------x-----------
// // let $name = "Umar";
// let $name = "Uzaima Ali Bari";
// console.log($name);
// // ------x-----------
// const $fullname = "Muhammad Umar";
// // const $fullname = "Hammad ";
// console.log($fullname);
// // ------x-----------
// const school = "Saylani";
// // const school = "Saylani";
// var obj = {
//   schoolName: school,
// };
// console.log(obj);

// var obj = {
//   Name: school,
//   class: "MWF",
// };
// console.log(obj);

// ----------------------{TEMPLATE LITERALS}---------------------

let firstName = "Ibad";
let lastName = "Asif";
console.log("My name is " + firstName + " " + lastName);
console.log(`My name is ${firstName} ${lastName}`);

// ----------------------{SPREAD OPERATORS}---------------------

// let student1 = ["Ibad","Umar"];
// let student2 = ["Hammad","Zohib"];
// let merge = student1.concat(student2);
// console.log(merge);
// ---------------x--------------------
// let student1 = ["Ibad","Umar"];
// let student2 = [...student1,"Hammad","Zohib"];
// console.log(student2);
// ---------------x--------------------
let student1 = { name: "Ibad" };
let student2 = { ...student1, school: "Saylani" };
console.log(student2);

// ----------------------{OBJECT DESTRUCTURING}---------------------
var student = {
  name: "Ibad",
  roll: 187245,
  sch: "Saylani",
};
console.log(student);
// ---------------x--------------------
var student = {
  name: "Ibad",
  roll: 187245,
  sch: "Saylani",
};
let { name, sch, roll } = student;
console.log(name);
console.log(sch);
console.log(roll);

// ----------------------{TERNARY OPERATORS}---------------------
// // ternary opr m (|| and &&) bhi lga sakhte hen
var age = 20;
if (age > 30) {
  console.log("30 se bara hai");
} else {
  console.log("30 se chota hai");
}
// ---------------x--------------------
var check = age > 30 ? "30 se bara hai" : "30 se chota hai";
console.log(check);
// ---------------x--------------------
var bool = true;
var foo = bool && "Ibad";
console.log(foo);
