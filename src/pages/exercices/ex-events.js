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
spyInput.addEventListener('keyup', (e) => {
    spyParagraph.textContent = spyInput.value
})

let spyTextArea = document.getElementById('spy-area')
let spySubmit = document.getElementById('spy-submit')

spyTextArea.addEventListener('keyup', (e)=>{

    if (spyTextArea.value.length > 5){
        spySubmit.disabled = 'true'
    }

})

let localTextArea = document.getElementById('local-textarea')
let localText = document.getElementById('local-text')

localTextArea.addEventListener('keyup', ()=>{
    localStorage.setItem('myText', localTextArea.value)
})

localText.textContent = localStorage.getItem('myText')
localTextArea.value = localStorage.getItem('myText')