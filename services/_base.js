var util = require("util"),
_ = require("underscore"),
request = require("request"),
crypto = require("crypto"),
VError = require("verror")

class BaseService {

    constructor() {
    }

    executeRequest(options, requestDesc, callback) {
        var functionName = "Cryptopia.executeRequest()"

        request(options, function(err, response, data)
        {
            var error = null,   // default to no errors
                returnObject = data
    
            if(err)
            {
                error = new VError(err, "%s failed %s", functionName, requestDesc)
                error.name = err.code
            }
            else if (response.statusCode < 200 || response.statusCode >= 300)
            {
                error = new VError("%s HTTP status code %s returned from %s", functionName,
                    response.statusCode, requestDesc)
                error.name = response.statusCode
            }
            else if (options.form)
            {
                try {
                    returnObject = JSON.parse(data)
                }
                catch(e) {
                    error = new VError(e, "Could not parse response from server: " + data)
                }
            }
            // if json request was not able to parse json response into an object
            else if (options.json && !_.isObject(data) )
            {
                error = new VError("%s could not parse response from %s\nResponse: %s", functionName, requestDesc, data)
            }
    
            if (_.has(returnObject, "error_code"))
            {
                var errorMessage = mapErrorMessage(returnObject.error_code)
    
                error = new VError("%s %s returned error code %s, message: '%s'", functionName,
                    requestDesc, returnObject.error_code, errorMessage)
    
                error.name = returnObject.error_code
            }
    
            callback(error, returnObject)
        })
    }

    getOrderBook(pair, callback) {
        this.cryptox.getOrderBook({pair: pair}, callback)
    }
}
module.exports = BaseService

