
function isOldEnough(dateString) {
  const dateToday = new Date();
  const birthdayDate = new Date(dateString);

  if (dateToday.getFullYear() - birthdayDate.getFullYear() < 14) return false;
  if (dateToday.getFullYear() - birthdayDate.getFullYear() > 14) return true;

  // dateToday.getFullYear() === birthdayDate.getFullYear()
  if (dateToday.getMonth() > birthdayDate.getMonth()) return true;
  if (dateToday.getMonth() < birthdayDate.getMonth()) return false;

  // dateToday.getMonth() === birthdayDate.getMonth()
  if (dateToday.getDate() > birthdayDate.getDate()) return true;
  if (dateToday.getDate() < birthdayDate.getDate()) return false;

  // dateToday.getDate() === birthdayDate.getDate()
  return true;
}

console.log("на 24.01.2024")
console.log(isOldEnough("2009-12-21")); // true
console.log(isOldEnough("2010-01-21")); // true
console.log('---')
console.log(isOldEnough("2010-03-21")); // false
console.log(isOldEnough("2010-01-30")); // false
console.log('---')
console.log(isOldEnough("2010-01-23")); // true
console.log(isOldEnough("2010-01-24")); // true
console.log(isOldEnough("2010-01-25")); // false