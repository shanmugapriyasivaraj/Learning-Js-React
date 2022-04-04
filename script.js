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

// const person = {
//   firstName: "Guvi",
//   lastName: "Geeks",
// };

// const { firstName: fName, lastName: lName } = person;

// console.log(fName, lName);

// // Array Destructuring

// const students = [
//   { name: "Priya", active: true },
//   { name: "Kavi", active: false },
// ];

// // normal
// // const stud1 = students[0];
// // const stud2 = students[1];

// // console.log(stud1, stud2);

// // destructuring

// const [stud1, stud2] = students;
// console.log(stud1, stud2);

// Spread Operator -----

// const obj1 = { name: "Guvi", age: 7 };

// const obj2 = { ...obj1, city: "chennai" };

// console.log(obj2);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [...arr1, 5, 6, 7, 8];

// console.log(arr2);

// Async And await

// promise
// function isEven(num) {
//   return new Promise((resolve, reject) => {
//     if (num % 2) reject("Odd");
//     else return resolve("Even");
//   });
// }
// // Async Function
// async function computeEven() {
//   try {
//     let msg = await isEven(2);
//     console.log(msg);
//     msg = await isEven(3);
//     console.log(msg);
//     msg = await isEven(4);
//     console.log(msg);
//     msg = await isEven(5);
//     console.log(msg);
//   } catch (err) {
//     console.error(err);
//   }
// }

// computeEven();

// Class ----

// const person1 = {
//   firstName: "Guvi",
//   lastName: "Geeks",
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// const person2 = {
//   firstName: "varun",
//   lastName: "Nithya",
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// const person3 = {
//   firstName: "Anu",
//   lastName: "Pallavi",
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// Parent/Super class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("Guvi", "Geeks");
const person2 = new Person("Nithya", "Varun");
const person3 = new Person("Anu", "Pallavi");

console.log(person1.getName());
console.log(person2.getName());
console.log(person3.getName());

// inheritance----
// Child class/sub class
class Mentor extends Person {
  constructor(firstName, lastName, experience) {
    super(firstName, lastName);
    this.experience = experience;
  }

  getExperience() {
    return this.experience;
  }
}
// const student = new Student("priya", "Anu", "React");
// console.log(student.getName());
// console.log(student.getCourse());

const mentor = new Mentor("Guvi", "Geeks", 25);
console.log(mentor.getName());
console.log(mentor.getExperience());
