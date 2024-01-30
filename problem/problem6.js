function problem6(inventory)
{
    const BMWAndAudi = inventory.filter(car => car.car_make == "BMW"|| car.car_make == "Audi");
    return BMWAndAudi;
}
module.exports = problem6;