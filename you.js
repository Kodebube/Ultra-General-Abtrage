let email
while (email == '' || email == null || email.length < 12){
    email = window.prompt(`Input your email in this format: user0001@gmail.com (12)`)
}
console.log(email)
let test = email.slice(0, 3)
let testt = email.slice(3, email.indexOf('@'))
testt = testt.replaceAll(testt, '*****')
let end = email.slice(email.indexOf('@') - 1)
let testtt = test + testt + end



document.getElementById('take!').innerHTML = testtt


function showmenu() {
    menu.style.left = "0"
}

function hidemenu() {
    menu.style.left = "-200px"
}