(function () {
    'use strict';

    class Task {
        constructor (name) {
            this.name = name;
        }

        run() {
            console.log(`Выполняется: ${this.name}`);
        }
    }

    class User {
        constructor(task) {
            this.task = task;
        }

        do() {
            this.task.run();
        }
    }

    const task = new Task('Приготовить ужин');
    const user = new User(task);
    user.do();

})();
