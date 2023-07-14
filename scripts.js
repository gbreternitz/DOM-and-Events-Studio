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

    rocket.style.bottom = "0px";
    rocket.style.position = "absolute";
    rocket.style.left = "0px";

    takeoff.addEventListener("click", function () {
        takeoffFlag = window.confirm("Confirm that the shuttle is ready for takeoff."); // come back to this

        if (takeoffFlag){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = '10,000';
        }
    });

    landing.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = '0';

    });

    missionAbort.addEventListener("click", function () {
        let missionAbortFlag = window.confirm("Confirm that you want to abort the mission.");
        if (missionAbortFlag){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = '0';
        }
    })

    up.addEventListener("click", function() {
        let rocketTopNum = parseInt(rocket.style.bottom) + 10;
        rocket.style.bottom = `${rocketTopNum}px`
        console.log(rocket.style.bottom)
    });

    down.addEventListener("click", function() {
        let rocketTopNum = parseInt(rocket.style.bottom) - 10;
        rocket.style.bottom = `${rocketTopNum}px`
        console.log(rocket.style.bottom)    
    });

    left.addEventListener("click", function() {
        let rocketTopNum = parseInt(rocket.style.left) - 10;
        rocket.style.left = `${rocketTopNum}px`
        console.log(rocket.style.left)    
    });

    right.addEventListener("click", function() {
        let rocketTopNum = parseInt(rocket.style.left) + 10;
        rocket.style.left = `${rocketTopNum}px`
        console.log(rocket.style.left)    
    });

        



});