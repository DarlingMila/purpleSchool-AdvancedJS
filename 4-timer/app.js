
function timeTillNewYear() {
  const now = new Date();
  const newYear = new Date("December 31, 2043 23:59:59");

  const gap = newYear - now;

  const months = new Date(gap).getMonth();
  const days = new Date(gap).getDate();
  const hours = new Date(gap).getHours();
  const minutes = new Date(gap).getMinutes();
  const seconds = new Date(gap).getSeconds();

  const line = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
  return line;
}


console.log(timeTillNewYear());