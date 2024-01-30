function problem5(inventory,carYears){
    const oldercars = carYears.filter(year => year < 2000);
    return oldercars;
}
module.exports = problem5;