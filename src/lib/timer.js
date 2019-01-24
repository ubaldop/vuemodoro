export const PomodoroTimer = {
    startCountdown: (minutes, seconds, callback) => {
     minutes = minutes || 0;
     seconds = seconds || 0;
     seconds = seconds + (minutes * 60);

     let interval = null;

     function countdown() {
         callback(seconds);
         if (seconds === 0) {
             clearInterval(interval);
         } else {
             seconds--;
         }
     }

     interval = setInterval(function () {
         countdown();
     }, 1000);

     countdown();
     return interval;
    },

    pauseCountdown: (intervalId) => {
        clearInterval(intervalId);
    },

    stopCountdown: (intervalId) => {
        clearInterval(intervalId);
    },

    remainingTime: (seconds) => {
        return {
            'mm': seconds / 60 | 0,
            'ss': (seconds % 60 | 0),
            'running': (seconds > 0)
        };
    }
}
