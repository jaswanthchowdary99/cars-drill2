const inventory = require("../inventoryinfo");
const problem4 = require("../problem/problem4");
const problem5 = require("../problem/problem5");

const carYears = problem4(inventory);
const oldercars = problem5(inventory,carYears);
const oldcarlength = oldercars.length;
console.log(oldercars);
console.log(oldcarlength);
