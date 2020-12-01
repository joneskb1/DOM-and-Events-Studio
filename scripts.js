// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
  let takeoff = document.getElementById("takeoff");
  takeoff.addEventListener("click", function (event) {
    let isReady = confirm("Confirm that the shuttle is ready for takeoff.");
    if (isReady === true) {
      document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
      document.getElementById("shuttleBackground").style.backgroundColor =
        "blue";
      document.getElementById("spaceShuttleHeight").innerHTML = 10000;
    }
  });


  let goUp = document.getElementById("up");
  let goDown = document.getElementById("down");
  let goLeft = document.getElementById("left");
  let goRight = document.getElementById("right");
  let rocket = document.getElementById("rocket");
  let currentHeight = document.getElementById("spaceShuttleHeight").innerHTML;
  let CH = Number(currentHeight);
  let moveV = 250;
  let moveH = 250;

  goUp.addEventListener("click", function (event) {
    moveV -= 10;
    rocket.style.marginTop = moveV + "px";
    CH += 10000;
    document.getElementById("spaceShuttleHeight").innerHTML = CH;
  });

  goDown.addEventListener("click", function (event) {
    moveV += 10;
    rocket.style.marginTop = moveV + "px";
    CH -= 10000;
    document.getElementById("spaceShuttleHeight").innerHTML = CH;
  });

  goLeft.addEventListener("click", function (event) {
    moveH -= 10;
    rocket.style.marginLeft = moveH + "px";
  });

  goRight.addEventListener("click", function (event) {
    moveH += 10;
    rocket.style.marginLeft = moveH + "px";
  });

  let land = document.getElementById("landing");
  land.addEventListener("click", function (event) {
    alert("The shuttle is landing. Landing gear engaged");
    document.getElementById("flightStatus").innerHTML =
      "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor =
      "green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
    rocket.style.marginTop =  250+ "px";

  });

  let abort = document.getElementById("missionAbort");
  abort.addEventListener("click", function (event) {
    let confirmAbort = confirm("Confirm that you want to abort the mission");
    if (confirmAbort === true) {
      document.getElementById("flightStatus").innerHTML = "Mission aborted";
      document.getElementById("shuttleBackground").style.backgroundColor =
        "green";
      document.getElementById("spaceShuttleHeight").innerHTML = 0;
      rocket.style.marginTop =  250+ "px";

    }
  });
  
});
