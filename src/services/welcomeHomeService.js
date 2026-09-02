async function getJokes(){
    try{
        const response = await fetch('https://api.chucknorris.io/jokes/random')
        return await response.json()
    } catch (err){
        console.error(err)
    }
}
let jokes = await getJokes()
document.getElementById('jokes').textContent = jokes.value