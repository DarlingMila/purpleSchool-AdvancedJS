class Car {
    #brand;
    #model;
    #mileage;

    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }

    set mileage(newMileage) {
        this.#mileage += newMileage;
    }

    get mileage() {
        return this.#mileage;
    }

    info() {
        console.log(`${this.#brand} ${this.#model} ${this.#mileage}`);
    }
}

const car1 = new Car("brand1", "model1", 1000);
console.log(car1);
car1.mileage = 369;
console.log(car1.mileage);
car1.info();
console.log(car1);
