let btnAdd = document.getElementById('add')
let btnDelete = document.getElementById('delete')
let btnToggle = document.getElementById('toggle')
let title = document.querySelector('h1')

btnAdd.addEventListener("click", ()=>{
    title.classList.add('bg-accent')
})

btnDelete.addEventListener('click', ()=>{
    title.classList.remove('bg-accent')
})

btnToggle.addEventListener('click', ()=>{
    if (title.classList.contains('bg-accent')){
        title.classList.remove('bg-accent')
    } else {
        title.classList.add('bg-accent')
    }
})

let scam = document.getElementById('scam')

document.body.addEventListener('mouseleave', ()=>{
    scam.style.display = "block"
})
document.body.addEventListener('mouseenter', ()=>{
    scam.style.display = "none"
})

let spyInput = document.getElementById('spy')
let spyParagraph = document.getElementById('spy-text')
let pressed = []
spyInput.addEventListener('keydown', (e) => {

    if (e.key.length === 1) {
        pressed.push(e.key)
    }

    spyParagraph.textContent = pressed.join('')
})