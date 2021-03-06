const timer = () => {
  function updateClock() {
    const t = getTimeRemaining(currentTime);
    if (t.total <= 0) {
      taskCount = parseInt(storage.getItem('task'));
      taskCount++;
      storage.setItem('task', taskCount);
      taskSelector.innerHTML = updateTasks(taskCount);
      progressSelector.innerHTML = updateProgress(0);
      clearInterval(timeinterval);
      /**
      let music = new Audio("/resources/static/js/sound.mp3");
      let playPromise = music.play();
      if (playPromise !== undefined) {
        playPromise.then(function () {
        }).catch(function (error) {
          console.log(error);
        });
      }
       */
    }
    console.log(t);
    timerSelector.innerHTML = ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2);
    progressSelector.innerHTML = updateProgress((timeInSeconds - currentTime) / timeInSeconds);
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

const updateProgress = (rate) => {
  progress = "";
  for (i = 0; i < parseInt(10 * rate); i++) {
    progress += "▓";
  }
  for (i = 0; i < 10 - parseInt(10 * rate); i++) {
    progress += "░";
  }
  progress += parseInt(100 * rate) + "%";
  return progress;
};

const updateTasks = (cnt) => {
  tasks = "";
  for (i = 0; i < cnt; i++) {
    tasks += "●";
  }
  return tasks;
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
  timerSelector.innerHTML = ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2);
  progressSelector.innerHTML = updateProgress(0);
};

const timeInMinutes = 25;
//const timeInMinutes = 1;
const timeInSeconds = timeInMinutes * 60;
const t = getTimeRemaining(timeInSeconds);
const storage = localStorage;
storage.setItem('task', '0');

let currentTime = timeInSeconds;
let timeinterval;
let starting = false;

const timerSelector = document.getElementById("timer").querySelector('.timer');
timerSelector.innerHTML = ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2);
const taskSelector = document.getElementById("timer").querySelector('.tasks');
taskSelector.innerHTML = updateTasks(parseInt(storage.getItem('task')));
const progressSelector = document.getElementById("timer").querySelector('.progressBar');
progressSelector.innerHTML = updateProgress(0);
