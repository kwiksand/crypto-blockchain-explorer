let CryptoidBaseService = require('./_cryptoidBase')
let util = require('util')

class Dash extends CryptoidBaseService {

    constructor() {
        super()

        //TODO - remove these once the exchanges are getting their fees on launch
        this._symbol = "DASH"

    }
}
module.exports = Dash
