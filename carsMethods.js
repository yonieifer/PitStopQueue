const getNextCar = (cars) => {
    return cars[0]
}

const getCarByNumber = (cars, num) => {
    for (const car of cars) {
        if (car.carNumber === num) return car
    }
    console.log(`car number ${num} not found in the current race.`);
}


const carsAlreadyPassed = (cars) => {
    let fixedCars = 0
    cars.forEach(car => {
        if (car.status === "done") {
            fixedCars++
        }
    });
    return fixedCars
}

const carFormat = (car) => `Car #${car.carNumber} | Driver: ${car.driverName}`


const printWaitingCars = (cars) => {
    cars.forEach(car => {
        if (car.status === "waiting") {
            console.log(`- ${carFormat(car)}`);
        }
    })
}

export {getCarByNumber, getNextCar, carsAlreadyPassed, printWaitingCars, carFormat}

