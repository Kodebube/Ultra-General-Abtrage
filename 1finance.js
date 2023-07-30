
function showmenu() {
    menu.style.left = "0"
}

function hidemenu() {
    menu.style.left = "-200px"
}
//document.getElementById("ifbank").innerHTML = null
document.getElementById("btn").onclick = function () {

    const PAY = document.getElementById("paymethod")
    const BANK = document.getElementById("bankbtn")
    const CRYPTO = document.getElementById("cryptobtn")

    if (PAY.value == BANK.value) {
        console.log("You are paying with bank transfer")
        window.alert("You have chosen to pay with bank transfer")
        document.getElementById("ONEWAY").innerHTML = "Select the bank you intend to use for your payment:"
        document.getElementById("ifbank").style.display = "block"
        document.getElementById("btn1").style.display = "block"
        document.getElementById("ifcrypto").style.display = "none"
    }
    else if (PAY.value == CRYPTO.value) {
        console.log("You are paying with crypto")
        window.alert("You have chosen to pay with crypto")
        document.getElementById("ONEWAY").innerHTML = "Select the cryptocurrency you intend to use for your payment:"
        document.getElementById("ifcrypto").style.display = "block"
        document.getElementById("btn1").style.display = "block"
        document.getElementById("ifbank").style.display = "none";
    }
    else {
        console.log("There is a problem! Please refresh the page & retry.")
    }
}

//if user chooses bank transfer:

document.getElementById("btn1").onclick = function () {

    const BANK = document.getElementById("ifbank")

    if (BANK.value == document.getElementById("fbn").value) {
        window.alert("You have chosen to pay through First bank")
        console.log("First Bank!")
    }

    else if (BANK.value == document.getElementById("acc").value) {
        window.alert("You have chosen to pay through Access Bank")
        console.log("Access Bank!")
    }

    else if (BANK.value == document.getElementById("uba").value) {
        window.alert("You have chosen to pay through UBA bank")
        console.log('UBA!')
    }

    else if (BANK.value == document.getElementById("ibtc").value) {
        window.alert("You have chosen to pay through Stanbic IBTC Bank")
        console.log('Stanbic IBTC Bank!')
    }

    else if (BANK.value == document.getElementById("stb").value) {
        window.alert("You have chosen to pay through Sterling Bank")
        console.log('Sterling Bank!')
    }

    else if (BANK.value == document.getElementById("fid").value) {
        window.alert("You have chosen to pay through Fidelity Bank")
        console.log('Fidelity Bank!')
    }

    else if (BANK.value == document.getElementById("ppb").value) {
        window.alert("You have chosen to pay through PalmPay Mobile Bank")
        console.log('PalmPay Mobile Bank!')
    }

    else if (BANK.value == document.getElementById("ztb").value) {
        window.alert("You have chosen to pay through Zenith Bank")
        console.log('Zenith Bank!')
    }

    else if (BANK.value == document.getElementById("opb").value) {
        window.alert("You have chosen to pay through Opay Mobile Bank")
        console.log('Opay Mobile Bank!')
    }

    else if (BANK.value == document.getElementById("pvb").value) {
        window.alert("You have chosen to pay through Providus Bank")
        console.log('Providus Bank!')
    }

    else if (BANK.value == document.getElementById("pp").value) {
        window.alert("You have chosen to pay through PayPal")
        console.log('PayPal!')
    }

    else {
        alert('Error! Error!! Error!!!')
    }
}

console.log(document.getElementById("btc").value)


document.getElementById("btn1").onclick = function () {
    const CRYPTO = document.getElementById('ifcrypto')

    if (CRYPTO.value == document.getElementById("btc").value) {
        window.alert("You have chosen to pay with Bitcoin")
        console.log('Bitcoin!')
    }

    else if (CRYPTO.value == document.getElementById("eth").value) {
        window.alert("You have chosen to pay with Ethereum")
        console.log('Ethereum!')
    }

    else if (CRYPTO.value == document.getElementById("usdt").value) {
        window.alert("You have chosen to pay with Tether (USDT)")
        console.log('US Dollars!')
    }

    else if (CRYPTO.value == document.getElementById("bnb").value) {
        window.alert("You have chosen to pay with BNB")
        console.log('BNB!')
    }

    else if (CRYPTO.value == document.getElementById("busd").value) {
        window.alert("You have chosen to pay with Binance Coin USD (BUSD)")
        console.log('Binance coin!')
    }

    else if (CRYPTO.value == document.getElementById("xrp").value) {
        window.alert("You have chosen to pay with XRP")
        console.log('XRP!')
    }

    else if (CRYPTO.value == document.getElementById("sql").value) {
        window.alert("You have chosen to pay with Solana")
        console.log('Solana!')
    }

    else if (CRYPTO.value == document.getElementById("usdc").value) {
        window.alert("You have chosen to pay with USD Coin (USDC)")
        console.log('USD Coin (USDC)!')
    }

    else if (CRYPTO.value == document.getElementById("ada").value) {
        window.alert("You have chosen to pay with Cardano")
        console.log('Cardano!')
    }

    else if (CRYPTO.value == document.getElementById("doge").value) {
        window.alert("You have chosen to pay with Dogecoin (DOGE)")
        console.log('Dogecoin (DOGE)!')
    }

    else if (CRYPTO.value == document.getElementById("dot").value) {
        window.alert("You have chosen to pay with Polkadot (DOT)")
        console.log('Polkadot (DOT)!')
    }

    else if (CRYPTO.value == document.getElementById("dai").value) {
        window.alert("You have chosen to pay with Dai")
        console.log('Dai!')
    }

    else if (CRYPTO.value == document.getElementById("poly").value) {
        window.alert("You have chosen to pay with Polygon (MATIC)")
        console.log('Polygon (MATIC)!')
    }

    else if (CRYPTO.value == document.getElementById("shib").value) {
        window.alert("You have chosen to pay with Shiba Inu (SHIB)")
        console.log('Shiba Inu (SHIB)!')
    }

    else if (CRYPTO.value == document.getElementById("trx").value) {
        window.alert("You have chosen to pay with TRON (TRX)")
        console.log('TRON (TRX)!')
    }

    else if (CRYPTO.value == document.getElementById("avax").value) {
        window.alert("You have chosen to pay with Avalanche (AVAX)")
        console.log('Avalanche (AVAX)!')
    }

    else if (CRYPTO.value == document.getElementById("leo").value) {
        window.alert("You have chosen to pay with UNUS SED LEO (LEO)")
        console.log('UNUS SED LEO (LEO)!')
    }

    else if (CRYPTO.value == document.getElementById("ltc").value) {
        window.alert("You have chosen to pay with Litecoin (LTC)")
        console.log('Litecoin (LTC)!')
    }

    else if (CRYPTO.value == document.getElementById("xlm").value) {
        window.alert("You have chosen to pay with Stellar (XLM)")
        console.log('Stellar (XLM)!')
    }

    else if (CRYPTO.value == document.getElementById("bch").value) {
        window.alert("You have chosen to pay with Bitcoin Cash (BCH)")
        console.log('Bitcoin Cash (BCH)!')
    }

    else {
        alert('Error! Error!! Error!!!')
    }
}
/*//Crypto
    else if (CRYPTO.value == document.getElementById("btc").value) {
        window.alert("You have chosen to pay with Bitcoin")
        console.log('Bitcoin!')
    }
    */