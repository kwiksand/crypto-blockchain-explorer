let BaseService = require('./_base')
let util = require('util')

class IquidusBaseService extends BaseService {

    constructor() {
        super()

        //TODO - remove these once the exchanges are getting their fees on launch
        this._blockExplorerUrl = "iquidus_url"
        this._addressUrl = "/ext/getaddress/#ADDRESS#"

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
            if (err) {
                console.log('Foudn Err')
                return callback(err)
            }
            if ('error' in response) {
                //console.log('Found Error in response')
                console.log(JSON.stringify(Object.prototype.toString(this)))
                console.log(JSON.stringify(this, null, 4))
                return callback(`Error: ${response.error}`)
            }
            if (response == null) {
                //console.log('Response was null')
                return callback(`Error: Response object was null for ${this.constructor.name}`)
            }
            if (!('balance' in response)) {
                console.log('No balance in response')
                return callback('Balance not found')

            }
            callback(null, { 'address': address, 'balance': response.balance, 'metaData': {} })
        })
    }
}
module.exports = IquidusBaseService
