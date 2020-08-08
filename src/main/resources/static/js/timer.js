let timeinterval;
let starting = false;
const timer = (endtime) => {
  function updateClock() {
    const t = getTimeRemaining(endtime);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
    console.log(t);
    remaining.innerHTML = ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2);
  }

  updateClock();
  timeinterval = setInterval(updateClock, 1000);
};

const getTimeRemaining = (endtime) => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
};

const id = 'timer';
const timeInMinutes = 25;
const deadline = new Date(Date.parse(new Date()) + timeInMinutes * 60 * 1000);
const dt = getTimeRemaining(deadline);
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
  remaining.innerHTML = ('0' + dt.minutes).slice(-2) + ":" + ('0' + dt.seconds).slice(-2);
};


