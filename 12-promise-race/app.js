
function getProduct(id) {

    return new Promise((resolve, reject) => {
        
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => {
            if (res.status == 200) {
                resolve(res.json());
            } else {
                reject(new Error('🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️'));
            }
        })
        .catch((e) => console.log(e))
    })
}

function race(promisesArray) {
    return new Promise((resolve, reject) => {

        for (let promise of promisesArray) {
            promise
            .then(resolve)
            .catch(reject)
        }
    })
}

function getResult() {
    race([getProduct(3), getProduct(2000000000), getProduct(15)])
    .then((res) => console.log('Успешно!', res))
    .catch((e) => console.error('Неуспешно!', e.message));
}

getResult();
