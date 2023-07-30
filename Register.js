let fullname
let firstname
let lastname
let username
let email
let password

document.getElementById("btn").onclick = function (){

    fullname = document.getElementById("name").value
    firstname = fullname.slice(0, fullname.indexOf(" "))
    lastname = fullname.slice(fullname.indexOf(" ") + 1)
    username = document.getElementById("user").value
    email = document.getElementById("mail").value
    password = document.getElementById("stop").value

    console.log(firstname)
    console.log(lastname)
    console.log(username)
    console.log(email)
    console.log(password)

    window.alert("We are now accessing your info")
}
//const nickname = window.prompt("What shall we use to address you (nickname)")