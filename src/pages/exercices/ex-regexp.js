const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

let email = document.getElementById('email')

email.addEventListener('keyup', ()=> {
    if(regexMail.test(email.value) === false){
        email.classList.add('input-error')
    } else {
        email.classList.remove('input-error')
        email.classList.add('input-success')
    }
    //console.log(regexMail.test(email.value))
})

