let h1Title = document.querySelector('h1')
let paragraph = document.querySelector('p')

let h1TitleContent = "Exercices DOM"
let paragraphContent = "Lorem ipsum"

h1Title.textContent = h1TitleContent
paragraph.textContent = paragraphContent

h1Title.classList.add('text-4xl', 'font-bold', 'p-8', 'text-primary')

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
userImg.classList.add('rounded-full', 'w-32', 'h-32', 'object-cover', 'mb-4')

const userName = document.createElement('p')
userName.textContent = userData.name
userName.classList.add('text-xl', 'font-bold', 'mb-2')

const userEmail = document.createElement('p')
userEmail.textContent = userData.email
userEmail.classList.add('text-sm', 'text-base-content/70', 'mb-2')

const userAge = document.createElement('p')
userAge.textContent = userData.age
userAge.classList.add('text-sm', 'mb-2')

const userDob = document.createElement('p')
userDob.textContent = userData.dob
userDob.classList.add('text-sm', 'mb-2')

const userOnline = document.createElement('p')
userOnline.textContent = userData.active ? "Online" : "Offline"
userOnline.classList.add('badge', 'badge-success')

userDiv.append(userImg)
userDiv.append(userName)
userDiv.append(userEmail)
userDiv.append(userAge)
userDiv.append(userDob)
userDiv.append(userOnline)