// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let mission = document.getElementById("missionTarget")

    mission.innerHTML = `<h2>Mission Destination</h2>
                        <ol>
                            <li>Name:${name} </li>
                            <li>Diameter:${diameter} </li>
                            <li>Star: ${star}</li>
                            <li>Distance from Earth:${distance} </li>
                            <li>Number of Moons:${moons} </li>
                        </ol>
                        <img src="${imageUrl}">`














}

function validateInput(testInput) {
    let e = ""
    if (testInput == e) {
        return "Empty"
    } else if (!isNaN(testInput)) {
        return "Is a Number"

    } else if (isNaN(testInput)) {
        return "Not a Number"
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot) == "Empty") {
        alert("enter name")
    } else if (validateInput(copilot) == "Empty") {
        alert("enter name")
    } else if (validateInput(fuelLevel) == "Empty") {
        alert("enter level")
    } else if (validateInput(cargoLevel) == "Empty") {
        alert("enter level")
    } else if (validateInput(pilot) == "Is a Number") {
        alert("enter valid name")
    } else if (validateInput(copilot) == "Is a Number") {
        alert("enter valid name")
    } else if (validateInput(fuelLevel) == "Not a Number") {
        alert("enter valid Level")
    } else if (validateInput(cargoLevel) == "Not a Number") {
        alert("enter valid Level")
    }
    let Lunch = document.getElementById("launchStatus")
    let fuel = document.getElementById("fuelStatus")
    let cargo = document.getElementById("cargoStatus")
    let pilote = document.getElementById("pilotStatus")
    let Copilote = document.getElementById("copilotStatus")

 
    
    
  


    if (validateInput(pilot) !== "Empty" || (validateInput(pilot) !== "Is a Number")) {
        pilote.innerHTML = `Pilot ${pilot} is ready for launch`

    } if ( (validateInput(pilot) == "Empty") || (validateInput(pilot) == "Is a Number") ){
        list.style.visibility = "hidden"
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
        Lunch.style.color = "red"
      
    }


    if (validateInput(copilot) !== "Empty" || (validateInput(copilot) !== "Is a Number")) {
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`
    } if (validateInput(copilot) == "Empty" || (validateInput(copilot) == "Is a Number")) {
        list.style.visibility = "hidden"
       
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
        Lunch.style.color = "red"
    }


    
        if (fuelLevel < 10000 || (validateInput(fuelLevel) == "Not a Number")) {
            list.style.visibility = "visible"
            document.getElementById("fuelStatus").innerHTML = "there is not enough fuel for the journey"
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
            Lunch.style.color = "red"

        } 
        
        if (cargoLevel > 10000 || (validateInput(fuelLevel) == "Not a Number")) {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch"
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
            list.style.visibility = "visible"
            Lunch.style.color = "red"

        } 
            
       
        
        
        
        if (cargoLevel <= 10000 && fuelLevel >= 10000 && validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty"&&(validateInput(copilot) !== "Is a Number")&& validateInput(pilot) !== "Is a Number") {
           
            pilote.innerHTML = `Pilot ${pilot} is ready for launch`
            
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
            Lunch.style.color = "green"
            document.getElementById("launchStatus").innerHTML = "Shuttle is  Ready for Launch"
        } if ( validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty"|| validateInput(copilot) == "Is a Number"|| validateInput(pilot) == "Is a Number" || validateInput(fuelLevel) == "Not a Number" || validateInput(cargoLevel) == "Not a Number" )  {
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
            Lunch.style.color = "red"
            list.style.visibility = "hidden"
        }
    }



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let plan = planets[Math.floor(Math.random() * planets.length)]
    return plan

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;