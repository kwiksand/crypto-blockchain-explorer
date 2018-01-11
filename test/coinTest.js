
var assert = require('assert');
var expect  = require("chai").expect;

let blockchain_explorer = require('../index')

let testWallets = [
  { 
    "coin": "Bitcoin",
    "symbol": "BTC",
    "walletAddress": '1D4UZG4qo8bF1MuZHSEyBHRZaxT8inatXS'
  },
  { 
    "coin": "Dash",
    "symbol": "DASH",
    "walletAddress": 'XgLMXhsrnVU4JfaoCboubgXB9oJ1s5iCHq'
  },
  { 
    "coin": "EthereumClassic",
    "symbol": "ETC",
    "walletAddress": '0xf606958eba4f54efd94f2f2719dc6ed95a990825'
  },
  { 
    "coin": "Syndicate",
    "symbol": "SYNX",
    "walletAddress": 'SXFgDh8rZsBbwNCoJ4YX3iRkHs859iVWyW'
  }
]

for (let i in testWallets) {
  let symbol = testWallets[i]['symbol']
  let coin = testWallets[i]['coin']
  let walletAddress = testWallets[i]['walletAddress']

  describe(`${coin} Check`, function() {
    describe('#indexOf()', function() {
      let coinClass = new blockchain_explorer(symbol)
      //let bitcoinClass = explorer.CryptocurrencyExplorer('BTC')
  
      it(`should have a factory returned class called ${coin}`, function() {
        expect(coinClass.constructor.name).to.equal(coin)
      })
  
      it('should return a balance, noTransactions', function(done) {
        this.timeout(50000);
      //let walletAddress = '1D4UZG4qo8bF1MuZHSEyBHRZaxT8inatXS'
      coinClass.getWalletAddress(walletAddress, function(error, data) {
          console.log(data)
          //assert.equal(data.balance, 15)
          expect(data).to.have.property('address');
          expect(data).to.have.property('balance');
          expect(data.address.toLowerCase()).to.be.equal(walletAddress.toLowerCase())
          done()
      })
    })
      it('should return a correct data formats', function(done) {
        this.timeout(50000);
      coinClass.getWalletAddress(walletAddress, function(error, data) {
          //assert.equal(data.balance, 15)
          expect(parseInt(data.balance)).to.be.at.least(0)
          if ('noTransactions' in data.metaData) {
            expect(data.metaData.noTransactions).to.be.at.least(0)
          }
          done()
      })
    })
  })
  })

}



/*let bitcoin = require('./services/Bitcoin')
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
/*
let cryptoid = require('./services/_cryptoidBase')

cryptoidClass = new cryptoid('GAM')

/*cryptoidClass.getWalletAddress('GTgLbDTCws8SaDkhRDayf9i8STy6stQLuE', function(error, data) {
    console.log(data)
})*/
