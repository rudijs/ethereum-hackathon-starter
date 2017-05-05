'use strict'

var Web3 = require('web3')

var web3 = new Web3()

// web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))
web3.setProvider(new web3.providers.HttpProvider())

const coinbase = web3.eth.coinbase
console.log(coinbase)

// const originalBalance = web3.eth.getBalance(coinbase).toNumber()
// const originalBalance = web3.eth.getBalance(coinbase).toNumber()
const originalBalance = web3.eth.getBalance(coinbase).toString(10)
console.log(originalBalance)
console.log(web3.fromWei(originalBalance, 'ether'))
