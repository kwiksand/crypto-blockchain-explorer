var verbose = false

const Bitcoin = require('./services/Bitcoin')
const Dash = require('./services/Dash')
const EthereumClassic = require('./services/EthereumClassic')
const Litecoin = require('./services/Litecoin')
//const Ethereum = require('./services/Ethereum')

var util = require("util"),
    _ = require("underscore"),
    request    = require("request"),
    crypto = require("crypto"),
    VError = require("verror")
//    md5 = require("MD5")

var CryptocurrencyExplorer = function CryptocurrencyExplorer(currency)
{
    switch (currency.toUpperCase()) {
        case "BITCOIN":
        case "BTC":
            return new Bitcoin()
        case "DASH":
            return new Dash()
        case "ETHEREUMCLASSIC":
        case "ETC":
        case "Ethereum Classic":
            return new EthereumClassic()
            break
        case "LITECOIN":
        case "LTC":
            return new Litecoin()
        default:
            throw new Error("Currency (" + currency + ") not known and/or not implemented yet")
    }
}

module.exports = CryptocurrencyExplorer