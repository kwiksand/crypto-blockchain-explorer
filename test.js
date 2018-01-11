let bitcoin = require('./services/Bitcoin')
bitcoinClass = new bitcoin()
//bitcoinClass.getWalletAddress('1A4TYCASYSRXEgkmC9C7HNB2nexx3fqqBC', function(error, data) {
//bitcoinClass.getWalletAddress('35g6QtKZCpVFgHAf5Y7P6WYh5W4r8UJofX', function(error, data) {
bitcoinClass.getWalletAddress('1D4UZG4qo8bF1MuZHSEyBHRZaxT8inatXS', function(error, data) {
    console.log(data)
})
/*
let synx = require('./services/Syndicate')

synxClass = new synx()
synxClass.getWalletAddress('SXtJwytXHDkzEZYhGsR1Jw4BnwFdws2Ki', function(error, data) {
    console.log(error)
    console.log(data)
})*/

let cryptoid = require('./services/_cryptoidBase')

cryptoidClass = new cryptoid('GAM')

/*cryptoidClass.getWalletAddress('GTgLbDTCws8SaDkhRDayf9i8STy6stQLuE', function(error, data) {
    console.log(data)
})*/
