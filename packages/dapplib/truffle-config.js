require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net property harvest fashion flee second'; 
let testAccounts = [
"0xf485f50c5ee89af8efbb6f74a30a0fa1571bd46b76d92e26b4f8b8a9aea3ea16",
"0x2483a8e114e0dbc7d71070b0af61a04db3dbb4e54019edd8cd38a287038256f6",
"0x9a4e0767fb1c93b43bdfd55ec92b7775d286f986706bb9b4b1e249fe3f1da228",
"0xe7a4dc9d4cb2860170ca287d8495e58c764ffc009843ab9bcf6fa3a53a7940d9",
"0xd71dff87070dabd4f5d7bc442a12dbfba66c1600348fba8ee4bfc42f73219211",
"0xfecdfde8c6968704f65df514eb98923c46235dbebb4216524effb16911ce0b70",
"0x91ca03ebb98ebb963ad33d86e2c846fea030c1e4a967b8581f3fa5cfe8def721",
"0xb52cd9cf51d7dfa0b6dad17c6c65b7cb59a5227e0ef85d93331ec3ef6342ab46",
"0x15175f6b0c539c9e618bb9f59ff5f5ef2f744a5c26b54d156c75f3dfaab0d5af",
"0x82c46b8a87fdaef667ae2efa35b3da000e34dd3c7012fc9bafcb6599d0633dbf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

