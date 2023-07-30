
document.getElementById("btn").onclick = function(){

    document.getElementById("JAVA").style.display = "block"

    document.getElementById("btn").style.display = "none"
    document.getElementById("caret").style.display = "block"
}

document.getElementById("caret").onclick = function(){

    document.getElementById("JAVA").style.display = "none"

    document.getElementById("btn").style.display = "block"
    document.getElementById("caret").style.display = "none"
}

function showmenu(){
    menu.style.left = "0"
}

function hidemenu(){
    menu.style.left = "-200px"
}