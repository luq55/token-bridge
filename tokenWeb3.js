

//********************************************************************************************************************************************************************************
//**************************************************************************START INIT TOKENS ************************************************************************************
//********************************************************************************************************************************************************************************

const tabToken = {
    tokenUSDC: {
        label: 'USD Coin (USDC)',
        symbol: 'USDC',
        name: 'USD Coin',
        logo: 'logo_USDC_30x30.png',
        logoDark: 'logo_USDC_30x30.png',
        fee: '2',
        stable: true,
        balance: ''
    },
    tokenUSDT: {
        label: 'Tether (USDT)',
        symbol: 'USDT',
        name: 'Tether',
        logo: 'logo_USDT_30x30.png',
        logoDark: 'logo_USDT_30x30.png',
        fee: '2',
        stable: true,
        balance: ''
    },
    tokenBUSD: {
        label: 'Binance USD (BUSD)',
        symbol: 'BUSD',
        name: 'Binance USD',
        logo: 'logo_BUSD_30x30.png',
        logoDark: 'logo_BUSD_30x30.png',
        fee: '2',
        stable: true,
        balance: ''
    },
    tokenBNB: {
        label: 'Binance Coin (BNB)',
        symbol: 'BNB',
        name: 'Binance Coin',
        logo: 'logo_BNB_30x30.png',
        logoDark: 'logo_BNB_30x30.png',
        fee: '0.003',
        stable: false,
        balance: ''
    },
    tokenETH: {
        label: 'Ethereum (ETH)',
        symbol: 'ETH',
        name: 'Ethereum',
        logo: 'logo_ETH_30x30.png',
        logoDark: 'logo_ETH_30x30.png',
        fee: '0.0004',
        stable: false,
        balance: ''
    },
    tokenBTC: {
        label: 'Bitcoin (BTC)',
        symbol: 'BTC',
        name: 'Bitcoin',
        logo: 'logo_BTC_30x30.png',
        logoDark: 'logo_BTC_30x30.png',
        fee: '0.00004',
        stable: false,
        balance: ''
    },
    tokenMATIC: {
        label: 'Polygon (MATIC)',
        symbol: 'MATIC',
        name: 'Polygon',
        logo: 'logo_MATIC_30x30.png',
        logoDark: 'logo_MATIC_30x30.png',
        fee: '1',
        stable: false,
        balance: ''
    },
    tokenFTM: {
        label: 'Fantom (FTM)',
        symbol: 'FTM',
        name: 'Fantom',
        logo: 'logo_FTM_30x30.png',
        logoDark: 'logo_FTM_30x30.png',
        fee: '0.8',
        stable: false,
        balance: ''
    },
    tokenAVAX: {
        label: 'Avalanche (AVAX)',
        symbol: 'AVAX',
        name: 'Avalanche',
        logo: 'logo_AVAX_30x30.png',
        logoDark: 'logo_AVAX_30x30.png',
        fee: '0.02',
        stable: false,
        balance: ''
    },
    tokenCRO: {
        label: 'Crypto.com Coin (CRO)',
        symbol: 'CRO',
        name: 'Crypto.com Coin',
        logo: 'logo_CRO_30x30.png',
        logoDark: 'logo_CRO_30x30.png',
        fee: '5',
        stable: false,
        balance: ''
    },
    tokenSOL: {
        label: 'Solana (SOL)',
        symbol: 'SOL',
        name: 'Solana',
        logo: 'logo_SOL_30x30.png',
        logoDark: 'logo_SOL_30x30.png',
        fee: '0.008',
        stable: false,
        balance: ''
    },
    tokenAAVE: {
        label: 'Aave (AAVE)',
        symbol: 'AAVE',
        name: 'Aave',
        logo: 'logo_AAVE_30x30.png',
        logoDark: 'logo_AAVE_30x30.png',
        fee: '0.006',
        stable: false,
        balance: ''
    },
    tokenAUTO: {
        label: 'Auto (AUTO)',
        symbol: 'AUTO',
        name: 'Auto',
        logo: 'logo_AUTO_30x30.png',
        logoDark: 'logo_AUTO_30x30.png',
        fee: '0.0017',
        stable: false,
        balance: ''
    },
    tokenBIFI: {
        label: 'Beefy.Finance (BIFI)',
        symbol: 'BIFI',
        name: 'Beefy.Finance',
        logo: 'logo_BIFI_30x30.png',
        logoDark: 'logo_BIFI_30x30.png',
        fee: '0.0015',
        stable: false,
        balance: ''
    },
    tokenCAKE: {
        label: 'PancakeSwap (CAKE)',
        symbol: 'CAKE',
        name: 'PancakeSwap',
        logo: 'logo_CAKE_30x30.png',
        logoDark: 'logo_CAKE_30x30.png',
        fee: '0.1"',
        stable: false,
        balance: ''
    },
    tokenONE: {
        label: 'Harmony (ONE)',
        symbol: 'ONE',
        name: 'Harmony',
        logo: 'logo_ONE_30x30.png',
        logoDark: 'logo_ONE_30x30.png',
        fee: '10',
        stable: false,
        balance: ''
    },
    tokenUNI: {
        label: 'Uniswap (UNI)',
        symbol: 'UNI',
        name: 'Uniswap',
        logo: 'logo_UNI_30x30.png',
        logoDark: 'logo_UNI_30x30.png',
        fee: '0.13',
        stable: false,
        balance: ''
    },
    tokenDAI: {
        label: 'Dai (DAI)',
        symbol: 'DAI',
        name: 'Dai',
        logo: 'logo_DAI_30x30.png',
        logoDark: 'logo_DAI_30x30.png',
        fee: '2',
        stable: true,
        balance: ''
    },
    tokenUST: {
        label: 'TerraUSD (UST)',
        symbol: 'UST',
        name: 'TerraUSD',
        logo: 'logo_UST_30x30.png',
        logoDark: 'logo_UST_30x30.png',
        fee: '2',
        stable: true,
        balance: ''
    },
    tokenVLX: {
        label: 'Velas (VLX)',
        symbol: 'VLX',
        name: 'Velas',
        logo: 'logo_VLX_30x30.png',//logo_VLX.png
        logoDark: 'logo_VLX_WHITE_30x30.png',//logo_VLX.png
        fee: '6',
        stable: false,
        balance: ''
    },
    tokenFTT: {
        label: 'FTX Token (FTT)',
        symbol: 'FTT',
        name: 'FTX Token',
        logo: 'logo_FTT_30x30.png',
        logoDark: 'logo_FTT_30x30.png',
        fee: '0.055',
        stable: false,
        balance: ''
    },
    tokenTUSD: {
        label: 'TrueUSD (TUSD)',
        symbol: 'TUSD',
        name: 'TrueUSD',
        logo: 'logo_TUSD_30x30.png',
        logoDark: 'logo_TUSD_30x30.png',
        fee: '2',
        stable: true,
        balance: ''
    },
    tokenMOVR: {
        label: 'Moonriver (MOVR)',
        symbol: 'MOVR',
        name: 'Moonriver',
        logo: 'logo_MOVR_30x30.png',
        logoDark: 'logo_MOVR_30x30.png',
        fee: '0.012',
        stable: false,
        balance: ''
    },
    tokenTOMO: {
        label: 'TomoChain (TOMO)',
        symbol: 'TOMO',
        name: 'TomoChain',
        logo: 'logo_TOMO_30x30.png',
        logoDark: 'logo_TOMO_30x30.png',
        fee: '1.25',
        stable: false,
        balance: ''
    },
    tokenBOBA: {
        label: 'Boba Network (BOBA)',
        symbol: 'BOBA',
        name: 'Boba Network',
        logo: 'logo_BOBA_30x30.png',
        logoDark: 'logo_BOBA_30x30.png',
        fee: '0.8',
        stable: false,
        balance: ''
    },
    tokenOKT: {
        label: 'OEC Token (OKT)',
        symbol: 'OKT',
        name: 'OEC Token',
        logo: 'logo_OKT_30x30.png',
        logoDark: 'logo_OKT_30x30.png',
        fee: '0.04',
        stable: false,
        balance: ''
    },
    tokenKCS: {
        label: 'KuCoin Token (KCS)',
        symbol: 'KCS',
        name: 'KuCoin Token',
        logo: 'logo_KCS_30x30.png',
        logoDark: 'logo_KCS_30x30.png',
        fee: '0.1',
        stable: false,
        balance: ''
    },
    tokenSTAKE: {
        label: 'STAKE (STAKE)',
        symbol: 'STAKE',
        name: 'STAKE',
        logo: 'logo_STAKE_30x30.png',
        logoDark: 'logo_STAKE_30x30.png',
        fee: '0.14',
        stable: false,
        balance: ''
    }
    // tokenXDAI: {
    //     label: 'xDai (XDAI)',
    //     symbol: 'XDAI',
    //     name: 'xDai',
    //     logo: 'logo_XDAI.png',
    //     fee: '2',
    //     stable: true
    // }
};

const tabToken2 = [
    tabToken.tokenUSDC,
    tabToken.tokenUSDT,
]

//********************************************************************************************************************************************************************************
//**************************************************************************END INIT TOKENS **************************************************************************************
//********************************************************************************************************************************************************************************




//********************************************************************************************************************************************************************************
//**************************************************************************START FUNCTION TOKENS ********************************************************************************
//********************************************************************************************************************************************************************************

const seekToken = (tabTokenTemp,label) => {
    
    for (let i = 0; i <= tabTokenTemp.length - 1; i++) {
        
        let img;
        if (darkMode == true) {
            img = tabTokenTemp[i].token.logoDark;
        }else{
            img = tabTokenTemp[i].token.logo;
        };
        console.log('<img src="IMG_Token/'+ img+ '"> &nbsp; '+ tabTokenTemp[i].token.symbol);
        if (label == '<img src="IMG_Token/'+ img+ '"> &nbsp; '+ tabTokenTemp[i].token.symbol) {
            return tabTokenTemp[i];
        };
    };
    return false;
};
const getToken = (label) => {

    if (label == '') {
        console.warn (IDSwap1 + ' ' + IDSwap2 + '  ' + IDToken1 )
        console.warn (tabNetwork[IDSwap1 - 1].tabNetwork2[IDSwap2 - 1].label)
        console.warn (tabNetwork[IDSwap1 - 1].tabNetwork2[IDSwap2 - 1].tabToken[IDToken1 - 1].token.label)
        return tabNetwork[IDSwap1 - 1].tabNetwork2[IDSwap2 - 1].tabToken[IDToken1 - 1].token;
    } else {

       const token = seekToken(tabNetwork[IDSwap1 - 1].tabToken,label)
      
       return token;
    };

    //    switch (label) {
    //         case '<img src="'+ tabToken.tokenUSDC.logoDark+ '" /> &nbsp; '+ tabToken.tokenUSDC.symbol:
    //             return tabToken.tokenUSDC;
    //         case tabToken.tokenUSDT.label:
    //             return tabToken.tokenUSDT;
    //         case tabToken.tokenBUSD.label:
    //             return tabToken.tokenBUSD;
    //         case tabToken.tokenBNB.label:
    //             return tabToken.tokenBNB;
    //         case tabToken.tokenETH.label:
    //             return tabToken.tokenETH;
    //         case tabToken.tokenBTC.label:
    //             return tabToken.tokenBTC;
    //         case tabToken.tokenMATIC.label:
    //             return tabToken.tokenMATIC;
    //         case tabToken.tokenFTM.label:
    //             return tabToken.tokenFTM;
    //         case tabToken.tokenAVAX.label:
    //             return tabToken.tokenAVAX;
    //         case tabToken.tokenCRO.label:
    //             return tabToken.tokenCRO;
    //         case tabToken.tokenSOL.label:
    //             return tabToken.tokenSOL;
    //         case tabToken.tokenAAVE.label:
    //             return tabToken.tokenAAVE;
    //         case tabToken.tokenAUTO.label:
    //             return tabToken.tokenAUTO;
    //         case tabToken.tokenBIFI.label:
    //             return tabToken.tokenBIFI;
    //         case tabToken.tokenCAKE.label:
    //             return tabToken.tokenCAKE;
    //         case tabToken.tokenONE.label:
    //             return tabToken.tokenONE;
    //         case tabToken.tokenUNI.label:
    //             return tabToken.tokenUNI;
    //         case tabToken.tokenDAI.label:
    //             return tabToken.tokenDAI;
    //         case tabToken.tokenUST.label:
    //             return tabToken.tokenUST;
    //         case tabToken.tokenVLX.label:
    //             return tabToken.tokenVLX;
    //         case tabToken.tokenFTT.label:
    //             return tabToken.tokenFTT;
    //         case tabToken.tokenTUSD.label:
    //             return tabToken.tokenTUSD;
    //         case tabToken.tokenMOVR.label:
    //             return tabToken.tokenMOVR;
    //         case tabToken.tokenTOMO.label:
    //             return tabToken.tokenTOMO;
    //         case tabToken.tokenBOBA.label:
    //             return tabToken.tokenBOBA;
    //         case tabToken.tokenOKT.label:
    //             return tabToken.tokenOKT;
    //         case tabToken.tokenKCS.label:
    //             return tabToken.tokenKCS;
    //         case tabToken.tokenSTAKE.label:
    //             return tabToken.tokenSTAKE;
    //     }


    //     for (let i = 0; i <= tabToken.length - 1; i++) {
    //         console.log('tabToken[i].label :', tabToken[i].label);
    //         if (label == tabToken[i].label) {
    //             return tabToken[i];
    //         };
    //     };
    //     console.error("out of getToken", (label));
    //     return false;

};

//If i write : const getSymbolToken = () => { //Return string of function ex: = () => {witch (comboToken[comboToken.value - 1].label) { case tokenUSDC.label:.......}
function getSymbolToken2() {
    console.log("start comboSymbol2");
    const token = getToken(btnChooseToken2.innerHTML);
    if (token !== false) {
         return token.token.symbol;
    } else {
        console.error("Error getToken");
        return false;
    };

};


//If i write : const getSymbolToken = () => { //Return string of function ex: = () => {witch (comboToken[comboToken.value - 1].label) { case tokenUSDC.label:.......}
function getSymbolToken() {
    console.log("start comboSymbol");

    const token = getToken('');
    if (token !== false) {
        return token.symbol;
    } else {
        console.error("Error getToken");
        return false;
    };

};

var tokenUsed;
function ChoiceSend() {

    console.log("node1", node1);
    qtyToken = controlAmount.value;

    var token = getTokenOfNetwork(btnChooseToken1.innerHTML);

    if (token !== false) {
        if (token.gouvernent == true) {
            sendETH();
        } else {
            tokenUsed = token
            SendToken();
        }
    } else {
        console.error("Error getTokenOfNetwork",btnChooseToken1.innerHTML);
        return false;
    };

};



const initContractsTokens = async () => {

    for (let i = 0; i <= tabNetwork.length - 1; i++) {


        for (let g = 0; g <= tabNetwork[i].tabToken.length - 1; g++) {
            //console.log('Network' ,tabNetwork[i].networkName)
            //console.log('Token',g)
            //console.log("(tabNetwork[i].tabToken[g].adress", tabNetwork[i].tabToken[g].adress)
            //console.log("(tabNetwork[i].tabToken[g].ABI", tabNetwork[i].tabToken[g].ABI)
            //console.log("(tabNetwork[i].EVM", tabNetwork[i].EVM)

                     

            if ((tabNetwork[i].tabToken[g].adress !== '') && (tabNetwork[i].tabToken[g].ABI !== '') && (tabNetwork[i].EVM == true)) {
                console.log("init contract for",tabNetwork[i].tabToken[g].token.symbol + " on " + tabNetwork[i].label)
                tabNetwork[i].tabToken[g].contract = new web3.eth.Contract(tabNetwork[i].tabToken[g].ABI, tabNetwork[i].tabToken[g].adress);
                
                // let balance = await getBalance(currentAccountETH,tabNetwork[i].tabToken[g]);
                // tabNetwork[i].tabToken[g].token.balance = balance;
            };
        };
    };
};

//********************************************************************************************************************************************************************************
//************************************************************************** END FUNCTION TOKENS *********************************************************************************
//********************************************************************************************************************************************************************************
