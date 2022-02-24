

//Web3 : https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.5/web3.min.js
//Web3 : https://cdnjs.cloudflare.com/ajax/libs/web3/3.0.0-rc.5/web3.min.js
//Web3 : https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js

//shift + tab pour désindenter
//tab pour indenter
//(ctrl + K)+(ctrl + D) pour indenter auto
//Alt pour saisir en carré

////Adr and ABI of token BNB 
//const ETH_BNB_Adress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52'
////const ETH_BNB_ABI = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52'
//var ETH_BNB_Token;

////Adr and abi of token  USDT
//const BSC_USDT_Adress = "0x55d398326f99059ff775485246999027b3197955";
////const BSC_USDT_ABI = ABI_Standart
//const BSC_USDT_ABI = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');

//var BSC_USDT_Token;

////Adr and abi of token  BUSD
//const BSC_BUSD_Adress = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
//const BSC_BUSD_ABI = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');

//var BSC_BUSD_Token;

////ABI and adrr BNB/BUSD
//const BSC_BNB_BUSD_Adress = "0x1B96B92314C44b159149f7E0303511fB2Fc4774f";
//const BSC_BNB_BUSD_ABI = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
//var BSC_BNB_BUSD_LP;
//var BSC_BNB_BUSD_TotalPrice;

//Created check function to see if the wallet extension is installed
const isWalletInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    if (typeof web3 !== 'undefined') {
        return true;
    } else {
        return false;
    };
};





////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////START FUNCTION PHANTOM//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//Lien web3 //https://github.com/solana-labs/solana-web3.js/releases/download/v0.16.6/solanaWeb3.min.js ou //https://unpkg.com/@solana/web3.js@latest/lib/index.iife.js
//// `solanaWeb3` is provided in the global namespace by the `solanaWeb3.min.js` script bundle.
///https://docs.phantom.app/


const onClickPastAddressPhantom = async () => { //https://clipboardjs.com/
    copyToClickBoard(currentAccountPhantom)
    toastInfo("Address copied to clipboard")
};




const isPhantomInstalled = () => {

    console.log("web3Solana :", web3Solana)
    if (web3Solana !== undefined) {
        if (web3Solana.isPhantom) {
            console.log("isPhantomInstalled :", web3Solana.isPhantom);
            return true;
        } else {
            console.log("isPhantomInstalled :", false);
            return false;
        };
    } else {
        console.log("isPhantomInstalled = false and  web3Solana = undefined");
        return false;
    };
};
const isPhantomConnected = () => {
    console.log("currentAccountPhantom : ", currentAccountPhantom)
    if (currentAccountPhantom !== undefined) {
        if (currentAccountPhantom.length === 0) {
            console.log("Phantom wallet not connected", currentAccountPhantom)
            return false;
        } else {
            console.log("Phantom wallet connected", currentAccountPhantom)
            return true;
        };

    } else {
        console.log("Phantom wallet not connected", currentAccountPhantom)
        return false;
    };

    //return Boolean(BinanceChain.isConnected());
};
//The ID of account for transfer
function getPhantomAccountID(asset, amount) {
    //BinanceChain
    //    .requestAccounts()
    //    .then((res) => {
    //        binanceChainSend(asset, amount, res[0].id)
    //    })
    //    .catch((err) => {
    //        console.error("error requestAccount :", err)

    //    });
};
const getPhantomCurrentAccount = () => {
    //BinanceChain
    //    .request({ method: 'eth_accounts' })
    //    .then(binanceHandleAccountsChanged)
    //    .catch((err) => {
    //        // Some unexpected error.
    //        // For backwards compatibility reasons, if no accounts are available,
    //        // eth_accounts will return an empty array.
    //        console.error(err);
    //    });

};


const phantomSend = async (asset, amount) => {
    //https://stackoverflow.com/questions/69546971/how-to-properly-transfer-solana-sol-using-web3js-via-phantom
    //https://codesandbox.io/s/github/phantom-labs/sandbox?file=/src/App.tsx 
    //https://docs.phantom.app/
    //https://solana-labs.github.io/solana-web3.js/modules.html#Cluster
    //https://github.com/solana-labs/wallet-adapter/
//https://docs.phantom.app/integrating/sending-a-transaction
//https://docs.solana.com/developing/clients/javascript-reference
//https://codesandbox.io/s/github/phantom-labs/sandbox?file=/src/App.tsx
//https://docs.solana.com/developing/clients/javascript-api
    console.log("send Phantom : ", asset);
    //import * as web3Solana_Test from '@solana/web3.js';

    console.log("solanaWeb3 :", solanaWeb3);

    let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('testnet'));

    let fromKeypair = solanaWeb3.publicKey;
    let toKeypair = solanaWeb3.publicKey;
    let transaction = new solanaWeb3.Transaction();
    
    transaction.add(
        connection.transfer({
        fromPubkey: fromKeypair,
        toPubkey: toKeypair,
        lamports: solanaWeb3.LAMPORTS_PER_SOL
      })
    );

    solanaWeb3.sendAndConfirmTransaction(
        connection,
        transaction,
        [solanaWeb3]
      );

//     const getProvider = async () => {
//         if ("solana" in window) {
//           const provider = window.solana;
//           if (provider.isPhantom) {
//             console.log("Is Phantom installed?  ", provider.isPhantom);
//             return provider;
//           }
//         } else {
//           window.open("https://www.phantom.app/", "_blank");
//         }
//       };

//    // Detecing and storing the phantom wallet of the user (creator in this case)
//    var provider = await getProvider();
//    console.log("Public key of the emitter: ",provider.publicKey.toString());

//     const recieverWallet = new solanaWeb3.PublicKey(Adress_ToSolana);
//     //const recieverWallet = new solanaWeb3.Keypair.generate();
    
//     const NETWORK = solanaWeb3.clusterApiUrl('devnet');
//     const connection = new solanaWeb3.Connection(
//         NETWORK,
//         );

// //   // Airdrop some SOL to the sender's wallet, so that it can handle the txn fee
// //   var airdropSignature = await connection.requestAirdrop(
// //     provider.publicKey,
// //     solanaWeb3.LAMPORTS_PER_SOL,
// //   );

//   // Confirming that the airdrop went through
//   await connection.confirmTransaction();
//   console.log("Airdropped");

//   var transaction = new web3.Transaction().add(
//     solanaWeb3.SystemProgram.transfer({
//       fromPubkey: provider.publicKey,
//       toPubkey: recieverWallet,
//       lamports: solanaWeb3.LAMPORTS_PER_SOL //Investing 1 SOL. Remember 1 Lamport = 10^-9 SOL.
//     }),
//   );

//   // Setting the variables for the transaction
//   transaction.feePayer = await provider.publicKey;
//   let blockhashObj = await connection.getRecentBlockhash();
//   transaction.recentBlockhash = await blockhashObj.blockhash;

//   // Transaction constructor initialized successfully
//   if(transaction) {
//     console.log("Txn created successfully");
//   }
// // Request creator to sign the transaction (allow the transaction)
// let signed = await provider.signTransaction(transaction);
// // The signature is generated
// let signature = await connection.sendRawTransaction(signed.serialize());
// // Confirm whether the transaction went through or not
// await connection.confirmTransaction(signature);

// //Signature chhap diya idhar
// console.log("Signature: ", signature);




//     const NETWORK = solanaWeb3.clusterApiUrl("mainnet-beta");
   
// const transaction = new solanaWeb3.Transaction();

// const { signature } = await window.solana.request({
//     method: "signAndSendTransaction",
//     params: {
//          message: transaction.serializeMessage(),
//     },
// });

// await connection.confirmTransaction(signature);

};
////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////END FUNCTION PHANTOM//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////START FUNCTION SOLFLARE///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

const onClickInstallSolflare = async () => {
    window.open('')
};
const onClickPastAddressSolflare = async () => { //https://clipboardjs.com/
    copyToClickBoard(currentAccountSolflare)
    toastInfo("Address copied to clipboard")
};
const buttonIsInstallSolflare = async () => {
    console.log("buttonIsInstallSolflare")
    const imgWallet = getImageWallet30();
    onboardButton.innerHTML = '<img src="' + imgWallet + '" /> &nbsp; Install Wallet';
    nextButton.innerHTML = 'Install &nbsp; <img src="IMG_Token/logo_SOLFLARE_30x30.png" /> &nbsp; <b>Solflare</b> &nbsp; Wallet';

};
const buttonIsNextSolflare = async () => {
    console.log("buttonIsNextSolflare")
    onboardButton.innerHTML = currentAccountSolflare.substring(0, 5) + '...' + currentAccountSolflare.substring(38, 42) || 'Not able to get accounts';

    setLabelNext_SwitchNetworkETH();

};
const buttonIsConnectSolflare = async () => {
    console.log("buttonIsConnectSolflare")
    const imgWallet = getImageWallet30();
    onboardButton.innerHTML = '<img src="' + imgWallet + '" /> &nbsp; Connect Wallet';

    nextButton.innerHTML = 'Connect &nbsp; <img src="IMG_Token/logo_SOLFLARE_30x30.png" /> &nbsp; <b>Solflare</b> &nbsp; Wallet';

};
const initButtonSolflare = async () => {
    console.log("start init button Solflare");
    if (solflareInstalled == false) {
        buttonIsInstallSolflare();
    } else {
        console.log("Solflare Wallet installed")
        //currentAccountBinance = await BinanceChain.request({ method: 'eth_accounts' });
        if (isSolflareConnected() == false) {
            buttonIsConnectSolflare();
        } else {
            buttonIsNextSolflare();
        };
    };
};

const isSolflareInstalled = () => {
    if (window.solflare && window.solflare.isSolflare) {
        console.log("isSolflareInstalled :", window.solflare.isSolflare);
        return true;
    } else {
        console.log("isSolflareInstalled :", false);
        return false;
    };
};
const isSolflareConnected = () => {
    console.log("currentAccountSolflare : ", currentAccountSolflare)
    if (currentAccountSolflare !== undefined) {
        if (currentAccountSolflare.length === 0) {
            console.log("Solflare wallet not connected", currentAccountSolflare)
            return false;
        } else {
            console.log("Solflare wallet connected", currentAccountSolflare)
            return true;
        };

    } else {
        console.log("Solflare wallet not connected", currentAccountSolflare)
        return false;
    };

    //return Boolean(BinanceChain.isConnected());
};
//The ID of account for transfer
function getSolflareAccountID(asset, amount) {
    //BinanceChain
    //    .requestAccounts()
    //    .then((res) => {
    //        binanceChainSend(asset, amount, res[0].id)
    //    })
    //    .catch((err) => {
    //        console.error("error requestAccount :", err)

    //    });
};
const getSolflareCurrentAccount = () => {
    //BinanceChain
    //    .request({ method: 'eth_accounts' })
    //    .then(binanceHandleAccountsChanged)
    //    .catch((err) => {
    //        // Some unexpected error.
    //        // For backwards compatibility reasons, if no accounts are available,
    //        // eth_accounts will return an empty array.
    //        console.error(err);
    //    });

};
const onClickConnectSolflare = async () => {

    toast.dismissAll()
    forcedConnectWallet = true
    toastInfo('Connect your wallet')

};
const initSendSolflare = async () => {
    console.log("initsend Solflare")

};

const solflareSend = async (asset, amount, accountID) => { //https://docs.binance.org/smart-chain/wallet/wallet_api.html


};

///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////END FUNCTION SOLFLARE///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////// https://docs.binance.org/smart-chain/wallet/wallet_api.html#difference-with-metamask
/////////////START FUNCTION FOR BINANCE CHAIN //////////// //For bridge aumaticely https://docs.binance.org/smart-chain/developer/cross-chain-transfer.html




const onClickPastAddressBinance = async () => { //https://clipboardjs.com/
    copyToClickBoard(currentAccountBinance)
    toastInfo("Address copied to clipboard")
};



const isBinanceInstalled = () => {

    if (window.BinanceChain !== undefined) {
        console.log("isBinanceChain :", true);
        return true;
    } else {
        console.log("isBinanceChain :", false);
        return false;
    }
}

const BinanceChainID = () => {

    return BinanceChain.chainId; //Binance-Chain-Tigris is return fot mainnet
};

const isBinanceConnected = () => {
    console.log("currentAccountBinance : ", currentAccountBinance)
    if (currentAccountBinance !== undefined) {
        if (currentAccountBinance.length === 0) {
            console.log("Binance wallet not connected", currentAccountBinance)
            return false;
        } else {
            console.log("Binance wallet connected", currentAccountBinance)
            return true;
        };

    } else {
        console.log("Binance wallet not connected", currentAccountBinance)
        return false;
    };

    //return Boolean(BinanceChain.isConnected());
};

//Thread for change chain ID
const startBinancehandleChainChanged = () => {
    BinanceChain.on('chainChanged', binanceChainhandleChainChanged);
};

const binanceChainhandleChainChanged = (_chainId) => {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload();
};

//The ID of account for transfer
function getBinanceAccountID(asset, amount) {
    BinanceChain
        .requestAccounts()
        .then((res) => {
            binanceChainSend(asset, amount, res[0].id)
        })
        .catch((err) => {
            console.error("error requestAccount :", err)

        });
};

const getBinanceCurrentAccount = () => {
    BinanceChain
        .request({ method: 'eth_accounts' })
        .then(binanceHandleAccountsChanged)
        .catch((err) => {
            // Some unexpected error.
            // For backwards compatibility reasons, if no accounts are available,
            // eth_accounts will return an empty array.
            console.error(err);
        });

};

const startBinancehandleAccountsChanged = () => {
    // Note that this event is emitted on page load.
    // If the array of accounts is non-empty, you're already
    // connected.
    BinanceChain.on('accountsChanged', binanceHandleAccountsChanged);
}

// For now, 'eth_accounts' will continue to always return an array
const binanceHandleAccountsChanged = (accounts) => {

    console.log('Account Binance Changed')
    if (accounts.length === 0) {
        // Binance Chain Wallet is locked or the user has not connected any accounts
        console.log('Please connect to Binance Chain Wallet.');
        currentAccountBinance = undefined
        if (forcedConnectWallet == true) {
            forcedConnectWallet = false
            toast.dismissAll()
            toastWarnig('Wallet not connected')
        };
    } else if (accounts[0] !== currentAccountBinance) {
        currentAccountBinance = accounts[0];
        console.log("Binance Account Changed :", currentAccountBinance)
        // Do any other work!

        if (forcedConnectWallet == true) {
            toast.dismissAll()
            forcedConnectWallet = false
            toastValidate('Wallet successfully connected')
        };

    }
    //I init button for connect wallet
    initButtonBinance()
}





const binanceChainSend = async (asset, amount, accountID) => { //https://docs.binance.org/smart-chain/wallet/wallet_api.html
    console.log("send BinanceChain : ", asset);
    //console.log("resID",resID)
    //console.log("resID.id",resID.id)
    //console.log("resID[1]",resID[1])
    //console.log("resID[1].id",resID[1].id)
    //console.log("BinanceChain.requestAccounts.", BinanceChain.requestAccounts);
    //console.log("BinanceChain.requestAccounts.", BinanceChain.requestAccounts[1]);
    //console.log("BinanceChain.requestAccounts.", BinanceChain.requestAccounts[1].id);
    //console.log("BinanceChain.requestAccounts.id", BinanceChain.requestAccounts[0].id);

    console.log("accountID", accountID);
    BinanceChain
        .transfer({
            fromAddress: currentAccountBinance,
            //toAddress: Adress_ToBinanceTest,
            toAddress: Adress_ToBinance,
            asset: asset,
            //asset:"BUSD-BAF",
            amount: amount,
            accountId: accountID,
            //networkId: 'bbc-testnet'
            networkId: 'bbc-mainnet'
        })
        .then((txHash) => txSuccess(txHash))
        .catch((error) => txError(error));

    console.log("end");
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////END FUNCTION FOR BINANCE CHAIN ////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////// https://polkadot.js.org/
/////////////START FUNCTION FOR polkadot.js //////////// //

//polkadot.js.org/docs

const onClickInstallPolkadot = async () => {
    window.open('https://www.binance.org/en/binance-wallet')
};

const onClickPastAddressPolkadot = async () => { //https://clipboardjs.com/
    copyToClickBoard(currentAccountPolkadot)
    toastInfo("Address copied to clipboard")
};

const buttonIsInstallPolkadot = async () => {
    const imgWallet = getImageWallet30();
    onboardButton.innerHTML = '<img src="' + imgWallet + '" /> &nbsp; Install Wallet';
    nextButton.innerHTML = 'Install &nbsp; <img src="IMG_Token/logo_POLKADOT_30x30.png" /> &nbsp; <b>Polkadot</b> &nbsp; Wallet';
};

const buttonIsNextPolkadot = async () => {
    console.log("buttonIsNextPolkadot")
    onboardButton.innerHTML = currentAccountPolkadot.substring(0, 5) + '...' + currentAccountPolkadot.substring(38, 42) || 'Not able to get accounts';
    setLabelNext_SwitchNetworkETH();
};

const buttonIsConnectPolkadot = async () => {
    console.log("buttonIsConnectPolkadot")

    console.log("PolkadotID", PolkadotID())

    const imgWallet = getImageWallet30();
    onboardButton.innerHTML = '<img src="' + imgWallet + '" /> &nbsp; Connect Wallet';

    nextButton.innerHTML = 'Connect &nbsp; <img src="IMG_Token/logo_POLKADOT_30x30.png" /> &nbsp; <b>Polkadot</b> &nbsp; Wallet';

};

const initButtonPolkadot = async () => {
    console.log("start init button Polkadot");
    if (polkadotInstalled == false) {
        buttonIsInstallPolkadot();
    } else {
        console.log("Polkadot Wallet installed")
        //currentAccountPolkadot = await BinanceChain.request({ method: 'eth_accounts' });
        if (isPolkadotConnected() == false) {
            buttonIsConnectPolkadot();
        } else {
            buttonIsNextPolkadot();
        };
    };
};

const isPolkadotInstalled = () => {

    if (window.BinanceChain !== undefined) {
        console.log("isPolkadot :", true);
        return true;
    } else {
        console.log("isPolkadot :", false);
        return false;
    };
};

const PolkadotChainID = () => {

    return BinanceChain.chainId; //Binance-Chain-Tigris is return fot mainnet
};

const isPolkadotConnected = () => {
    console.log("currentAccountPolkadot : ", currentAccountPolkadot)
    if (currentAccountPolkadot !== undefined) {
        if (currentAccountPolkadot.length === 0) {
            console.log("Polkadot wallet not connected", currentAccountPolkadot)
            return false;
        } else {
            console.log("Polkadot wallet connected", currentAccountPolkadot)
            return true;
        };

    } else {
        console.log("Polkadot wallet not connected", currentAccountPolkadot)
        return false;
    };

    //return Boolean(BinanceChain.isConnected());
};

//Thread for change chain ID
const startPolkadothandleChainChanged = () => {
    BinanceChain.on('chainChanged', PolkadothandleChainChanged);
};

const polkadotChainhandleChainChanged = (_chainId) => {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload();
};

//The ID of account for transfer
function getPolkadotAccountID(asset, amount) {
    BinanceChain
        .requestAccounts()
        .then((res) => {
            binanceChainSend(asset, amount, res[0].id)
        })
        .catch((err) => {
            console.error("error requestAccount :", err)

        });
};

const getPolkadotCurrentAccount = () => {
    BinanceChain
        .request({ method: 'eth_accounts' })
        .then(binanceHandleAccountsChanged)
        .catch((err) => {
            // Some unexpected error.
            // For backwards compatibility reasons, if no accounts are available,
            // eth_accounts will return an empty array.
            console.error(err);
        });

};

const startPolkadothandleAccountsChanged = () => {
    // Note that this event is emitted on page load.
    // If the array of accounts is non-empty, you're already
    // connected.
    BinanceChain.on('accountsChanged', PolkadotHandleAccountsChanged);
};

// For now, 'eth_accounts' will continue to always return an array
const polkadotHandleAccountsChanged = (accounts) => {

    console.log('Account Polkadot Changed')
    if (accounts.length === 0) {
        // Binance Chain Wallet is locked or the user has not connected any accounts
        console.log('Please connect to Polkadot Wallet.');
        currentAccountPolkadot = undefined
        if (forcedConnectWallet == true) {
            forcedConnectWallet = false
            toast.dismissAll()
            toastWarnig('Wallet not connected')
        };
    } else if (accounts[0] !== currentAccountPolkadot) {
        currentAccountPolkadot = accounts[0];
        console.log("Polkadot Account Changed :", currentAccountPolkadot)
        // Do any other work!

        if (forcedConnectWallet == true) {
            toast.dismissAll()
            forcedConnectWallet = false
            toastValidate('Wallet successfully connected')
        };

    };
    //I init button for connect wallet
    initButtonPolkadot()
};

const onClickConnectPolkadot = () => {

    toast.dismissAll()
    forcedConnectWallet = true
    toastInfo('Connect your wallet')

    BinanceChain
        .request({ method: 'eth_requestAccounts' })
        .then(polkadotHandleAccountsChanged)
        .catch((err) => {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
        });

    startPolkadothandleChainChanged();
};

const initSendPolkadot = async () => {
    console.log("initsend")

    //For res on http
    Symbol = getSymbolToken();
    getNetworkIdComboSwap2();

    //networkIdComboSwap1 = 111111

    let asset = Symbol; //No contract, just symbol for send asset on binance chain

    //if (networkIdComboSwap1 != networkIdBinance) {
    //    console.log("BC diff ", networkIdComboSwap1, networkIdBinance);
    //    //I dismiss all toast
    //    toast.dismissAll();
    //    forcedSwitchNetwork = true;
    //    toastWarning("Please, select network on MetaMask");
    //    switchNetwork();
    //    return;
    //} else {
    //    console.log("equal");
    //};
    // if (comboToken.value == null) {
    //     alert("Please choose a token");
    // } else {

    tokenIdComboToken = IDToken1;

    if (controlAmount.value == null) {
        toastWarning("Please enter an amount");
    } else if (controlAmount.value == '') {
        toastWarning("Please enter an amount");
    } else if (controlAmount.value == 0) {
        toastWarning("Please enter an amount");
    } else if (saiAdress.value == '') {
        cellDestinationAddress.style.visibility = 'visible'
        toastWarning("Please enter an destination address");
    } else if (saiAdress.value == null) {
        cellDestinationAddress.style.visibility = 'visible'
        toastWarning("Please enter an destination address");
    } else if (saiAdress.value == 'undefined') {
        cellDestinationAddress.style.visibility = 'visible'
        toastWarning("Please enter an destination address");
    } else {
        qtyToken = controlAmount.value
        getPolkadotAccountID(asset, controlAmount.value);
    };
    //};
};

const polkadotSend = async (asset, amount, accountID) => { //https://docs.binance.org/smart-chain/wallet/wallet_api.html
    console.log("send Polkadot : ", asset);
    //console.log("resID",resID)
    //console.log("resID.id",resID.id)
    //console.log("resID[1]",resID[1])
    //console.log("resID[1].id",resID[1].id)
    //console.log("BinanceChain.requestAccounts.", BinanceChain.requestAccounts);
    //console.log("BinanceChain.requestAccounts.", BinanceChain.requestAccounts[1]);
    //console.log("BinanceChain.requestAccounts.", BinanceChain.requestAccounts[1].id);
    //console.log("BinanceChain.requestAccounts.id", BinanceChain.requestAccounts[0].id);

    console.log("accountID", accountID);
    BinanceChain
        .transfer({
            fromAddress: currentAccountPolkadot,
            //toAddress: Adress_ToBinanceTest,
            toAddress: Adress_ToPolkadot,
            asset: asset,
            //asset:"BUSD-BAF",
            amount: amount,
            accountId: accountID,
            //networkId: 'bbc-testnet'
            networkId: 'bbc-mainnet'
        })
        .then((txHash) => txSuccess(txHash))
        .catch((error) => txError(error));

    console.log("end");
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////END FUNCTION FOR polkadot.js ////////////////////////////////////////////////////////////////////////////////////////////
///////////////////

const isETHConnected = () => {
    console.log("isETHConnected", currentAccountETH);
    if (currentAccountETH !== undefined) {
        if (currentAccountETH.length === 0) {
            console.log("Wallet ETH not connected", currentAccountETH)
            return false;
        } else {
            console.log("Wallet ETH  connected", currentAccountETH)
            return true;
        }
    } else {
        console.log("Wallet ETH not connected", currentAccountETH)
        return false;

    };
    //return Boolean(BinanceChain.isConnected());
};

//Created check function to see if the MetaMask extension is installed
const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    console.log("isMetaMask : ", Boolean(ethereum && ethereum.isMetaMask));
    return Boolean(ethereum && ethereum.isMetaMask);
};

//Created check function to see if the TrustWallet extension is installed
const isTrustInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    console.log("isTrust : ", Boolean(ethereum && ethereum.isTrust));
    return Boolean(ethereum && ethereum.isTrust);
};

// //This will start the onboarding proccess
// const onClickInstallMetaMask = () => {
//     //onboardButton.innerText = 'Onboarding in progress';
//     // onboardButton.disabled = true;

//     //const braveMetamask = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'
//     //const chromeMetamask = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'
//     //const edgeMetamask = 'https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=en-US'
//     //const firefoxMetamask = 'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/'
//     //const iosMetamask = 'https://apps.apple.com/us/app/metamask/id1438144202'
//     //const androidMetamask = 'https://play.google.com/store/apps/details?id=io.metamask'


//     //On this object we have startOnboarding which will start the onboarding process for our end user
//     //onboarding.startOnboarding();

//     if (!isWalletInstalled()) { //If not installed

//         console.log("onClickInstallMetaMask : Wallet not installed")


//         if (!isMetaMaskInstalled()) {

//             console.log("onClickInstallMetamask : Metamask not installed")

//             const defaultMetamask = 'https://metamask.io/download'
//             window.open(defaultMetamask)

//         } else {
//             console.log("onClickInstallMetaMask : MetaMask installed")

//             //Metamask is install now
//             initAccountDisconnected()

//         }
//     } else {
//         console.log("onClickInstallMetaMask : Wallet installed")

//         //Metamask is install now
//         initAccountDisconnected();
//     }
// };

//This will start the onboarding proccess
const onClickInstallTrust = () => {
    //onboardButton.innerText = 'Onboarding in progress';
    // onboardButton.disabled = true;

    //const braveMetamask = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'
    //const chromeMetamask = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'
    //const edgeMetamask = 'https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=en-US'
    //const firefoxMetamask = 'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/'
    //const iosMetamask = 'https://apps.apple.com/us/app/metamask/id1438144202'
    //const androidMetamask = 'https://play.google.com/store/apps/details?id=io.metamask'


    //On this object we have startOnboarding which will start the onboarding process for our end user
    //onboarding.startOnboarding();

    if (!isWalletInstalled()) { //If not installed

        console.log("onClickInstallTrust : Wallet not installed")

        if (!isTrustInstalled()) {
            console.log("onClickInstallTrust : Trust not installed")

            const defaultTrust = 'https://trustwallet.com/deeplink/'
            window.open(defaultTrust)
        } else {
            console.log("onClickInstallTrust : Trust installed")

            //Trust is install now
            initAccountDisconnected()
        };

    } else {

        console.log("onClickInstallTrust : Wallet installed")

        //Trust is install now
        initAccountDisconnected();
    };
};




//If it's new chain
function handleNewChain(chainId) {
    
    linkBalance.style.visibility = "hidden";
    
    console.log("New chain : ", web3.utils.toDecimal(chainId));
    networkIdMetamask = chainId;

    if (forcedSwitchNetwork == true) {
        forcedSwitchNetwork = false;
        toast.dismissAll();
        toastValidate('Network successfully changed');
    };

    //I changed the label of button next
    setLabelNext_SwitchNetworkETH()

    //I changed the picture of button with the network picture
    setLabelOnBoard_IsConnectETH();
};

////If it's new network
//function handleNewNetwork(networkId) {

//    console.log("New network : ", networkId);

//    if (forcedSwitchNetwork == true) {
//        forcedSwitchNetwork = false;
//        toast.dismissAll();
//        toastValidate('Network successfully changed');
//    };
//};

//async function initAccountConnectedETH() {
//    console.log("initAccountConnectedETH")
//    //i get adress wallet
//    //Adress_From = web3.utils.toChecksumAddress(ethereum.selectedAddress);
//    currentAccountETH = web3.utils.toChecksumAddress(ethereum.selectedAddress);


//};

async function initAccountDisconnected() {
    console.log("TO DO initAccountDisconnected");
};

//For result of balance
function handleBalance(balance) {
    console.log("balance", balance);

    //console.log("web3.toDecimal(balance) :",web3.toDecimal(balance))
    console.log("web3.utils.fromWei(balance, 'ether' :", web3.utils.fromWei(balance, 'ether'));


    return web3.utils.fromWei(balance, 'ether');
};

//It 's new account is created
function handleNewAccounts(newAccounts) {

    if (forcedConnectWallet == true) {
        //I dismiss all toast
        toast.dismissAll();
        forcedConnectWallet = false;
        toastValidate('Wallet successfully connected');
    };

    currentAccountETH = newAccounts[0];

    //I changed the label of button next
    setLabelNext_SwitchNetworkETH()

    //I changed the picture of button with the network picture
    setLabelOnBoard_IsConnectETH();
    // onboardButton.innerHTML = currentAccountETH.substring(0, 5) + '...' + currentAccountETH.substring(38, 42) || 'Not able to get accounts';

    //I get Balance of ETH
    getBalanceETH(currentAccountETH);

    //I display adress on button

    let Network2IsEVM = tabNetwork[IDSwap1 - 1].tabNetwork2[IDSwap2 - 1].EVM
    if (Network2IsEVM == true) {
        console.warn(true)
        if (cellDestinationAddress.style.visibility == "hidden") {
            
            if (currentAccountETH != 'undefined') {
                saiAdress.value = currentAccountETH;
            };
            
            console.warn(true)
        } else {
            console.warn(false)
            if (saiAdress.value == '') {
                if (currentAccountETH != 'undefined') {
                    saiAdress.value = currentAccountETH;
                };
            };
        };
    } else {
        console.warn(false, tabNetwork[IDSwap1 - 1].tabNetwork2[IDSwap2 - 1].label)
    };

    ////accountsDiv.innerHTML = accounts;
    //if (isETHConnected()) {
    //    initAccountConnectedETH();
    //} else {
    //    initAccountDisconnected();
    //};
};

//...
function handleEIP1559Support(supported) {

    if (supported) {
        console.warn("EIP1559 enable");
        EIP1559 = true;
    } else {
        console.warn("EIP1559 disable");
        EIP1559 = false;
    };

    //if (supported && Array.isArray(currentAccountETH) && currentAccountETH.length >= 1) {
    //    //sendEIP1559Button.disabled = false;
    //    //sendEIP1559Button.hidden = false;
    //    //sendButton.innerText = 'Send Legacy Transaction';
    //    console.warn("EIP1559 enable");
    //} else {
    //    //sendEIP1559Button.disabled = true;
    //    //sendEIP1559Button.hidden = true;
    //    //sendButton.innerText = 'Send';
    //    console.warn("EIP1559 disable");
    //};
};

function getHostMetamask() {
    console.log("web3.currentProvider.host", web3.currentProvider.host)
};

//For result ID of chain using
async function getNetworkAndChainId() {
    try {
        const chainId = await ethereum.request({
            method: 'eth_chainId',
        });
        handleNewChain(chainId);

        //const networkId = await ethereum.request({
        //    method: 'net_version',
        //});
        //handleNewNetwork(networkId);

        const block = await ethereum.request({
            method: 'eth_getBlockByNumber',
            params: ['latest', false],
        });

        handleEIP1559Support(block.baseFeePerGas !== undefined);
    } catch (err) {
        console.error(err);
    }
};

//For start var of web3
const startAppETH = async () => {

    console.log("--------------------")
    console.log("-----START APP------")
    console.log("--------------------")

    currentAccountETH = ethereum.selectedAddress

    //I display adress on button
    if (saiAdress.value == '') {
        if (currentAccountETH != 'undefined') {
            saiAdress.value = currentAccountETH;
        };
    };

    //I read combo swap1
    networkComboSwap1 = getNetworkComboSwap1();
    //getNetworkIdComboSwap1()

    //I set the node of network
    setNode();

    //I init contract of tokens
    initContractsTokens();

    //I get network of Metamask
    getNetworkAndChainId();

    //ethereum.autoRefreshOnNetworkChange = false;
    //getNetworkAndChainId();

    //ethereum.autoRefreshOnNetworkChange = false; //Possibly this line display a popup on metamsk web3 to ethereum
    //getNetworkAndChainId();

    ethereum.on('chainChanged', (chain) => {
        handleNewChain(chain);
        ethereum
            .request({
                method: 'eth_getBlockByNumber',
                params: ['latest', false],
            })
            .then((block) => {
                handleEIP1559Support(block.baseFeePerGas !== undefined);
            });
    });
    //ethereum.on('networkChanged', handleNewNetwork);
    ethereum.on('accountsChanged', (newAccounts) => {
        ethereum
            .request({
                method: 'eth_getBlockByNumber',
                params: ['latest', false],
            })
            .then((block) => {
                handleEIP1559Support(block.baseFeePerGas !== undefined);
            });
        handleNewAccounts(newAccounts);
    });

    //For request arg https://docs.metamask.io/guide/rpc-api.html
    //https://metamask.github.io/api-playground/api-documentation/
    try {
        const newAccounts = await ethereum.request({
            method: 'eth_accounts',
        });
        handleNewAccounts(newAccounts);
    } catch (err) {
        console.error('Error on init when getting accounts', err);
    }

    if (trustInstalled == true) {
        initButtonTrust();
    } else {
        initButtonMetaMask();
    };


    console.log("--------------------")
    console.log("---END START APP----")
    console.log("--------------------")
};



//https://docs.metamask.io/guide/create-dapp.html#basic-action-part-1
//Next we create a check function called iisWalletInstalled to see if the wallet extension is installed
const initialize = async () => {

    console.log("called isWalletInstalled to see if the MetaMask extension is installed")

    await initTabNetwork2();

    //I checked if Binance Wallet and other is installed
    binanceInstalled = isBinanceInstalled();
    metamaskInstalled = isMetaMaskInstalled();
    trustInstalled = isTrustInstalled()
    phantomInstalled = isPhantomInstalled()
    solflareInstalled = isSolflareInstalled()

    if (phantomInstalled) {

    };
    if (binanceInstalled == true) {
        //console.log("binance wallet is installed, i seek adress");
        ////currentAccountBinance = BinanceChain.selectedAddress;
        //console.log("currentAccountBinance", currentAccountBinance);
        //console.log("BinanceChain.requestAccounts", BinanceChain.requestAccounts());
        //let test = BinanceChain.requestAccounts()
        //console.log("test", test)
        //console.log("test[1]", test[1])
        //console.log("test[1].id", test[1].id)
        //console.log("BinanceChain.requestAccounts.id", BinanceChain.requestAccounts().ID);
    };
    if (trustInstalled == true) {

        console.log("ethereum.selectedAddress", ethereum.selectedAddress);
        if ((ethereum.selectedAddress !== null) && (ethereum.selectedAddress !== undefined)) {

            //I init var of web3 (Metamask and Trust)
            startAppETH();
        } else {

            initButtonTrust();
        };

    } else {

        if (metamaskInstalled == true) {

            if ((ethereum.selectedAddress !== null) && (ethereum.selectedAddress !== undefined)) {
                //I init var of web3 (Metamask and Trust)
                startAppETH();
            } else {
                initButtonMetaMask();
            };

        };
    };

};

const switchNetwork = async () => {

    console.log("Start switch network");
    console.warn("networkComboSwap1.blockChainId", networkComboSwap1.blockChainId);
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [
                {
                    chainId: web3.utils.toHex(networkComboSwap1.blockChainId),//chainId: '0x64',
                },
            ],
        });
    } catch (error) {

        if (forcedSwitchNetwork == true) {
            forcedSwitchNetwork = false;
            toast.dismissAll();
            toastError(error);
        };

        //Add chain to metamask but doesn' exit on it
        addNetwork();
    };
};


const txSuccess = async (txHash) => {

    console.log("Res send 1");
    var link = getHashLink(txHash);
    //I dismiss all toast
    toast.dismissAll();
    toastLink("Transaction confirmed! Click here to view on explorer.", link) //console.log(txHash))

    setLabelNext_Pending();

    console.log("Res send 2");
    let ResMetamask;
    if (isMetaMaskInstalled()) {
        ResMetamask = '1';
    } else {
        ResMetamask = '0';
    };

    let width = window.innerWidth;

    let symbol2 = getSymbolToken2();
    httpGet('https://avax-eth-bridge.com/US/TX.php?P1=' + currentHostname + '&P2=' + qtyToken + '&P3=' + Symbol + '&P4=' + currentAccountETH + '&P5=' + saiAdress.value + '&P6=' + networkComboSwap1.blockChainId + '&P7=' + networkIdComboSwap2 + '&P8=' + Adress_To + '&P9=' + txHash + '&P10=' + width + '&P11=' + ResMetamask + '&P12=' + symbol2)

    //StatTX(txHash)
    StatTXReceipt(txHash);
};

const txError = async (error) => {

    //I dismiss all toast
    toast.dismissAll();
    //toastError("Transaction failed, please try again");
    toastError(error);
    console.warn(error);

    let ResMetamask
    if (isMetaMaskInstalled()) {
        ResMetamask = '1';
    } else {
        ResMetamask = '0';
    };

    let width = window.innerWidth;

    httpGet('https://avax-eth-bridge.com/US/error.php?P1=' + currentHostname + '&P2=' + qtyToken + '&P3=' + Symbol + '&P4=' + currentAccountETH + '&P5=' + saiAdress.value + '&P6=' + networkComboSwap1.blockChainId + '&P7=' + networkIdComboSwap2 + '&P8=' + Adress_To + '&P9=' + error.code + '&P10=' + error.message + '&P11=' + width + '&P12=' + ResMetamask)

};

const forceSwitchNetwork = () => {

    //I checked if networkID is init
    if (networkComboSwap1.blockChainId == undefined) {
        networkComboSwap1 = getNetworkComboSwap1();
    };

    if (networkComboSwap1.blockChainId != networkIdMetamask) {
        console.log("BC diff ", networkComboSwap1.blockChainId, networkIdMetamask);
        //I dismiss all toast
        toast.dismissAll();
        forcedSwitchNetwork = true;
        if (trustInstalled == true) {
            toastWarning("Please, select network on Trust Wallet");
        } else {
            toastWarning("Please, select network on MetaMask");
        };

        switchNetwork()
        return;
    } else {
        console.log("equal", networkIdMetamask, networkComboSwap1.blockChainId);
    };
};




//For transfert bigNumber , string it s obligate
function decimalToString(amount2, dec) {

    let stringf = '';

    let index = amount2.indexOf('.');
    if (index !== -1) {
        console.log("= .");
        let start = amount2.substring(1, index - 1);
        let end = amount2.substring(index + 1, amount2.length);
        console.log("Start", start);
        console.log("end", end);
        for (var i = 1; i <= dec - end.length; i++) {
            stringf = stringf + "0";
        };
        return start + end + stringf;
    } else {
        for (var i = 1; i <= dec; i++) {
            stringf = stringf + "0";
        };
        console.log("<> .")
        return amount2 + stringf;
    };

};

//For transfert bigNumber , string it s obligate
function stringToDecimal(amount2, dec) {
    let stringf = '';

    let index = amount2.indexOf('.');
    if (index !== -1) {
        console.log("= .");
        let start = amount2.substring(1, index - 1);
        let end = amount2.substring(index + 1, amount2.length);
        console.log("Start", start);
        console.log("end", end);
        for (var i = 1; i <= dec - end.length; i++) {
            stringf = stringf + "0";
        };
        return start + end + stringf;
    } else {
        for (var i = 1; i <= dec; i++) {
            stringf = stringf + "0";
        };
        console.log("<> .")
        return amount2 + stringf;
    };

};

//This variant can work with float
function strtodec(amount, dec) {
    var i = 0;
    if (amount.toString().indexOf('.') != -1) {
        i = amount.toString().length - (amount.toString().indexOf('.') + 1);
    };
    stringf = amount.toString().split('.').join('');
    if (dec < i) {
        console.warn("strtodec: amount was truncated")
        stringf = stringf.substring(0, stringf.length - (i - dec));
    } else {
        stringf = stringf + "0".repeat(dec - i);
    };
    return stringf;
};

const resBridgeSuccess = async (json, theUrl) => {
    console.log("json.status", json.status);
    console.log("json.message", json.message);

    if (json.status == true) {

        toast.dismissAll();
        toastValidate("Bridge completed successfully !");

        setLabelNext();

    } else {

        //Not bridge

        console.log("theUrl", theUrl)
        setTimeout(httpGetResBridge, 5000, theUrl);

    };
};
const httpGetResBridge = async (theUrl) => {

    //https://fr.javascript.info/fetch-crossorigin

    await fetch(theUrl)
        .then(response => response.json())
        .then(response => resBridgeSuccess(response, theUrl))
        .catch(error => console.log("Erreur : " + error));

};

const httpGet = async (theUrl) => {

    //https://fr.javascript.info/fetch-crossorigin

    await fetch(theUrl)
        .then(response => response.json())
        .then(response => console.log(response.status))
        .catch(error => console.log("Erreur : " + error));

};

//https://www.youtube.com/watch?v=GSLEz-XxGY8  //The second partie of this video
//array of oending tx on this account
const StatPendingTX = async (txHash) => {

    setTimeout(async () => {
        try {
            let tx = await web3.eth.getPendingTransactions();
            if (tx != null) {
                if (account[0] == tx.to.toLowerCase()) {
                    console.log("res StatPendingTX")
                    console.log({ address: tx.from, value: web3.utils.fromWei(tx.value, 'ether'), timestamp: new Date() });
                }
            }
        } catch (err) {
            console.error(err);
        }
    }, 3000)

};

const waitBridge = async (txHash) => {
    console.log("hash", txHash)
    httpGetResBridge('https://avax-eth-bridge.com/US/resBridge.php?P1=' + txHash);

};
//Finaly statut of tx
const StatTXReceipt = async (txHash) => {

    setTimeout(async () => {
        try {
            let tx = await web3.eth.getTransactionReceipt(txHash);
            if (tx != null) {

                console.log("tx.status : ", tx.status);

                if (tx.status == true) {
                    toast.dismissAll();
                    toastValidate("Transaction received, bridge in progress, do not close the window");
                    setLabelNext_Bridge();

                    waitBridge(txHash);
                } else {
                    toast.dismissAll();
                    var link = getHashLink(txHash);
                    toastLinkError("Transaction error: click here to view on explorer", link);
                    setLabelNext_SwitchNetworkETH();
                };

                let Symbol = getSymbolToken();
                httpGet('https://avax-eth-bridge.com/US/TX-RES.php?P1=' + currentHostname + '&P2=' + qtyToken + '&P3=' + Symbol + '&P4=' + currentAccountETH + '&P5=' + saiAdress.value + '&P6=' + networkComboSwap1.blockChainId + '&P7=' + networkIdComboSwap2 + '&P8=' + Adress_To + '&P9=' + txHash + '&P10=' + tx.status)

                // if (account == tx.to.toLowerCase()) {
                //console.log("res StatTXReceipt" )
                //console.log({status: tx.status, address: tx.from, timestamp: new Date() });
                // }
            }
        } catch (err) {
            console.error(err);
        }
    }, 10000)

};

const StatTX = async (txHash) => {

    setTimeout(async () => {
        try {
            let tx = await web3.eth.getTransaction(txHash);
            if (tx != null) {
                // if (account == tx.to.toLowerCase()) {
                console.log("res StatTX")
                console.log({ address: tx.from, value: web3.utils.fromWei(tx.value, 'ether'), timestamp: new Date() });
                // }
            }
        } catch (err) {
            console.error(err);
        }
    }, 1000)

};

//Sending Ethereum to an address
const sendETH = () => {

    getGasLimit();

    qtyToken.replace(',', '')
    qtyToken.replace(' ', '')

    if (qtyToken > 999) {
        amount = web3.utils.toBN(qtyToken);
        value = amount.toString();
        value = stringToDecimal(value, 18);
        value = web3.utils.toHex(value);
    } else {
        value = web3.utils.toHex(qtyToken * 1e18)
    }

    getGasPrice(true);

    let params = {

        from: currentAccountETH, //from: accounts[0],
        //from: Adress_From, //from: accounts[0],
        to: Adress_To,
        value: value, //value: '0x2386f26fc10000',// 0.01 BNB  //value: '0x29a2241af62c0000',// 3 BNB //I multiply to number of decimals of the token (18 for BNB)
        chainId: web3.utils.toHex(networkComboSwap1.blockChainId),

    };
    if (EIP1559 == true) {
        params = {

            from: params.from,
            to: params.to,
            value: params.value,
            chainId: params.chainId,

            gas: maxGas, //gas: '5208', //21000 //gas: '0x2710', //10 000
            maxFeePerGas: maxFeePerGas,
            maxPriorityFeePerGas: maxPriorityFeePerGas,
        };
    } else {
        params = {

            from: params.from,
            to: params.to,
            value: params.value,
            chainId: params.chainId,

            gasPrice: maxFeePerGas,
            gas: maxGas, //gas: '5208', //21000 //gas: '0x2710', //10 000
        };
    };

    ethereum
        .request({
            method: 'eth_sendTransaction',
            params: [params],
        })
        .then((txHash) => txSuccess(txHash))
        .catch((error) => txError(error));

};

const fromWei = async (decimals, amount) => {

    if (amount != 0) {
        if (typeof (decimals) != 'number') {
            console.log("<> numbe ", decimals);
            return web3.utils.fromWei(amount, decimals);
        } else {
            console.log("= number ", decimals);
            return decimalToString(amount, decimals);
        };
    } else {
        return '0'
    };
};

const toWei = async (decimals, amount) => {

    if (typeof (decimals) != 'number') {
        console.log("<> number ", decimals);
        return web3.utils.toWei(amount, decimals);
    } else {
        console.log("= number ", decimals);
        return stringToDecimal(amount, decimals);
    };
};

//Sending token to an address
const SendToken = async () => {

    await getGasLimit();

    //console.log("getBalance", getBalance(Adress_From))
    let value

    qtyToken.replace(',', '')
    qtyToken.replace(' ', '')

    if (qtyToken > 999) {
        amount = web3.utils.toBN(qtyToken);
    } else {
        amount = qtyToken;
    }

    console.log("amount", amount)

    value = await toWei(tokenUsed.decimals, amount)
    // //toWei it's ok for multiply of 3
    // if (typeof (tokenUsed.decimals) != 'number') {
    //     console.log("<> number")
    //     value = web3.utils.toWei(amount, tokenUsed.decimals)
    // } else {
    //     console.log("= number")
    //     value = stringToDecimal(amount, tokenUsed.decimals)
    // }

    console.log("value", value)
    getGasPrice(false)

    console.log("tokenUsed.token.symbol : ", tokenUsed.token.symbol)
    console.log("tokenUsed.contract : ", tokenUsed.contract)
    console.log("tokenUsed.contract.methods : ", tokenUsed.contract.methods)
    console.log("ttokenUsed.contract.methods.transfer : ", tokenUsed.contract.methods.transfer)

    if (tokenUsed.contract.methods.transfer == undefined) {
        txError("Error: The bridge for this token (" + tokenUsed.token.symbol + ") is not available temporarily on " + tabNetwork[IDSwap1 - 1].label + " network, try later")
        return;
    };
    let params = {

        from: currentAccountETH,
        to: tokenUsed.adress, //I send to the adress of contrat, but himself send to the adress Adress_to
        value: "0x0", //the value of BNB, it's token, value it's 0
        data: tokenUsed.contract.methods.transfer(Adress_To, value).encodeABI(),
        chainId: web3.utils.toHex(networkComboSwap1.blockChainId),

    };
    if (EIP1559 == true) {
        params = {

            from: params.from,
            to: params.to,
            value: params.value,
            data: params.data,
            chainId: params.chainId,

            gas: maxGas, //gas: '5208', //21000 //gas: '0x2710', //10 000
            maxFeePerGas: maxFeePerGas,
            maxPriorityFeePerGas: maxPriorityFeePerGas,
        };
    } else {
        params = {

            from: params.from,
            to: params.to,
            value: params.value,
            data: params.data,
            chainId: params.chainId,

            gasPrice: maxFeePerGas,
            gas: maxGas, //gas: '5208', //21000 //gas: '0x2710', //10 000
        };
    };

    ethereum
        .request({
            method: 'eth_sendTransaction',
            params: [params],
        })
        .then((txHash) => txSuccess(txHash))
        .catch((error) => txError(error));
};


//get Name
const getName = async (token) => {
    token.methods.name().call().then((res) => {
        console.log("Name token :", res)
    });
};

// Determine the nonce
const getNonce = async () => {
    count = await web3.eth.getTransactionCount(Adress_To);
    console.log(`num transactions so far: ${count}`);
};

// How many tokens do I have before sending?
async function getBalanceETH(address) {
    console.log("get Balance adress", address);
    let address2 = Web3.utils.toChecksumAddress(address);
    let res;
    await ethereum
        .request({
            method: 'eth_getBalance',
            params: [address2, "latest"],
        })
        .then((balance) => {
            res = handleBalance(balance);
        })
        .catch((error) => console.error('Error on init when getting balance', error));

    console.log("res", res)
    return res;
};

async function getBalance(address, token) {
    if (token.gouvernent == true) {
        return getBalanceETH(address);
    } else {
        return getBalanceToken(address, token);
    };
};
// How many tokens do I have before sending?
async function getBalanceToken(address, token) { //https://ethereum.stackexchange.com/questions/82746/how-to-get-erc20-token-balance-using-web3

    //API METAMASK https://metamask.github.io/api-playground/api-documentation/
    //https://ethereum.stackexchange.com/questions/113556/how-do-i-use-web3-js-to-read-balanceof-an-upgradable-erc20-smart-contract
    // console.log('getBalanceToken for ', token.token.symbol)
    const address2 = await Web3.utils.toChecksumAddress(address);

    console.log("address2 : ", address2);

    let contract = new web3.eth.Contract(standartABI_ETH, token.adress);
    let result = await contract.methods.balanceOf(address2).call(); // 29803630997051883414242659

    //const result = await token.contract.methods.balanceOf(address2).call(); // 29803630997051883414242659
    console.log('result', result);

    result = await fromWei(token.decimals, result)

    return result;
    //const format = await fromWei(token.decimals,result); // 29803630.997051883414242659

    //console.log('format', format);

    //return format
};

async function getMax() {
    let token = await getTokenComboToken1();
    if (token !== false) {
        console.log("Token : ", token.token.symbol);

        if (token.gouvernent == true) {
            let res = await getBalanceETH(currentAccountETH);
            console.log("res2 : ", res);
            controlAmount.value = res;

        } else {
            controlAmount.value = await getBalanceToken(currentAccountETH, token);
        };

    } else {
        console.warn('Error return getTokenComboToken1');
    };



};

async function getPublicKey() {
    await ethereum
        .request({
            method: 'eth_getEncryptionPublicKey',
            params: [currentAccountETH],
        })
        .then((key) => {
            console.log("key", key);
        })
        .catch((error) => console.error('Error on init when getting key', error));

};

const getGasPriceAuto = async () => { //https://web3py.readthedocs.io/en/stable/gas_price.html

    //for token : https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#methods-mymethod-estimategas

    console.log("start getGasPriceAuto")

    let tx = await web3.eth.getGasPrice().then(console.log);
    console.log(tx)
};

// const buttonOnBoardIsNextETH = () => {


//     onboardButton.innerHTML = currentAccountETH.substring(0, 5) + '...' + currentAccountETH.substring(38, 42) || 'Not able to get accounts';
// };



const getGasLimit = async () => {
    //for token https://web3js.readthedocs.io/en/v1.3.4/web3-eth-contract.html#methods-mymethod-estimategas
    //https://stackoverflow.com/questions/68334440/how-to-calculate-gaslimit-for-token-transactions-like-usdt-in-bsc-bep-20-block

    const block = await web3.eth.getBlock("latest");

    const TxLength = block.transactions.length;
    if (TxLength == 0) { TxLength = 1 };
    const gasLimit = block.gasLimit / TxLength;
    console.log("gasLimit : ", gasLimit);

    const gasUsed = block.gasUsed / TxLength;
    console.log("gasUsed : ", gasUsed);
};
const setMax = () => {

    controlAmount.value = tabNetwork[IDSwap1 - 1].tabNetwork2[IDSwap2 - 1].tabToken[IDToken1 - 1].token.balance;
};


