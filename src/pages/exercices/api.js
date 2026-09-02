let poke = document.getElementById('poke')
let pokemon = []

async function getPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json()
        return data
    } catch (err) {
        console.error(err)
    }
}

getPokemon().then(data => {
    if (!data) return
    data.results.forEach(p => {
        pokemon.push(p.name)
    })
    poke.innerHTML = pokemon.join('<br>')
})

let fakeUsers = document.getElementById('fakeUser')

const contactApiThenUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(dataTrans => {
            console.log(dataTrans);
            // console.log(dataTrans[0]);
            // console.log(dataTrans[0].name);
            // console.log(dataTrans[0].address.geo.lat);
            dataTrans.forEach(unUser=>{
                // let isClicked = false;
                let newP = document.createElement('p');
                newP.innerText = `(id:${unUser.id}) ${unUser.name} - ${unUser.email}`;

                fakeUsers.append(newP);
            })
        })
        .catch(error => console.log("Erreur custom : " + error));
};
contactApiThenUsers();