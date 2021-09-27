require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture help olympic trip notice rival smile purse grace industry furnace sport'; 
let testAccounts = [
"0x4b3af06886031cbb6e2425d383bb3ffc937a33dd648987be0661d58683505a8b",
"0x43e9abfcec1099f7448228afffd12fef8f9a3d403309003489c9f6dbaa58bca2",
"0x05a3749513b7fa720c3dce41586718b2e234ff5852557085c5f9e9ec9c87351c",
"0x1e7e32071e493456cd224a5a0efc3815e694d6448e7904b7af6c317c4b4c8b31",
"0xf10beaa8e9e716b9595f9b861c86f00361884e3d48b5fe58414b8f7d80f07965",
"0xdb1e471f0bee4066dcaea21e09104f7e285641d6d2b0b261be22503dd94b31a9",
"0xe3f276505c7853121bbb11fda67cba1f0c4dc0542ef1a983f6f1a86218ce057c",
"0xb79e3c00ba448f4a3980b46c51d976ad6d6ad7b7203abf9bb14a14910b94e0bf",
"0xcfdb0a1a70da0632ffacd8ed5e6d618bd84c499e2e79d7cd1fc51df95ff8f9b2",
"0x5b3c6ef1cbeaa54aadceeed240cca7f8477c4caa8123be5652fe2fc0672e9abf"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


