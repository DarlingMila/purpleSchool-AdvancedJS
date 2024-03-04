
function getDataFrom(url) {
    return fetch(url)
    .then((res) => {
        if (!res.ok) throw new Error('Ошибка!');
        return res.json();
    })
}

getDataFrom('https://pokeapi.co/api/v2/pokemon/ditto')
.then(({ abilities }) => {
    return getDataFrom(abilities[0].ability.url);
})
.then(({ effect_entries }) => {
    console.log(effect_entries[1].effect);
})
.catch((err) => console.log(err.message))
