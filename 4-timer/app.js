const title = document.querySelector("#title");
const timeLeft = document.querySelector("#timeLeft");

// основная функция - показ времени
function setTimeLeft() {

  const timeNow = new Date();
  const currentYear = new Date().getFullYear();
  const nextYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);

  const diff = nextYear - timeNow;
  const months = new Date(diff).getMonth();
  const days = getDays(currentYear, timeNow);
  const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
  const minutes = Math.floor(diff / (1000 * 60) % 60);
  const seconds = Math.floor(diff / 1000 % 60);
  
  title.textContent = `До нового ${nextYear.getFullYear()} года осталось:`;

  timeLeft.textContent = `${monthLeft(months)}, ${daysLeft(days)}, ${hoursLeft(hours)}, ${minutesLeft(minutes)}, ${secondsLeft(seconds)}`;
}

// высчитывает сколько дней осталось
function getDays(currentYear, timeNow) {

  const month = timeNow.getMonth() + 1;
  let daysInMonth;
  
  switch (month) {
    case 1, 3, 5, 7, 8, 10, 12:
      daysInMonth = 31;
      break;
      
    case 4, 6, 9, 11:
      daysInMonth = 31;
      break;
      
    default:
      if (((currentYear % 4 == 0) && (currentYear % 100 != 0)) || (currentYear % 400 == 0)){
        daysInMonth = 29;

      } else {
        daysInMonth = 28;
      }
  }
    
  return daysInMonth - timeNow.getDate();
}

// фунцкции, добавляющие правильные окончания
// месяцы
function monthLeft(months) {
  let word;

  switch (true) {
    case (months === 0 || months >= 5):
      word = "месяцев";
      break;

    case (months > 1 && months < 5):
      word = "месяца";
      break;

    default:
      word = "месяц";
  }

  return `${months} ${word}`;
}

// дни
function daysLeft(days) {
  let word;

  switch (true) {
    case (days === 0 || (days >= 5 && days <= 20) || (days >= 25 && days <= 30)):
      word = "дней";
      break;

    case ((days >= 2 && days <= 4) || (days >= 22 && days <= 24)):
      word = "дня";
      break;

    default:
      word = "день";
  }

  return `${days} ${word}`;
}

// часы
function hoursLeft(hours) {
  let word;

  switch (true) {
    case (hours === 0 || (hours >= 5 && hours <= 20)):
      word = "часов";
      break;

    case ((hours >= 2 && hours <= 4) || (hours >= 22 && hours <= 23)):
      word = "часа";
      break;

    default:
      word = "час";
  }

  return `${hours} ${word}`;
}

// минуты
function minutesLeft(minutes) {
  let word;

  switch (true) {
    case ((minutes === 0 || minutes >= 5 && minutes <= 20) || (minutes >= 25 && minutes <= 30) || (minutes >= 35 && minutes <= 40) || (minutes >= 45 && minutes <= 50) || (minutes >= 55 && minutes <= 60)):
      word = "минут";
      break;

    case ((minutes >= 2 && minutes <= 4) || (minutes >= 22 && minutes <= 24) || (minutes >= 32 && minutes <= 34) || (minutes >= 42 && minutes <= 44) || (minutes >= 52 && minutes <= 54)):
      word = "минуты";
      break;

    default:
      word = "минута";
  }

  return `${minutes} ${word}`;
}

// секунды
function secondsLeft(seconds) {
  let word;

  switch (true) {
    case ((seconds === 0 || seconds >= 5 && seconds <= 20) || (seconds >= 25 && seconds <= 30) || (seconds >= 35 && seconds <= 40) || (seconds >= 45 && seconds <= 50) || (seconds >= 55 && seconds <= 60)):
      word = "секунд";
      break;

    case ((seconds >= 2 && seconds <= 4) || (seconds >= 22 && seconds <= 24) || (seconds >= 32 && seconds <= 34) || (seconds >= 42 && seconds <= 44) || (seconds >= 52 && seconds <= 54)):
      word = "секунды";
      break;

    default:
      word = "секунда";
  }

  return `${seconds} ${word}`;
}


setTimeLeft();
setInterval(setTimeLeft, 1000);
