let BaseService = require('./_base')
let util = require('util')

class Bitcoin extends BaseService {

    constructor() {
        super()

        //TODO - remove these once the exchanges are getting their fees on launch
        this._blockExplorerUrl = "https://blockexplorer.com/api/"
        this._addressUrl = "addr/#ADDRESS#"

    }

    getWalletAddress(address, callback) {
        let url = `${this._blockExplorerUrl}${this._addressUrl}`
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
            callback(null, { 'address': response.addrStr, 'balance': response.balance, 'noTransactions': response.transactions.length })
        })
    }
}
module.exports = Bitcoin
