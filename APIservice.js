import fs from "fs/promises"

const APIpath = "https://server-for-test-week-13.onrender.com/api/race"

const carsPath = "./data/cars.json"
const racePath = "./data/race.json"


const loadFromAPI = async () => {
    try {
        console.log("Loading queue data...");
        
        const response = await fetch(APIpath)
        
        if (!response.ok) {
            throw new Error(`error: ${response.status}`)
            }
            
        const data = await response.json()
        
        return data
    
    } catch (err) {
        console.log(`Error - ${err}`)
        return {}
    }
}

const saveDataToJson = async (data) => {
    const {cars, ...raceData} = data

    const writeRace = await fs.writeFile(racePath, JSON.stringify(raceData), "utf8")

    const writeCars = await fs.writeFile(carsPath, JSON.stringify(cars), "utf8")

    try {
        await Promise.all([writeCars, writeRace])
    } catch (err) {
        console.log(`Error - ${err}`);
    }
    
    
}


export {loadFromAPI, saveDataToJson}