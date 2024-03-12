export class Task {
    constructor (name) {
        this.name = name;
    }

    run() {
        console.log(`Выполняется: ${this.name}`);
    }
}