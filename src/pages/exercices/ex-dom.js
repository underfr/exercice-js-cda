let h1Title = document.querySelector('h1')
let paragraph = document.querySelector('p')

let h1TitleContent = "Exercices DOM"
let paragraphContent = "Lorem ipsum"

h1Title.textContent = h1TitleContent
paragraph.textContent = paragraphContent

h1Title.style.backgroundColor = "blue"

const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img: 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
}

let userDiv = document.querySelector('.userProfile')

const userImg = document.createElement('img')
userImg.src = userData.img

const userName = document.createElement('p')
userName.textContent = userData.name

const userEmail = document.createElement('p')
userEmail.textContent = userData.email

const userAge = document.createElement('p')
userAge.textContent = userData.age

const userDob = document.createElement('p')
userDob.textContent = userData.dob

const userOnline = document.createElement('p')
userOnline.textContent = userData.active ? "Online" : "Offline"

userDiv.append(userImg)
userDiv.append(userName)
userDiv.append(userEmail)
userDiv.append(userAge)
userDiv.append(userDob)
userDiv.append(userOnline)
