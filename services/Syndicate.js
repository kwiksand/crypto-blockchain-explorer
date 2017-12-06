let IquidusBaseService = require('./_iquidusBase')
let util = require('util')

class Syndicate extends IquidusBaseService {

    constructor() {
        super()

        this._blockExplorerUrl = "http://explorer.syndicateltd.net"
        this._symbol = "SYNX"

    }
}
module.exports = Syndicate
