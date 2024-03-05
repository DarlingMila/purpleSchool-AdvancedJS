
function getLocation() {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(`${position.coords.latitude}, ${position.coords.longitude}`);
        })
    })
}

getLocation().then((data) => console.log(data));
