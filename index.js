// EXAMPLE 1 - Sum a Property in an Array of Objects in JavaScript

const arr = [
  {id: 1, salary: 10},
  {id: 2, salary: 20},
  {id: 3, salary: 30},
];

const sum = arr.reduce((accumulator, object) => {
  return accumulator + object.salary;
}, 0);

console.log(sum); // 👉️ 60

// ------------------------------------------------------------------

// // EXAMPLE 2 - Sum a Property in an Array of Objects using `Array.forEach()`

// const arr = [
//   {id: 1, salary: 10},
//   {id: 2, salary: 20},
//   {id: 3, salary: 30},
// ];

// let sum = 0;

// arr.forEach(element => {
//   sum += element.salary;
// });

// console.log(sum); // 👉️ 60

// ------------------------------------------------------------------

// // EXAMPLE 3 - Sum a Property in an Array of Objects using a `for` loop

// const arr = [
//   {id: 1, salary: 10},
//   {id: 2, salary: 20},
//   {id: 3, salary: 30},
// ];

// let sum = 0;

// for (let index = 0; index < arr.length; index++) {
//   sum += arr[index].salary;
// }

// console.log(sum); // 👉️ 60

// ------------------------------------------------------------------

// // EXAMPLE 4 - Sum a Property in an Array of Objects using `map()` and `reduce()`

// const arr = [
//   {id: 1, salary: 10},
//   {id: 2, salary: 20},
//   {id: 3, salary: 30},
// ];

// const sum = arr
//   .map(obj => obj.salary)
//   .reduce((accumulator, current) => accumulator + current, 0);

// console.log(sum); // 👉️ 60
