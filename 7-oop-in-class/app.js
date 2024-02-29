
class Character {
    constructor(race, name, lang) {
        this.race = race;
        this.name = name;
        this.lang = lang;
    }

    speak() {
        console.log(this.lang, this.name);
    }
}

class Orc extends Character {
    constructor(race, name, lang, weapon) {
        super(race, name, lang);
        this.weapon = weapon;
    }

    attack() {
        console.log(`attack with ${this.weapon}`);
    }

    speak() {
        console.log("Нам надо больше золота.");
    }
}

class Elf extends Character {
    constructor(race, name, lang, spell) {
        super(race, name, lang);
        this.spell = spell;
    }

    castSpell() {
        console.log(`cast ${this.spell}`);
    }

    speak() {
        console.log("Я терпелив и я подожду.");
    }
}


console.group(`O R C`);
const orc = new Orc('orc', 'orcName', 'orcLang', 'ax');
console.log(orc);
orc.attack();
orc.speak();
console.groupEnd();

console.group(`E L F`);
const elf = new Elf('elf', 'elfName', 'elfLang', 'heal');
console.log(elf);
elf.castSpell();
elf.speak();
console.groupEnd();
