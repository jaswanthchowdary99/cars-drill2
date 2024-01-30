const inventory = require("../inventoryinfo");
const problem6 = require("../problem/problem6");

const BMWAndAudiresult = problem6(inventory);
console.log(JSON.stringify(BMWAndAudiresult));