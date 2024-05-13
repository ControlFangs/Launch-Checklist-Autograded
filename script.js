// Write your JavaScript code here!



window.addEventListener("load", function() {
    let listedPlanets ; 
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
     
        let listedPlanetsResponse  ;
        listedPlanetsResponse = myFetch()
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
              let pic = pickPlanet( listedPlanets)
         
           addDestinationInfo(document, pic.name, pic.diameter, pic.star, pic.distance, pic.moons, pic.image)
    

              
              
              
            
            })
        
let button = document.getElementById("formSubmit")
button.addEventListener("click", function(event){
 

    let pilot =  document.querySelector('[name="pilotName"]').value;  
let copilot =  document.querySelector('[name="copilotName"]').value;  
let fuelLevel =  document.querySelector('[name="fuelLevel"]').value;  
let cargoLevel =  document.querySelector('[name="cargoMass"]').value;  
let  list = document.getElementById("faultyItems")     
event.preventDefault()  
formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)


})

    
 });