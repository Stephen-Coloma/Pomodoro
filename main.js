const clock = {
    minute: 24,
    seconds: 60,
    dummyDisplay: "25:00",
    resetMin: 24,
    resetSec: 60,
    cycle:0
}
//initializations
let interval; 


function countdown() {
  const startStopBtn = document.getElementById("startStopBtn");

  if (startStopBtn.innerHTML === "Start") {
    // Start the interval of the update method with a delay of 1 sec
    interval = setInterval(update, 1000);
    startStopBtn.innerHTML = "Stop";
  } else if(startStopBtn.innerHTML === "Stop"){ // Stop the interval
    clearInterval(interval);
    //after clearing interval, reset the minute and sec prpoperties 
    clock.minute = clock.resetMin;
    clock.seconds = clock.resetSec;

    startStopBtn.innerHTML = "Reset";
  }else if(startStopBtn.innerHTML === "Reset"){
      startStopBtn.innerHTML = "Start";
      document.getElementById("textTimer").innerHTML = clock.dummyDisplay; 
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
  
    if(clock.minute==-1 & clock.seconds==59){ //if time is up
      clearInterval(interval);
      let cycle = ++clock.cycle;
      timeIsUp(cycle);
    }
  }

function timeIsUp(cycle){
  const count = document.getElementById("count");
  switch(cycle){
    case 1:
      count.innerHTML = "Short break count: " + 1;
      shortBreak();
      countdown();
      break;
    case 3:
      count.innerHTML = "Short break count: " + 2;
      shortBreak();
      countdown();
      break;
    case 5:
      count.innerHTML = "Short break count: " + 3;
      shortBreak();
      countdown();
      break;
    case 7:
      count.innerHTML = "Long break!";
      longBreak();
      countdown();
      
      break;
    default:{
      pomodoro();
      countdown();
      break;
    }
    
  }

  if(clock.cycle == 8){
    clock.cycle = 0;
  }
}


//POMODORO SET UP-------------------------------------------------------

function pomodoro(){
  //changing the time display on screen
  document.getElementById("textTimer").innerHTML = '25:00'
  document.getElementById("msg").innerHTML = 'Time to focus!'
  document.getElementById("startStopBtn").innerHTML="Start"
  clearInterval(interval);

  //setting up the clock object properties
  clock.minute = 24;
  clock.seconds = 60;
  clock.dummyDisplay = "25:00"
  clock.resetMin = 24;
  clock.resetSec = 60;

  //changing the body class name to pomodoro
  document.getElementById("body").className = "pomodoro";

}


  //SHORTBREAK SET UP -------------------------------------------------------
  function shortBreak(){
    //changing the time display on screen
    document.getElementById("textTimer").innerHTML = '05:00'
    document.getElementById("msg").innerHTML = 'Have a short rest!'
    document.getElementById("startStopBtn").innerHTML="Start"
    clearInterval(interval);

    //setting up the clock object properties
    clock.minute = 4;
    clock.seconds = 60;
    clock.dummyDisplay = "05:00"
    clock.resetMin = 4;
    clock.resetSec = 60;
    

      //changing the body class name to shortBreak
    document.getElementById("body").className = "shortBreak";

  }


  //longbrak SET UP -------------------------------------------------------
  function longBreak(){
    //changing the time display on screen
    document.getElementById("textTimer").innerHTML = '15:00'
    document.getElementById("msg").innerHTML = 'Have a long rest!'
    document.getElementById("startStopBtn").innerHTML="Start"
    clearInterval(interval);

    //setting up the clock object properties
    clock.minute = 14;
    clock.seconds = 60;
    clock.dummyDisplay = "15:00"
    clock.resetMin = 14;
    clock.resetSec = 60;

      //changing the body class name to longBreak
    document.getElementById("body").className = "longBreak";

  }

  function playSound(){
    var audio = document.getElementById('button-audio');

    audio.currentTime = 0; // Rewind audio to the beginning
    audio.play(); 
  }