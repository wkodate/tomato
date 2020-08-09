const timer = () => {
  function updateClock() {
    const t = getTimeRemaining(currentTime);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
    console.log(t);
    remaining.innerHTML = ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2);
    currentTime--;
  }

  updateClock();
  timeinterval = setInterval(updateClock, 1000);
};

const getTimeRemaining = (timeInSec) => {
  const total = timeInSec;
  const seconds = total % 60;
  const minutes = parseInt((total / 60) % 60);
  const hours = parseInt((total / 60) / 60);

  return {
    total,
    hours,
    minutes,
    seconds
  };
};

const startstop = () => {
  if (starting) {
    // stop
    clearInterval(timeinterval);
    starting = false;
  } else {
    // start
    const deadline = new Date(Date.parse(new Date()) + currentTime * 1000);
    timer(deadline);
    starting = true;
  }
};

const reset = () => {
  clearInterval(timeinterval);
  starting = false;
  currentTime = timeInSeconds;
  const t = getTimeRemaining(currentTime);
  remaining.innerHTML = ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2);
};

const timeInMinutes = 25;
//const timeInMinutes = 1;
const timeInSeconds = timeInMinutes * 60;
const remaining = document.getElementById("timer").querySelector('.remaining');
const t = getTimeRemaining(timeInSeconds);

let currentTime = timeInSeconds;
let timeinterval;
let starting = false;

remaining.innerHTML = ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2);
