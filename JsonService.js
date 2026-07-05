import fs from "fs/promises"


const carsPath = "./data/cars.json"
const racePath = "./data/race.json"

export const getCarsAndRaceData = async () => {
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






