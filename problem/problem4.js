function problem4(inventory){
    const carYears = inventory.map(car => car.car_year);
    return carYears;
}
module.exports = problem4;