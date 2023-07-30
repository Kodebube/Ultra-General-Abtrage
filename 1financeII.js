

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