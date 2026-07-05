import {getCarsAndRaceData} from "./JsonService.js"
import {getCarByNumber, getNextCar, carsAlreadyPassed, printWaitingCars, carFormat} from "./carsMethods.js"
import {loadFromAPI, saveDataToJson} from "./APIservice.js"

const main = async () => {
    console.log("Pit Stop Queue - Race Team Management System");
    console.log(`Race engineer: "Let's check the current queue status on the pit wall.\n"`);

    try {
    const data = await loadFromAPI()
    await saveDataToJson(data)

    const [cars, race] = await getCarsAndRaceData()
    const nextCar = getNextCar(cars)
    


    console.log("\n========== PIT STOP QUEUE ==========");
    console.log(`Race: ${race.raceName}`);
    console.log(`Lap: ${race.currentLap}/${race.totalLaps}`);
    console.log(`Pit stops completed: ${carsAlreadyPassed(cars)}\n`);
    console.log("Cars waiting for pit stop:");
    printWaitingCars(cars)
    console.log("\nNext car to enter the pit:");
    console.log(`>> ${carFormat(nextCar)}`);
    console.log("=====================================\n");
    console.log(`Radio message to car #${nextCar.carNumber}: "Box box box, ${nextCar.driverName}, pit this lap!"\n`);
    console.log("--- Search for a car by number ---");
    const carByNum = getCarByNumber(cars, 50)
    if (carByNum) {
        console.log(`Found ${carFormat(carByNum)} | Status: ${carByNum.status}`);
    }
    console.log("\nProcess completed successfully. The pit wall is up to date.");  
       
    } catch (err) {
        console.log(err);
        
    }
}

main()
