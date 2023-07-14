// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    
    // Declare objects  up here
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    console.log(takeoff.innerHTML);

    //TODO: Take off button stuff

    takeoff.addEventListener("click", function () {
        window.confirm("Confirm that the shuttle is ready for takeoff.");

        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = 'blue';
        spaceShuttleHeight.innerHTML = '10,000';


    });

});