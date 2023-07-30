let firstname = window.prompt("What shall we call you? (Nickname)")

console.log(firstname)
if(firstname == null || firstname == ""){
    firstname = "Anonymous"
}
firstname = firstname.charAt("0").toLocaleUpperCase() + firstname.slice(1)
firstname = firstname.trim()
document.getElementById("welcome").innerHTML = "Welcome back, " + firstname

document.getElementById("linkk").innerHTML = firstname

function showmenu(){
    menu.style.left = "0"
}

function hidemenu(){
    menu.style.left = "-200px"
}