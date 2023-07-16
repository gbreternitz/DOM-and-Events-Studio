// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    
    // Declare objects  up here
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const rocket = document.getElementById("rocket");

    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocketInFlight = false;

    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "0px";
    rocket.style.boxSizing = "border-box"; //doesn't work
    rocket.style.maxHeight = "inherit"; // doesn't work


    takeoff.addEventListener("click", function () {
        takeoffFlag = window.confirm("Confirm that the shuttle is ready for takeoff."); // come back to this

        if (takeoffFlag){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = '10000';
            rocket.style.bottom = `${parseInt(rocket.style.bottom)}px`
            rocketInFlight = true;
        }
    });

    landing.addEventListener("click", function () {
        if(!rocketInFlight) {
            window.alert("Rocket is not in flight.");
        } else {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = '0';
        rocket.style.bottom = "0px";
        rocketInFlight = false;
        }

    });

    missionAbort.addEventListener("click", function () {
        let missionAbortFlag = window.confirm("Confirm that you want to abort the mission.");
        if (missionAbortFlag){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = '0';
            rocket.style.bottom = "0px";
            rocket.style.left = "0px";
            rocketInFlight = false;
        }
    })

    up.addEventListener("click", function() {
        if(!rocketInFlight){
            window.alert("Launch Rocket to maneuver.")
        } else {
        let rocketTopNum = parseInt(rocket.style.bottom) + 10;
        rocket.style.bottom = `${rocketTopNum}px`
        console.log(rocket.style.bottom)
        spaceShuttleHeightNum = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightNum;
        }
    });

    down.addEventListener("click", function() {
        if(!rocketInFlight){
            window.alert("Launch Rocket to maneuver.")
        } else {
        let rocketTopNum = parseInt(rocket.style.bottom) - 10;
        rocket.style.bottom = `${rocketTopNum}px`
        console.log(rocket.style.bottom)
        spaceShuttleHeightNum = parseInt(spaceShuttleHeight.innerHTML) - 10000;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightNum;   
        }
    });

    left.addEventListener("click", function() {
        if(!rocketInFlight){
            window.alert("Launch Rocket to maneuver.")
        } else {
        let rocketTopNum = parseInt(rocket.style.left) - 10;
        rocket.style.left = `${rocketTopNum}px`
        console.log(rocket.style.left)
        }    
    });

    right.addEventListener("click", function() {
        if(!rocketInFlight){
            window.alert("Launch Rocket to maneuver.")
        } else {
        let rocketTopNum = parseInt(rocket.style.left) + 10;
        rocket.style.left = `${rocketTopNum}px`
        console.log(rocket.style.left)   
        } 
    });

        



});