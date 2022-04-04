// VARIABLES

// Var -- Global Scope/Function Scope
// Let  -- Block Scope
// Const ---  Block scope&Read only

// var

function printNum() {
  for (var i = 0; i <= 3; i++) {
    console.log(i);
  }
  console.log(i);
}
printNum();

// Let

function printNum1() {
  for (let i = 0; i <= 3; i++) {
    console.log(i);
  }
  //   console.log(i);
}
printNum1();

// Const

function printNumber() {
  if (true) {
    const x = 10;
  }
  const x = 10;
  x = 15;
}
printNumber();
