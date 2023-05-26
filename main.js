const clock = {
    minute: 24,
    seconds: 59
}

//THIS NEEDS REVISION!

function setUp(color){
    document.getElementById("body").style.backgroundColor = color;
}

//POMODORO-------------------------------------------------------

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
        const temp = "25";
        const temp1 = "00";

        clock.minute = 24;
        clock.seconds = 59;

    document.getElementById("textTimer").innerHTML = temp + ":" + temp1;
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

  //SHORT BREAK-------------------------------------------------------

  