let etc = require('./services/EthereumClassic')

etcClass = new etc()
etcClass.getWalletAddress('0xD0C76D722d0cBfF42dC2e6664298b98B7aC640af', function(error, data) {
    console.log(data)
})