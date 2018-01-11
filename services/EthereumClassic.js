let BaseService = require('./_base')
let util = require('util')

class EthereumClassic extends BaseService {

    constructor() {
        super()

        //TODO - remove these once the exchanges are getting their fees on launch
        this._blockExplorerUrl = "https://api.gastracker.io/"
        this._addressUrl = "addr/#ADDRESS#"

    }

    getWalletAddress(address, callback) {
        let url = `${this._blockExplorerUrl}${this._addressUrl}`
        url = url.replace("#ADDRESS#", address)
        console.log("URL is: " + url)

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
            callback(null, { 'address': response.address, 'balance': response.balance.ether, 'metaData': { 'gwei': 0 } })
        })
    }
}
module.exports = EthereumClassic
