function problem3(inventory){
    const sorted = inventory.map(car => car.car_model.toLowerCase()).sort();
    return sorted;
}
module.exports = problem3;
