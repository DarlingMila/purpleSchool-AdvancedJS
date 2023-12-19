function rollTheDice(diceType) {
  const min = 1;
  const max = Number(diceType.slice(1));

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(rollTheDice("d4"));
console.log(rollTheDice("d4"));
console.log(rollTheDice("d4"));
console.log(rollTheDice("d4"));
console.log(rollTheDice("d4"));
console.log(rollTheDice("d4"));
console.log(rollTheDice("d4"));
console.log(rollTheDice("d4"));
console.log(rollTheDice("d4"));
console.log(rollTheDice("d4"));
