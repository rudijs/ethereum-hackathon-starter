# Initial raw developer notes

## Start a local private Etheruem blockchain

1. Start an Ethereum node
~/Downloads/geth-darwin-amd64-1.5.9-a07539fb/geth --datadir . --dev --rpc --rpccorsdomain "http://localhost:8000"

2. Attach and open a console
~/Downloads/geth-darwin-amd64-1.5.9-a07539fb/geth attach geth.ipc

> eth.coinbase
> personal.listAccounts

> personal.newAccount()
Passphrase: 
Repeat passphrase: 
"0xf35662accc80f114f455af759c052606ec562751"
> eth.coinbase
"0xf35662accc80f114f455af759c052606ec562751"
> personal.listAccounts
["0xf35662accc80f114f455af759c052606ec562751"]

> miner.start(2)
true

3. Start Mist client
/Applications/Ethereum\ Wallet.app/Contents/MacOS/Ethereum\ Wallet --rpc geth.ipc


Create a new account in the UI

List accounts in the terminal

> personal.listAccounts
["0xf35662accc80f114f455af759c052606ec562751", "0xa075b958851bbe6931600b1f13c12e1833d75ae3"]

> var tx = {from: eth.accounts[0], to: eth.accounts[1], value: web3.toWei(1.23, "ether")}
undefined
> tx
{
  from: "0xf35662accc80f114f455af759c052606ec562751",
  to: "0xa075b958851bbe6931600b1f13c12e1833d75ae3",
  value: "1230000000000000000"
}
> personal.sendTransaction(tx, "asdf")
"0x327b95e5e00a970b03ab8beb8a55ed3570bf3f7ee2a508950f823f76fd7bf202"
> 


0x946B226dD4D426971A1580Cb76175FB5ed934220
6ea19c842935122f81f4e579c4b831348192f2e617bc44ab82755dcd83669b9e

var tx = {from: eth.accounts[0], to: '0x946B226dD4D426971A1580Cb76175FB5ed934220', value: web3.toWei(1.23, "ether")}
personal.sendTransaction(tx, "asdf")

