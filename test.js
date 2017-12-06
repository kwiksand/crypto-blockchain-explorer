let synx = require('./services/Syndicate')

synxClass = new synx()
synxClass.getWalletAddress('SXutJwytXHDkzEZYhGsR1Jw4BnwFdws2Ki', function(error, data) {
    console.log(data)
})

let cryptoid = require('./services/_cryptoidBase')

cryptoidClass = new cryptoid('GAM')

cryptoidClass.getWalletAddress('GTgLbDTCws8SaDkhRDayf9i8STy6stQLuE', function(error, data) {
    console.log(data)
})
