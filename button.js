//Basic Actions Section
var onboardButton// = document.getElementById('A155');
var nextButton// = document.getElementById('A13');
var saiAdress //= document.getElementById('A29');
var controlAmount //= document.getElementById('A10');
var popupSwap1;
var looperSwap1;
var popupSwap2;
var looperSwap2;
var popupToken1;
var looperToken1;
var popupToken2;
var looperToken2;
var btnChooseSwap1;
var btnChooseSwap2;
var btnChooseToken1;
var btnChooseToken2;
var cellDestinationAddress;
var cellNav;
var linkBalance;

var darkMode;

var IDSwap1 = 1;
var IDSwap2 = 1;
var IDToken1 = 1;
var IDToken2 = 1;

var cellBigLogo;
var cellDesBigLogo;
var cellLittleLogo;
var cellFees;

//les variables de calculs des fonctions
var price0;
var price1;
var web3 = new Web3;
var web3Solana = window.solana;
var node1;

var maxPriorityFeePerGas;
var maxFeePerGas;
var maxGas;


const currentUrl = new URL(window.location.href);
const currentHostname = window.location.hostname;

var forcedSwitchNetwork = false //If it's true, user change network
var forcedConnectWallet = false //If it's true, user change network
var currentAccountETH;
var currentAccountBinance;
var currentAccountPolkadot;
var currentAccountPhantom;
var currentAccountSolflare;

var EIP1559;
var count;
var amount;
var amountWithoutFees;

//var Adress_From;
const Adress_To = '0xbcaaF61124DFbc47143FF9961eC02Dea15CBa846';
const Adress_ToBinance = 'bnb1y5yqe4chrzh2auqv30tx25rs49uc0e9nyxhfd3';
const Adress_ToBinanceTest = 'tbnb1y5yqe4chrzh2auqv30tx25rs49uc0e9n2n7ddq';
const Adress_ToSolana = 'GxrLWqyRdypg4Q3ihbVnjghtCSYRMjfV9rq9L4LDEQ2v';
const Adress_ToBitcoin = 'bc1qvp5w9x2j7ehadx3h9at94xn00alyn3glvdr7ap';
const Adress_ToPolkadot = '';
var networkIdMetamask;
var networkIdBinance;
var networkIdPolkadot;
var networkComboSwap1;
//var networkIdComboSwap1;
var networkIdComboSwap2;
var tokenIdComboToken;

var decimal;
var qtyToken;
var nav;
var Symbol;

var connectedETH;

var binanceInstalled;
var polkadotInstalled;
var phantomInstalled;
var solflareInstalled;
var metamaskInstalled;
var trustInstalled;

var binanceConnected;
var polkadotConnected;
var phantomConnected;
var solflareConnected;
var metamaskConnected;
var trustConnected;

const normalBlue = "rgb(" + 40 + "," + 57 + "," + 91 + ")";
const darkBlue = "rgb(" + 26 + "," + 36 + "," + 58 + ")";

const inversDarkBlue = "rgb(" + 229 + "," + 219 + "," + 197 + ")";


const getImageWallet30 = () => {

    return 'WalletWhite_30x30.png';

    if (darkMode == true) {
        return 'WalletWhite_30x30.png';
    } else {
        return 'WalletBlue_30x30.png';
    };
};

const getImageWallet20 = () => {

    // return 'WalletGray_20x20.png';

    if (darkMode == true) {
        return 'WalletBlue_20x20.png';
    } else {
        return 'WalletGrey_20x20.png';
    };
};

const getImageWallet15 = () => {

    // return 'WalletGray_20x20.png';

    if (darkMode == true) {
        return 'WalletBlue_15x15.png';
    } else {
        return 'WalletGrey_15x15.png';
    };
};


/////////////////////////////////START BINANCE ///////////////////////////////////////////////////////

const initButtonBinance = async () => {
    console.log("start init button binance");
    if (binanceInstalled == false) {
        setLabelNext_InstallBinance();
    } else {
        console.log("Binance Wallet installed")
        //currentAccountBinance = await BinanceChain.request({ method: 'eth_accounts' });
        if (isBinanceConnected() == false) {
            setLabelNext_ConnectBinance();
        } else {
            setLabelNext_SwitchNetworkBinance();
        };
    };
};

const setLabelNext_InstallBinance = async () => {
    console.log("buttonIsInstallBinance")
    const imgWallet = getImageWallet30();
    onboardButton.innerHTML = '<img src="' + imgWallet + '" /> &nbsp; Install Wallet';
    nextButton.innerHTML = 'Install &nbsp; <img src="IMG_Token/logo_BINANCECHAIN_30x30.png" /> &nbsp; <b>Binance</b> &nbsp; Wallet';
};
const setLabelNext_SwitchNetworkBinance = async () => {
    console.log("buttonIsNextBinance")
    onboardButton.innerHTML = '<img src="IMG_Token/logo_BINANCECHAIN_30x30.png" /> &nbsp; ' + currentAccountBinance.substring(0, 5) + '...' + currentAccountBinance.substring(38, 42);

    let token = getTokenComboToken1();

    if (darkMode == true) {
        img = token.token.logoDark;
    } else {
        img = token.token.logo;
    };

    //nextButton.style.background = darkBlue;
    nextButton.innerHTML = 'Swap &nbsp; <img src="IMG_Token/' + img + '" />  <b>' + token.token.label + '</b>';
};

const onClickNext_InitSendBinance = async () => {
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
        toastWarning("Please enter an destination address");
        cellDestinationAddress.style.visibility = 'visible'
    } else if (saiAdress.value == null) {
        toastWarning("Please enter an destination address");
        cellDestinationAddress.style.visibility = 'visible'
    } else if (saiAdress.value == 'undefined') {
        toastWarning("Please enter an destination address");
        cellDestinationAddress.style.visibility = 'visible'
    } else {
        qtyToken = controlAmount.value
        getBinanceAccountID(asset, controlAmount.value);
    };
    //};
};

const onClickNext_ConnectBinance = () => {

    toast.dismissAll()
    forcedConnectWallet = true
    toastInfo('Connect your wallet')

    BinanceChain
        .request({ method: 'eth_requestAccounts' })
        .then(binanceHandleAccountsChanged)
        .catch((err) => {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
        });

    startBinancehandleChainChanged();
};

const onClickNext_InstallBinance = async () => {
    window.open('https://www.binance.org/en/binance-wallet')
};

const setLabelNext_ConnectBinance = async () => {
    console.log("buttonIsConnectBinance")

    console.log("BinanceChainID", BinanceChainID())
    const imgWallet = getImageWallet30();
    onboardButton.innerHTML = '<img src="' + imgWallet + '" /> &nbsp; Connect Wallet';
    nextButton.innerHTML = 'Connect &nbsp; <img src="IMG_Token/logo_BINANCECHAIN_30x30.png" /> &nbsp; <b>Binance</b> &nbsp; Wallet';
};
////////////////////////////////end binance///////////////////////////////////////////////////////





///////////////////////////////////////////START PHANTOM///////////////////////////////////////////////
const initButtonPhantom = async () => {
    console.log("start init button Phantom");
    if (phantomInstalled == false) {
        setLabelOnBoard_InstallPhantom()
        setLabelNext_InstallPhantom();
    } else {
        console.log("Phantom Wallet installed")
        //currentAccountBinance = await BinanceChain.request({ method: 'eth_accounts' });
        if (isPhantomConnected() == false) {
            setLabelOnBoard_ConnectPhantom();
            setLabelNext_ConnectPhantom();
        } else {
            setLabelOnBoard_SwapTokenPhantom();
            setLabelNext_SwapTokenPhantom();
        };
    };
};
const onClickNext_InstallPhantom = async () => {
    window.open('https://phantom.app/')
};
const onClickNext_ConnectPhantom = async () => {

    //I dismiss all toast
    toast.dismissAll()
    forcedConnectWallet = true
    toastInfo('Connect your wallet')

    // opens wallet to connect to
    try {
        const resp = await web3Solana.connect();
        currentAccountPhantom = resp.publicKey.toString()
        console.log("resp.publicKey.toString", resp.publicKey.toString())
        // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
    } catch (err) {
        console.warn("error:", err)
        // { code: 4001, message: 'User rejected the request.' }
    }
};
const onClickNext_initSendPhantom = async () => {
    console.log("initsend Phantom")

    //For res on http
    Symbol = getSymbolToken();
    getNetworkIdComboSwap2();

    let asset = Symbol; //No contract, just symbol for send asset on binance chain

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
    } else if (amountWithoutFees == 0) {
        toastWarning("Please enter an amount greater than the fee");
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
        phantomSend(asset, controlAmount.value);
    };
    //};
};


const setLabelOnBoard_InstallPhantom = async () => {

};
const setLabelOnBoard_ConnectPhantom = async () => {
    console.log("setLabelOnBoard_IsConnectPhantom")
    const imgWallet = getImageWallet30();
    onboardButton.innerHTML = '<img src="' + imgWallet + '" /> &nbsp; Connect Wallet';

    nextButton.innerHTML = 'Connect &nbsp; <img src="IMG_Token/logo_PHANTOM_30x30.png" /> &nbsp; <b>Pantom</b> &nbsp; Wallet';

};
const setLabelOnBoard_SwapTokenPhantom = async () => {
    onboardButton.innerHTML = currentAccountPhantom.substring(0, 5) + '...' + currentAccountPhantom.substring(38, 42) || 'Not able to get accounts';
};

const setLabelNext_InstallPhantom = async () => {
    console.log("setLabelNext_InstallPhantom")
    const imgWallet = getImageWallet30();
    onboardButton.innerHTML = '<img src="' + imgWallet + '" /> &nbsp; Install Wallet';
    nextButton.innerHTML = 'Install Phantom Wallet';
};
const setLabelNext_ConnectPhantom = async () => {

};
const setLabelNext_SwapTokenPhantom = async () => {
    
    console.log("setLabelNext_SwapTokenPhantom")
   
    let token = getTokenComboToken1();

        if (darkMode == true) {
            img = token.token.logoDark;
        } else {
            img = token.token.logo;
        };

        //nextButton.style.background = darkBlue;
        nextButton.innerHTML = 'Swap &nbsp; <img src="IMG_Token/' + img + '" />  <b>' + token.token.label + '</b>';

        // const imgWallet = getImageWallet15();
        // let balance = await getBalance(currentAccountETH, token);

        // linkBalance.innerHTML = '<img src="' + imgWallet + '" />&nbsp;' + balance + '&nbsp;' + token.token.symbol;
        // tabNetwork[IDSwap1 - 1].tabNetwork2[IDSwap2 - 1].tabToken[IDToken1 - 1].token.balance = balance;

        // if (balance != 'undefined') {
        //     //I show link for balance
        //     linkBalance.style.visibility = "visible";
        // };
};

///////////////////////////////////////////end phantom///////////////////////////////////////////////






/////////////////////////START ETH//////////////////////////////////////////////////

const setLabelOnBoard_IsConnectETH = async () => {
    console.log("setLabelOnBoard_IsConnectETH")
    const intID = await web3.utils.toDecimal(networkIdMetamask);
    console.log("networkIdMetamask :", networkIdMetamask)
    console.log("go to getPictureBorderViaID", intID)
    const logo = await getPictureBorderViaID(intID)
    onboardButton.innerHTML = '<img src="IMG_Token/' + logo + '" /> &nbsp; ' + currentAccountETH.substring(0, 5) + '...' + currentAccountETH.substring(38, 42);
    //onboardButton.style.backgroundImage = "url('IMG_Token/" + logo + "')"
};

const setLabelNext_SwitchNetworkETH = async () => {

    console.warn("setLabelNext_SwitchNetworkETH")
    let img;

    //I checked if networkID is init
    if (networkComboSwap1 == undefined) {
        networkComboSwap1 = getNetworkComboSwap1();
    } else {
        if (networkComboSwap1.blockChainId == undefined) {
            networkComboSwap1 = getNetworkComboSwap1();
        };
    };

    if (networkComboSwap1.blockChainId != networkIdMetamask) {

        if (darkMode == true) {
            img = networkComboSwap1.logoDark;
        } else {
            img = networkComboSwap1.logo;
        };

        nextButton.innerHTML = 'Switch to &nbsp; <img src="IMG_Token/' + img + '" /> &nbsp; <b>' + networkComboSwap1.label + '</b>';

        //I changed image of button connect
        setLabelOnBoard_IsConnectETH();

    } else {

        let token = getTokenComboToken1();

        if (darkMode == true) {
            img = token.token.logoDark;
        } else {
            img = token.token.logo;
        };

        //nextButton.style.background = darkBlue;
        nextButton.innerHTML = 'Swap &nbsp; <img src="IMG_Token/' + img + '" />  <b>' + token.token.label + '</b>';

        const imgWallet = getImageWallet15();
        let balance = await getBalance(currentAccountETH, token);

        linkBalance.innerHTML = '<img src="' + imgWallet + '" />&nbsp;' + balance + '&nbsp;' + token.token.symbol;
        tabNetwork[IDSwap1 - 1].tabNetwork2[IDSwap2 - 1].tabToken[IDToken1 - 1].token.balance = balance;

        if (balance != 'undefined') {
            //I show link for balance
            linkBalance.style.visibility = "visible";
        };

    };
};

const setLabelNext_InstallMetamask = () => {
    console.log("MetaMask not installed");

    const imgWallet = getImageWallet30();
    onboardButton.innerHTML = '<img src="' + imgWallet + '" /> &nbsp; Install Wallet';
    nextButton.innerHTML = 'Install &nbsp; <img src="IMG_Token/logo_MM_30x30.png" /> &nbsp; <b>MetaMask</b> &nbsp; Wallet';
};

const setLabelNext_ConnectETH = () => {
    console.log("Wallet not connected")

    const imgWallet = getImageWallet30();
    onboardButton.innerHTML = '<img src="' + imgWallet + '" /> &nbsp; Connect Wallet';
    nextButton.innerHTML = 'Connect &nbsp; <img src="IMG_Token/logo_MM_30x30.png" /> &nbsp; <b>MetaMask</b> &nbsp; Wallet';

};

// const setLabelNext_SwitchNetworkBinance = () => {
//     let token = getTokenComboToken1();

//     if (darkMode == true) {
//         img = token.token.logoDark;
//     } else {
//         img = token.token.logo;
//     };

//     //nextButton.style.background = darkBlue;
//     nextButton.innerHTML = 'Swap &nbsp; <img src="IMG_Token/' + img + '" />  <b>' + token.token.label + '</b>';

// };
//************************************************************** */

//***************INIT BUTTON ********************************** */

const initButtonMetaMask = async () => {
    console.log("start init button metamask", currentAccountETH)
    if (metamaskInstalled == false) {
        setLabelNext_InstallMetamask();
    } else {
        if (isETHConnected() == false) {
            setLabelNext_ConnectETH();
        } else {
            setLabelNext_SwitchNetworkETH();
        };
    };
};

const initButtonTrust = async () => {
    console.log("start init button trust")
    if (trustInstalled == false) {
        /* alert('install')*/
        setLabelNext_InstallMetamask();
    } else {
        if (isETHConnected() == false) {
            setLabelNext_ConnectETH();
        } else {
            setLabelNext_SwitchNetworkETH();
        };
    };
};

const onClickNext_InitSendETH = async () => {

    //For res on http
    Symbol = getSymbolToken();
    getNetworkIdComboSwap2();

    if (networkComboSwap1.blockChainId == networkIdMetamask) {
        tokenIdComboToken = IDToken1;
        if (controlAmount.value == null) {
            toastWarning("Please enter an amount");
        } else if (controlAmount.value == '') {
            toastWarning("Please enter an amount");
        } else if (controlAmount.value == 0) {
            toastWarning("Please enter an amount");
        } else if (amountWithoutFees == 0) {
            toastWarning("Please enter an amount greater than the fee");
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
            console.log("saiAdress.value : ", saiAdress.value);
            console.log("WD networkComboSwap1.blockChainId : " + networkComboSwap1.blockChainId);
            console.log("WD tokenIdComboToken : " + tokenIdComboToken);
            ChoiceSend();
        };
    } else {
        forceSwitchNetwork();
    };
};

const onClickNext_ConnectETH = async () => {
    try {
        console.log("onclickConnect");

        forcedConnectWallet = true;
        toast.dismissAll();
        toastInfo('Connect your wallet');

        // Will open the MetaMask UI
        // You should disable this button while the request is pending!
        //await ethereum.request({ method: 'eth_requestAccounts' });
        const newAccounts = await ethereum.request({
            method: 'eth_requestAccounts',
        });

        //I start var
        startAppETH();
        handleNewAccounts(newAccounts);

    } catch (error) {
        toast.dismissAll();
        toastError(error);
        //console.error("Return error connection MetaMask", error);
    };
};


///////////////////////////////////////end eth//////////////////////////////////////////////////////////








const clicButtonNext = async () => {

    console.warn("Clic button next for ", tabNetwork[IDSwap1 - 1].label)
    switch (tabNetwork[IDSwap1 - 1].label) {

        case 'Binance Chain':
            console.log("swap1 binance")
            if (binanceInstalled == false) {
                onClickNext_InstallBinance()
            } else {
                if (isBinanceConnected() == false) {
                    onClickNext_ConnectBinance();
                } else {
                    onClickNext_InitSendBinance();
                };
            };
            break;

        case 'Solana':
            console.log("swap1 solana");
            if (phantomInstalled == false) {
                onClickNext_InstallPhantom()
            } else {
                if (isPhantomConnected() == false) {
                    onClickNext_ConnectPhantom();
                } else {
                    onClickNext_initSendPhantom();
                };
            }
            break;
        case 'Bitcoin':
            console.log("swap1 bitcoin");
            // if (phantomInstalled == false) {
            //     onClickNext_InstallPhantom()
            // } else {
            //     if (isPhantomConnected() == false) {
            //         onClickNext_ConnectPhantom();
            //     } else {
            //         onClickNext_initSendPhantom();
            //     };
            // }
            break;

        default:
            console.log("other (ETH)");
            if (metamaskInstalled == true) {
                if (isETHConnected() == false) {
                    onClickNext_ConnectETH();
                } else {
                    onClickNext_InitSendETH();
                };
            } else {
                if (trustInstalled == true) {
                    if (isETHConnected() == false) {
                        onClickNext_ConnectETH();
                    } else {
                        onClickNext_InitSendETH();
                    };
                };
            };
    };
};

const clickButtonConnect = () => {

    switch (btnChooseSwap1.innerHTML) {

        case 'Binance Chain':
            console.log("swap1 binance")
            if (binanceInstalled == false) {
                onClickNext_InstallBinance()
            } else {
                if (isBinanceConnected() == false) {
                    onClickNext_ConnectBinance();
                } else {
                    onClickPastAddressBinance();
                };
            };
            break;

        case 'Solana':
            console.log("swap1 solana");
            if (phantomInstalled == false) {
                onClickNext_InstallPhantom();
            } else {
                if (isPhantomConnected() == false) {
                    onClickNext_ConnectPhantom();
                } else {
                    onClickPastAddressPhantom();
                };
            };
            break;

        default:
            console.log("other (ETH)");
            if (metamaskInstalled == true) {
                if (isETHConnected() == false) {
                    onClickNext_ConnectETH();
                } else {

                    if (onboardButton.innerHTML != "Pending") {

                        return true;
                    }
                };
            } else {
                if (trustInstalled == true) {
                    if (isETHConnected() == false) {
                        onClickNext_ConnectETH();
                    } else {

                        if (onboardButton.innerHTML != "Pending") {

                            return true;
                        }

                    };
                };
            };
    };

    return false;
};

const labelPending = () => {
    return '<img src="loading-blue_5_30x30.gif" /> &nbsp; Pending &nbsp; ...';
};
const labelBridge = () => {
    return '<img src="loading-blue_6_30x30.gif" /> &nbsp; Bridge &nbsp; ...';
};
const setLabelNext_Pending = async () => {
    nextButton.innerHTML = labelPending();
};
const setLabelNext_Bridge = async () => {
    nextButton.innerHTML = labelBridge();
};

const setLabelNext = async () => {

    switch (tabNetwork[IDSwap1 - 1].label) {

        case 'Binance Chain':

            //I hide link for balance
            linkBalance.style.visibility = "hidden";

            console.log("swap1 binance")
            if (binanceInstalled == false) {
                setLabelNext_InstallBinance()
            } else {
                if (isBinanceConnected() == false) {
                    setLabelNext_ConnectBinance();
                } else {
                    setLabelNext_SwitchNetworkBinance()
                };
            };
            break;

        case 'Solana':
        
            console.log("swap1 solana");

            //I hide link for balance
            linkBalance.style.visibility = "hidden";

            if (phantomInstalled == false) {
                onClickNext_InstallPhantom()
            } else {
                if (isPhantomConnected() == false) {
                    onClickNext_ConnectPhantom();
                } else {
                    onClickNext_initSendPhantom();
                };
            };
            break;
        case 'Bitcoin':

            //I hide link for balance
            linkBalance.style.visibility = "hidden";

            console.log("swap1 bitcoin");
            // if (phantomInstalled == false) {
            //     onClickNext_InstallPhantom()
            // } else {
            //     if (isPhantomConnected() == false) {
            //         onClickNext_ConnectPhantom();
            //     } else {
            //         onClickNext_initSendPhantom();
            //     };
            // }
            break;

        default:

            //I hide link for balance
            linkBalance.style.visibility = "hidden";

            console.log("other (ETH)");
            if (metamaskInstalled == true) {
                if (isETHConnected() == false) {
                    setLabelNext_ConnectETH();
                } else {
                    setLabelNext_SwitchNetworkETH();
                };
            } else {
                if (trustInstalled == true) {
                    if (isETHConnected() == false) {
                        setLabelNext_ConnectETH();
                    } else {
                        setLabelNext_SwitchNetworkETH();
                    };
                } else {
                    setLabelNext_InstallMetamask();
                };
            };
    };
};
