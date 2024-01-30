function problem1 (inventory) {
   const car33 = inventory.filter(car => car.id === 33);
console.log(car33);
   return `car 33 is a ${car33[0].car_year} ${car33[0].car_make} ${car33[0].car_model}`;
}
module.exports = problem1;