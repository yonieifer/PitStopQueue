import { error, log } from "console"
import fs from "fs/promises"


const carsPath = "./data/cars.json"
const racePath = "./data/race.json"

const getCarsAndRaceData = async () => {
    try {
        const carsRes = await fs.readFile(carsPath, "utf8").then(data => JSON.parse(data))

        const raceRes = await fs.readFile(racePath, "utf8").then(data => JSON.parse(data))

        const [cars, race] = await Promise.all([carsRes, raceRes])
        return [cars, race]

    } catch (err) {
        console.log(`error - ${err}`);
        return {}
    }
}


const getNextCar = (cars) => {
    return cars[0]
}

const getCarByNumber = (cars, num) => {
    for (const car of cars) {
        if (car.carNumber === num) return car
        else {
            console.log(`car number ${num} not found in the current race.`);
        }
    }
}

export {getCarByNumber, getNextCar, getCarsAndRaceData}
