"use strict";

// ***************** 1 *********

let usersName = ["Mike", "Bob", "Nicola"];
let users = {};

[users.mike, users.bob, users.nicola] = usersName;
console.log(users);


//**************** 2 ***********

let salaries = {
  "Mike": 1500,
  "Bob": 1800,
  "Nikola": 1700
};

function sumSalary(salaries) {
  let users = Object.entries(salaries);
  let sumSalary = 0;
  let user = "";

  for (const [name, salary] of users) {
    if (salary > sumSalary) {
      sumSalary = salary;
      user = name;
    }
  }
  return console.log(user);
}
sumSalary(salaries);



// *******************  3  ****************

let useres = { mike: 'Mike', bob: 'Bob', nicola: 'Nicola' };
let { mike: userMike, bob: userBob, nicola: userNicola } = useres;

console.log(userMike, userBob, userNicola);

//***********************  4  ***************
