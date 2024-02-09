function Character (race, name, lang) {
    this.race = race;
    this.name = name;
    this.lang = lang;
}

Character.prototype.speak = function() {
    console.log(this.lang, this.name);
}

const orc = new Character('orc', 'orcName', 'orcLang');
orc.weapon = 'ax';
orc.attack = function() {
    console.log(`attack with ${this.weapon}`);
}

const elf = new Character('elf', 'elfName', 'elfLang');
elf.spell = 'heal';
elf.castSpell = function() {
    console.log(`cast ${this.spell}`);
}

console.group(`O R C`);
console.log(orc);
console.log(orc.weapon);
orc.speak();
orc.attack();
console.groupEnd();

console.group(`E L F`);
console.log(elf);
console.log(elf.spell);
elf.speak();
elf.castSpell();
console.groupEnd();
