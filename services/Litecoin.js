let CryptoidBaseService = require('./_cryptoidBase')
let util = require('util')

class Litecoin extends CryptoidBaseService {

    constructor() {
        super()

        //TODO - remove these once the exchanges are getting their fees on launch
        this._symbol = "LTC"

    }
}
module.exports = Litecoin
