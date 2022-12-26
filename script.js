// // Function Declearation

// Example One

// function calculateAge(birthYear) {
//   const age1 = 2022 - birthYear;
//   return age1;
// }
// const age1 = calculateAge(1999);
// console.log(age1);

function calculateAge(birthYear) {
  return 2022 - birthYear;
}
const age1 = calculateAge(1999);
console.log(age1);

// Example Two

// function calculateMember(top) {
//   const allMember = 200 - top;
//   return allMember;
// }
// const allMember = calculateMember(83);
// console.log(allMember);

function calculateMember(top) {
  return 200 - top;
}
const allMember = calculateMember(83);
console.log(allMember);

// // Function Expressions

// Example One

// const calculateAgeTwo = function (birthYear) {
//   const age2 = 2022 - birthYear;
//   return age2;
// };
// const age2 = calculateAgeTwo(1975);
// console.log(age2);

const calculateAgeTwo = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calculateAgeTwo(1975);
console.log(age2);

// Example Two

// const calculateBestStudents = function (allStudents) {
//   const topperStudentsList = 155 - allStudents;
//   return topperStudentsList;
// };
// const topperStudentsList = calculateBestStudents(147);
// console.log(topperStudentsList);

const calculateBestStudents = function (allStudents) {
  return 155 - allStudents;
};
const topperStudentsList = calculateBestStudents(147);
console.log(topperStudentsList);

// Arrow Function

// Example One
// const ageCalculateOne = (birthYearOne) => 2022 - birthYearOne;
// const aAgeOne = ageCalculateOne(1985);
// console.log(aAgeOne);

// // Example Two
// const ageCalculateTwo = (birthYearOne) => {
//   return 2022 - birthYearOne;
// };
// const aAgeTwo = ageCalculateTwo(1996);
// console.log(aAgeTwo);

// Good Example

// const jobLeft = (birthYear) => {
//   const age = 2022 - birthYear;
//   const ageLeft = 62 - age;
//   return ageLeft;
// };
// const aAgeLeft = jobLeft(1982);
// console.log(aAgeLeft);
// console.log(`A job age left ${aAgeLeft} years`);

// Good Example Short
// const jobLeft = (birthYear) => {
//   const age = 2022 - birthYear;
//   return 62 - age;
// };
// const aAgeLeft = jobLeft(1982);
// console.log(aAgeLeft);
// console.log(`A job age left ${aAgeLeft} years`);

// Arrow Function User Example

// const moneyLeft = (allMoney) => {
//   const totalMoneyCost = 7555;
//   const totalMoneyLeft = allMoney - totalMoneyCost;
//   return totalMoneyLeft;
// };
// const totalMoneyLeft = moneyLeft(10000);
// console.log(totalMoneyLeft);

const moneyLeft = (allMoney) => {
  const totalMoneyCost = 7555;
  return allMoney - totalMoneyCost;
};
const totalMoneyLeft = moneyLeft(10000);
console.log(totalMoneyLeft);

// Array
// Previous Example

// const student1 = "Asif";
// const student2 = "Rahim";
// const student3 = "Karim";

// console.log(student1);
// console.log(student2);

// // Array Example One
// const students = ["Rakib", "Shakib", "Akash"];
// console.log(students);
// console.log(students[0]);
// console.log(students[2]);

// // Array Example Two
// const players = new Array("Messi", "Dybala", "Neymar");
// console.log(players);
// console.log(players[0]);
// console.log(players[2]);

// Array Value Change
// const players = new Array("Messi", "Dybala", "Neymar");
// console.log(players);
// players[2] = "Ronaldo";
// console.log(players);

// // Array Length
// console.log(players.length);

// // Get Array Last Item
// console.log(players[players.length - 2]);

// // Array With Different Data Types
// const user = ["Tuser", "Debnath", 1999, 2022 - 1999, "Student"];
// console.log(user);
// console.log(user[0]);
// console.log(user[user.length - 1]);

// // Array Method

// const users = ["User1", "User2", "User3"];
// console.log(users);

// // Array Push
// users.push("User4");
// console.log(users);

// // Array Unshift
// users.unshift("User First");
// console.log(users);

// // Array Pop
// users.pop();
// console.log(users);

// // Array Shift
// users.shift();
// console.log(users);

// console.log(users);
// const removeItem = users.pop();
// console.log(removeItem);
// console.log(users);

// console.log(users);
// const removeItem = users.shift();
// console.log(removeItem);
// console.log(users);
