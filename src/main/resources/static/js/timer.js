const id = 'timer';
const timeInMinutes = 25;
let timeinterval;
let starting = false;
let timeInSeconds = timeInMinutes * 60;
const timer = () => {
  function updateClock() {
    timeInSeconds--;
    const t = getTimeRemaining(timeInSeconds);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
    console.log(t);
    remaining.innerHTML = ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2);
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

const clock = document.getElementById(id);
const remaining = clock.querySelector('.remaining');

const startstop = () => {
  if (starting) {
    clearInterval(timeinterval);
    starting = false;
  } else {
    const deadline = new Date(Date.parse(new Date()) + timeInMinutes * 60 * 1000);
    console.log(deadline);
    timer(deadline);
    starting = true;
  }
};

const reset = () => {
  clearInterval(timeinterval);
  starting = false;
  timeInSeconds = timeInMinutes * 60;
  const t = getTimeRemaining(timeInSeconds);
  remaining.innerHTML = ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2);
};


