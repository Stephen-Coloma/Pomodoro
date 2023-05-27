const clock = {
    minute: 24,
    seconds: 60,
    dummyDisplay: "25:00"
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

    document.getElementById("textTimer").innerHTML = clock.dummyDisplay;
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
      clock.seconds = 60;
    }
  }
//POMODORO SET UP-------------------------------------------------------

function pomodoro(){
  //changing the time display on screen
  document.getElementById("textTimer").innerHTML = '25:00'
  document.getElementById("msg").innerHTML = 'Time to focus!'

  //setting up the clock object properties
  clock.minute = 24;
  clock.seconds = 60;
  clock.dummyDisplay = "25:00"

  //changing the body class name to pomodoro
  document.getElementById("body").className = "pomodoro";

}


  //SHORTBREAK SET UP -------------------------------------------------------
  function shortBreak(){
    //changing the time display on screen
    document.getElementById("textTimer").innerHTML = '05:00'
    document.getElementById("msg").innerHTML = 'Time to rest!'

    //setting up the clock object properties
    clock.minute = 4;
    clock.seconds = 60;
    clock.dummyDisplay = "05:00"

      //changing the body class name to shortBreak
    document.getElementById("body").className = "shortBreak";

  }


  //longbrak SET UP -------------------------------------------------------
  function longBreak(){
    //changing the time display on screen
    document.getElementById("textTimer").innerHTML = '15:00'
    document.getElementById("msg").innerHTML = 'Time to rest!'

    //setting up the clock object properties
    clock.minute = 14;
    clock.seconds = 60;
    clock.dummyDisplay = "15:00"

      //changing the body class name to longBreak
    document.getElementById("body").className = "longBreak";
  }
  