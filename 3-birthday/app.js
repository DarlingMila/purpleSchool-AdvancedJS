
function isOldEnough(dateString) {
  const dateToday = new Date();
  const birthdayDate = new Date(dateString);

  if (dateToday.getFullYear() - birthdayDate.getFullYear() < 14) return false;
  if (dateToday.getFullYear() - birthdayDate.getFullYear() > 14) return true;

  // dateToday.getFullYear() === birthdayDate.getFullYear()
  if (dateToday.getMonth() > birthdayDate.getMonth()) return false;
  if (dateToday.getMonth() < birthdayDate.getMonth()) return true;

  // dateToday.getMonth() === birthdayDate.getMonth()
  if (dateToday.getDate() > birthdayDate.getDate()) return false;
  if (dateToday.getDate() < birthdayDate.getDate()) return true;

  // dateToday.getDate() === birthdayDate.getDate()
  return true;
}

console.log(isOldEnough("2009-12-21"));
console.log(isOldEnough("2009-12-23"));
console.log(isOldEnough("2009-12-20"));
console.log(isOldEnough("2008-12-21"));
console.log(isOldEnough("2010-01-21"));
