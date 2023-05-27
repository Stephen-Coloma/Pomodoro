const clock = {
    minute: 24,
    seconds: 59,
    temp: "25",
    temp1: "00"
}

let interval; 

function countdown() {
  const startStopBtn = document.getElementById("startStopBtn");

  if (startStopBtn.innerHTML === "Start") {
    // Start the interval
    interval = setInterval(update, 1000);
    startStopBtn.innerHTML = "Stop";
        // Stop the interval
  } else if(startStopBtn.innerHTML === "Stop"){
    clearInterval(interval);
    startStopBtn.innerHTML = "Reset";
  }else if(startStopBtn.innerHTML === "Reset"){
    if(startStopBtn.innerHTML ==="Reset"){
        startStopBtn.innerHTML = "Start";
      
        clock.minute = 24;
        clock.seconds = 59;

    document.getElementById("textTimer").innerHTML = clock.temp + ":" + clock.temp1;
    }    
  }
  
}


function update() {
    const textTimer = document.getElementById("textTimer");
  
    clock.seconds--;
  
    const formattedSeconds = clock.seconds < 10 ? "0" + clock.seconds : clock.seconds;
    const formattedMinutes = clock.minute < 10 ? "0" + clock.minute : clock.minute;
  
    textTimer.innerHTML = formattedMinutes + ":" + formattedSeconds;
  
    if (clock.seconds < 1) {
      clock.minute--;
      clock.seconds = 59;
    }
  }
//POMODORO SET UP-------------------------------------------------------

function pomodoro(){
  //changing the time display on screen
  document.getElementById("textTimer").innerHTML = '25:00'

  //setting up the clock object properties
  clock.minute = 24;
  clock.seconds = 59;
  clock.temp = "25";
  clock.temp1 = "00";

  //changing the body class name to pomodoro
  document.getElementById("body").className = "pomodoro";
}


  //SHORTBREAK SET UP -------------------------------------------------------
  function shortBreak(){
    //changing the time display on screen
    document.getElementById("textTimer").innerHTML = '05:00'

    //setting up the clock object properties
    clock.minute = 4;
    clock.seconds = 59;
    clock.temp = "05";
    clock.temp1 = "00";

      //changing the body class name to shortBreak
    document.getElementById("body").className = "shortBreak";
  }


  //longbrak SET UP -------------------------------------------------------
  function longBreak(){
    //changing the time display on screen
    let x = document.getElementById("textTimer").innerHTML = '15:00'

    //setting up the clock object properties
    clock.minute = 14;
    clock.seconds = 59;
    clock.temp = "15";
    clock.temp1 = "00";

      //changing the body class name to longBreak
    document.getElementById("body").className = "longBreak";
  }
  