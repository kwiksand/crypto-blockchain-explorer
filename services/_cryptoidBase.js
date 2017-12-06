let BaseService = require('./_base')
let util = require('util')

class CryptoidBaseService extends BaseService {

    constructor(symbol) {
        super()

        //TODO - remove these once the exchanges are getting their fees on launch
        this._blockExplorerUrl = "https://chainz.cryptoid.info/#SYMBOL#/api.dws"
        this._addressUrl = "?q=getbalance&a=#ADDRESS#"

        if (symbol) {
            this._symbol = symbol
        } else {
            this._symbol = "OVERRIDDEN"
        }

    }

    getWalletAddress(address, callback) {
        let url = `${this._blockExplorerUrl}${this._addressUrl}`
        url = url.replace("#SYMBOL#", this._symbol.toLowerCase())
        url = url.replace("#ADDRESS#", address)

        let headers, params = ""

        var options = {
            url: url,
            method: "GET",
            headers: headers,
            timeout: this.timeout,
            qs: params,
            json: {}        // request will parse the json response into an object
        }
    
        var requestDesc = util.format("%s request to url %s with parameters %s",
            options.method, options.url, JSON.stringify(params))

        this.executeRequest(options, requestDesc, function(err, response) {
            callback(null, { 'address': address, 'balance': response })
        })
    }
}
module.exports = CryptoidBaseService
