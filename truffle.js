const HDWalletProvider = require('truffle-hdwallet-provider');

//truffle migrate reset --network ropsten reset 

const infuraKey = "https://rinkeby.infura.io/v3/9121a347";

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby:{
      provider: function(){return new HDWalletProvider("f d o d y",infuraKey) ;},
      //network_id:'*',
      //gas:4500000,
      //gasPrice:1000000000,

      from: '0xBb1089f000E9B',
      network_id: 4,
      shareNonce: true,
      derivationPath: "m/44'/1'/0'/0/",
      networkCheckTimeoutnetworkCheckTimeout: 10000,
      timeoutBlocks: 200
      ,
    }
  },
  compilers: {
    solc: {
      version: "0.4.24" // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  }
};
