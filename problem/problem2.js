
function problem2 (inventory) {
    const lastCar = inventory.slice(-1)[0];
   return `Last car is a ${lastCar.car_make} ${lastCar.car_model}`;
}

module.exports = problem2;