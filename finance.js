let deposit

deposit = Number(deposit)
deposit = window.prompt("How much do you want to deposit")

if (deposit == NaN || deposit == null || deposit == "") {
    deposit = 0
}

console.log(deposit)

document.getElementById("acc-bal").innerHTML = "Account Balance: $" + deposit

let profit

profit = Number(profit)
profit = (deposit * 0.002)

document.getElementById("acc-prof").innerHTML = "Profit earned per hour: $" + profit.toLocaleString("en-US")

function showmenu(){
    menu.style.left = "0"
}

function hidemenu(){
    menu.style.left = "-200px"
}