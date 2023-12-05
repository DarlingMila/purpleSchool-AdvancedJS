'use strict';

const array = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const mySet = new Set([...array.map((el, index, arr) => {
  
  const existedEl = arr.find((element) => element.id === el.id);
  if (existedEl === el) return el;

}).filter((el) => el != undefined)]);


console.log(mySet);
