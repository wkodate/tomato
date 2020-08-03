const timer = (id, endtime) => {
  const clock = document.getElementById(id);
  const remaining = clock.querySelector('.remaining');

  function updateClock() {
    const t = getTimeRemaining(endtime);
    remaining.innerHTML = ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
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

const start = () => {
};

const pause = () => {
};

const reset = () => {
};

const timeInMinutes = 25;
const deadline = new Date(Date.parse(new Date()) + timeInMinutes * 60 * 1000);
timer('timer', deadline);

