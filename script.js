// VARIABLES ---

// Var -- Global Scope/Function Scope
// Let  -- Block Scope
// Const ---  Block scope&Read only

// var

// function printNum() {
//   for (var i = 0; i <= 3; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// printNum();

// Let

// function printNum1() {
//   for (let i = 0; i <= 3; i++) {
//     console.log(i);
//   }
//   //   console.log(i);
// }
// printNum1();

// Const

// function printNumber() {
//   if (true) {
//     const x = 10;
//   }
//   const x = 10;
//   x = 15;
// }
// printNumber();

// OBJECTS---

// const person = {
//   firstName: "Guvi",
//   lastName: "Geeks",
//   getName() {
//     console.log(this);
//   },
// };
// const person2 = {
//   firstName: "Guvi2",
//   lastName: "Geeks2",
// };
// console.log(person.firstName); //[Dot Operator]

// const key = "lastName";

// console.log(person[key]);

// person.getName();

// const name = person.getName.bind(person2);
// name();

// Arrow Function ----

// const person = {
//   firstName: "Guvi",
//   lastName: "Geeks",
//   getName() {
//     setTimeout(() => {
//       console.log(this);
//     }, 2000);
//   },
// };
// person.getName();

// Array Function ----

// map , filter

// const students = [
//   { name: "Priya", active: true },
//   { name: "Kavi", active: false },
// ];
// console.log(students.map((st) => "Hy" + st.name));
// console.log(students.filter((st) => st.active === true));

// Destructuring -------

// Object Destructuring

const person = {
  firstName: "Guvi",
  lastName: "Geeks",
};

const { firstName: fName, lastName: lName } = person;

console.log(fName, lName);

// Array Destructuring

const students = [
  { name: "Priya", active: true },
  { name: "Kavi", active: false },
];

// normal
// const stud1 = students[0];
// const stud2 = students[1];

// console.log(stud1, stud2);

// destructuring

const [stud1, stud2] = students;
console.log(stud1, stud2);
