
function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position, error) => {
            if (error) {
                reject(error);
            } else {
                resolve(`${position.coords.latitude}, ${position.coords.longitude}`);
            }
        })
    })
}

getLocation()
.then((data) => console.log(data))
.catch((err) => console.log(err));
