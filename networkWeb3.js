//API HARMONY https://docs.harmony.one/home/developers/api


////The string decimals is for web3.utils.toWei(amount,'StringDecimals') (https://learnblockchain.cn/docs/web3.js/web3-utils.html#towei)
//noether: �0�

//wei: �1�

//kwei: �1000�

//Kwei: �1000�

//babbage: �1000�

//femtoether: �1000�

//mwei: �1000000�

//Mwei: �1000000�

//lovelace: �1000000�

//picoether: �1000000�

//gwei: �1000000000�

//Gwei: �1000000000�

//shannon: �1000000000�

//nanoether: �1000000000�

//nano: �1000000000�

//szabo: �1000000000000�

//microether: �1000000000000�

//micro: �1000000000000�

//finney: �1000000000000000�

//milliether: �1000000000000000�

//milli: �1000000000000000�

//ether: �1000000000000000000�

//kether: �1000000000000000000000�

//grand: �1000000000000000000000�

//mether: �1000000000000000000000000�

//gether: �1000000000000000000000000000�

//tether: �1000000000000000000000000000000�

//The ABI has found here : (format RAW for abi on one line
//on etherscan here :  http://api.etherscan.io/api?module=contract&action=getabi&address=0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0&format=raw

//on bscscan here : http://api.bscscan.com/api?module=contract&action=getabi&address=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&format=raw
//on fTMScan here : https://api.ftmscan.com/api?module=contract&action=getabi&address=0xe1146b9ac456fcbb60644c36fd3f868a9072fc6e&format=raw
//on PolygonScan here : https://api.polygonscan.com/api?module=contract&action=getabi&address=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&format=raw
//On Cronos.crypto.org //https://cronos.crypto.org/explorer/api?module=contract&action=getabi&address={addressHash}
//On Avax : https://api.snowtrace.io/api?module=contract&action=getabi&address=0x1c20e891bab6b1727d14da358fae2984ed9b59eb&format=raw
//OnHarmony :https://ctrver.t.hmny.io/fetchContractCode?contractAddress=0x0dc78c79b4eb080ead5c1d16559225a46b580694 //https://www.reddit.com/r/Harmony_Devs/comments/r4iyst/reading_smart_contracts_via_curl/
//OnVELAS : https://evmexplorer.velas.com/api?module=contract&action=getabi&address=0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126&format=raw
//<head> //Icon on metamask //https://docs.metamask.io/guide/defining-your-icon.html
//    <link rel="shortcut icon" href="https://your-site.com/your-icon.png" />
//</head>

const decimal_1 = 'wei'
const decimal_3 = 'kwei'
const decimal_6 = 'mwei'
const decimal_9 = 'gwei'
const decimal_12 = 'microether'
const decimal_18 = 'ether'
const standartABI_ETH = JSON.parse('[ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "type": "function" }]');
const standartABI = JSON.parse('[ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "type": "function" }]');
const standartABI_BSC = JSON.parse('[ {"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "owner","type": "address"},{"indexed": true,"internalType": "address","name": "spender","type": "address"},{"indexed": false,"internalType": "uint256","name": "value","type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "from","type": "address"},{"indexed": true,"internalType": "address","name": "to","type": "address"},{"indexed": false,"internalType": "uint256","name": "value","type": "uint256"}],"name": "Transfer","type": "event"},{"constant": true,"inputs": [{"internalType": "address","name": "_owner","type": "address"},{"internalType": "address","name": "spender","type": "address"}],"name": "allowance","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "spender","type": "address"},{"internalType": "uint256","name": "amount","type": "uint256"}],"name": "approve","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"internalType": "address","name": "account","type": "address"}],"name": "balanceOf","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "decimals","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "getOwner","outputs": [{"internalType": "address","name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "name","outputs": [{"internalType": "string","name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"internalType": "string","name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "totalSupply","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "recipient","type": "address"},{"internalType": "uint256","name": "amount","type": "uint256"}],"name": "transfer","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"internalType": "address","name": "sender","type": "address"},{"internalType": "address","name": "recipient","type": "address"},{"internalType": "uint256","name": "amount","type": "uint256"}],"name": "transferFrom","outputs": [{"internalType": "bool","name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"}]');
const standartABI_CRO = JSON.parse('[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_crt","internalType":"contract CaratToken"},{"type":"address","name":"_devaddr","internalType":"address"},{"type":"address","name":"_feeAddress","internalType":"address"},{"type":"uint256","name":"_crtPerSec","internalType":"uint256"},{"type":"uint256","name":"_startTimestamp","internalType":"uint256"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"ExcludeFromFee","inputs":[{"type":"address","name":"account","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"IncludeInFee","inputs":[{"type":"address","name":"account","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"SetDevAddress","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"newAddress","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"SetFeeAddress","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"newAddress","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"UpdateEmissionRate","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"crtPerSec","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"UpdateStartTimestamp","inputs":[{"type":"uint256","name":"newStartTimestamp","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"addPool","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"address","name":"lpToken","internalType":"address","indexed":false},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false},{"type":"uint256","name":"depositFeeBP","internalType":"uint256","indexed":false},{"type":"uint256","name":"withdrawalFeeBP","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"setPool","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"address","name":"lpToken","internalType":"address","indexed":false},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false},{"type":"uint256","name":"depositFeeBP","internalType":"uint256","indexed":false},{"type":"uint256","name":"withdrawalFeeBP","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"BONUS_MULTIPLIER","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"MaxSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IERC20"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"uint16","name":"_withdrawalFeeBP","internalType":"uint16"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract CaratToken"}],"name":"crt","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"crtPerSec","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"devaddr","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"excludeFromFee","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"feeAddress","inputs":[]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"includeInFee","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isExcludedFromFee","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingCarat","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"poolExistence","inputs":[{"type":"address","name":"","internalType":"contract IERC20"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IERC20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardTimestamp","internalType":"uint256"},{"type":"uint256","name":"accCaratPerShare","internalType":"uint256"},{"type":"uint16","name":"depositFeeBP","internalType":"uint16"},{"type":"uint16","name":"withdrawalFeeBP","internalType":"uint16"},{"type":"uint256","name":"lpSupply","internalType":"uint256"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"uint16","name":"_withdrawalFeeBP","internalType":"uint16"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevAddress","inputs":[{"type":"address","name":"_devaddr","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setFeeAddress","inputs":[{"type":"address","name":"_feeAddress","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startTimestamp","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateEmissionRate","inputs":[{"type":"uint256","name":"_crtPerSec","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateStartTimestamp","inputs":[{"type":"uint256","name":"_newStartTimestamp","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]}]');

//********************************************************************************************************************************************************************************
//**************************************************************************START INIT NETWORK************************************************************************************
//********************************************************************************************************************************************************************************

var tabIndiceNetwork = {
    Ethereum: 1,
    BSC: 2,
    BinanceChain: 3
};

//Adr and abi of token in ETH Network
var tabNetwork = [
    {
        EVM: true,
        networkName: 'Ethereum mainnet',
        symbol: 'ETH',
        label: 'Ethereum',
        labelChoose: 'Ethereum',
        visible: true,
        rpcUrl: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',//rpcUrl: 'http://localhost:8545',
        explorer: 'https://etherscan.io/',
        blockChainId: 1,
        backgroundBTN: "grey",
        // maxGas: web3.utils.toHex(21000),
        // maxFeePerGas: web3.utils.toHex(170 * 1e9),
        maxGas: '',
        maxFeePerGas: '',
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        // maxGas_Token: web3.utils.toHex(75000),
        // maxFeePerGas_Token: web3.utils.toHex(150 * 1e9),
        maxGas_Token: web3.utils.toHex(65000),
        maxFeePerGas_Token: '',
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_ETH_30x30.png',
        logoDark: 'logo_ETH_30x30.png',
        nativeCurrency: { name: 'Ethereum', decimals: 18, symbol: 'ETH' },
        Standart: {
            ABI: JSON.parse('[ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "type": "function" }]'),
        },
        tabToken:
            [
                {

                    //adress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    //ABI: JSON.parse('[{"constant":false,"inputs":[{"name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newImplementation","type":"address"},{"name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_implementation","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"previousAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"implementation","type":"address"}],"name":"Upgraded","type":"event"}]'),
                    contract: null,
                    token: tabToken.tokenUSDC,
                    decimals: decimal_6,
                    gouvernent: false,
                    balance: ''
                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false,
                    balance: ''
                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    //ABI: JSON.parse('[{"constant":false,"inputs":[{"name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newImplementation","type":"address"},{"name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_implementation","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"previousAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"implementation","type":"address"}],"name":"Upgraded","type":"event"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"unfreeze","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"freezeOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"freeze","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Freeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Unfreeze","type":"event"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "1",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: true,
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"reclaimToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'),
                    contract: null,
                    decimals: 8,
                    token: tabToken.tokenBTC,
                    gouvernent: false, //8 don't exist on toWei, i calcul manualy if it number
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isPauser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renouncePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"totalSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":true,"inputs":[],"name":"DATE_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"address"}],"name":"removeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_TOTAL_TOKEN_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"LOCK_SLOTS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balancesMinted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dateMainEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAXIMUM_FIRST_DAY_CONTRIBUTION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_mint_type","type":"uint256"},{"name":"_account","type":"address"},{"name":"_tokens","type":"uint256"},{"name":"_term","type":"uint256"}],"name":"mintTokensLocked","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_mint_type","type":"uint256"},{"name":"_accounts","type":"address[]"},{"name":"_tokens","type":"uint256[]"},{"name":"_terms","type":"uint256[]"}],"name":"mintTokensLockedMultiple","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"lockTerm","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"wallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TOKEN_MAIN_CAP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"lockedTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"openMigrationPhase","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isMain","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isMainFirstDay","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numberWhitelisted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokensMinted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"address"}],"name":"addAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"availableToMint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokens","type":"uint256"}],"name":"tokensToEth","outputs":[{"name":"eth","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"unlockedTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokens","type":"uint256"}],"name":"requestTokenExchange","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokensIssuedTotal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_unixts","type":"uint256"}],"name":"setDateMainEnd","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"balancesMintedByType","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_CONTRIBUTION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_mint_type","type":"uint256"},{"name":"_account","type":"address"},{"name":"_tokens","type":"uint256"}],"name":"mintTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balancesMain","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addresses","type":"address[]"}],"name":"addToWhitelistMultiple","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"requestTokenExchangeMax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"whitelist","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokens_per_eth","type":"uint256"}],"name":"updateTokensPerEth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"makeTradeable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addresses","type":"address[]"},{"name":"_amounts","type":"uint256[]"}],"name":"transferMultiple","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_eth","type":"uint256"}],"name":"ethToTokens","outputs":[{"name":"tokens","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dateMainStart","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_unixts","type":"uint256"}],"name":"setDateMainStart","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_mint_type","type":"uint256"},{"name":"_accounts","type":"address[]"},{"name":"_tokens","type":"uint256[]"}],"name":"mintTokensMultiple","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isMigrationPhaseOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthContributed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokensTradeable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokensPerEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"},{"name":"_term","type":"uint256"}],"name":"isAvailableLockSlot","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token_address","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokensMain","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_wallet","type":"address"}],"name":"setWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"lockAmnt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"addToWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"firstDayTokenLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"mayHaveLockedTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"ethContributed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokensPerEth","type":"uint256"}],"name":"UpdatedTokensPerEth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"},{"indexed":false,"name":"countWhitelisted","type":"uint256"}],"name":"Whitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"mintType","type":"uint256"},{"indexed":true,"name":"account","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"},{"indexed":false,"name":"term","type":"uint256"}],"name":"TokensMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"},{"indexed":false,"name":"tokensIssued","type":"uint256"},{"indexed":false,"name":"ethContributed","type":"uint256"},{"indexed":false,"name":"ethReturned","type":"uint256"}],"name":"RegisterContribution","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"TokenExchangeRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"unixts","type":"uint256"}],"name":"IcoDateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"},{"indexed":true,"name":"idx","type":"uint256"},{"indexed":false,"name":"tokens","type":"uint256"},{"indexed":false,"name":"term","type":"uint256"}],"name":"RegisteredLockedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newWallet","type":"address"}],"name":"WalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferProposed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_admin","type":"address"},{"indexed":false,"name":"_status","type":"bool"}],"name":"AdminChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false,
                    balance: ''
                },

                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"state","type":"bool"}],"name":"setTransferAgent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"secondarySaleReserveWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setReleaseAgent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"upgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradeAgent","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"releaseTokenTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradeMaster","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mainNetLaunchIncentiveReserveWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getUpgradeState","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"transferAgents","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"released","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"canUpgrade","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"capitalReserveWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"airdropReserveWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalUpgraded","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"releaseAgent","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"agent","type":"address"}],"name":"setUpgradeAgent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ecosystemGrantsReserveWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"master","type":"address"}],"name":"setUpgradeMaster","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_initialSupply","type":"uint256"},{"name":"_decimals","type":"uint8"},{"name":"_mintable","type":"bool"},{"name":"_secondarySaleReserveWallet","type":"address"},{"name":"_mainNetLaunchIncentiveReserveWallet","type":"address"},{"name":"_capitalReserveWallet","type":"address"},{"name":"_ecosystemGrantsReserveWallet","type":"address"},{"name":"_airdropReserveWallet","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newName","type":"string"},{"indexed":false,"name":"newSymbol","type":"string"}],"name":"UpdatedTokenInformation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Upgrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"agent","type":"address"}],"name":"UpgradeAgentSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'),
                    contract: null,
                    decimals: 8,
                    token: tabToken.tokenCRO,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false,
                    balance: ''
                },

                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"minter_","type":"address"},{"internalType":"uint256","name":"mintingAllowedAfter_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"address","name":"newMinter","type":"address"}],"name":"MinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint96","name":"votes","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumTimeBetweenMints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mintCap","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mintingAllowedAfter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"minter_","type":"address"}],"name":"setMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"uint256","name":"chainId_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"usr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"allowed","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_sender","type":"address"},{"indexed":true,"internalType":"bytes32","name":"_to","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"to","type":"bytes32"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false,
                    balance: ''
                },

                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bridgeContract","type":"address"}],"name":"setBridgeContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"isBridge","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTokenInterfacesVersion","outputs":[{"name":"major","type":"uint64"},{"name":"minor","type":"uint64"},{"name":"patch","type":"uint64"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bridgeContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"value","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":true,"inputs":[],"name":"proxyOwner","outputs":[{"name":"owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingProxyOwner","outputs":[{"name":"pendingOwner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"implementation","type":"address"}],"name":"upgradeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"impl","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"claimProxyOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"ProxyOwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"currentOwner","type":"address"},{"indexed":false,"name":"pendingOwner","type":"address"}],"name":"NewPendingOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"implementation","type":"address"}],"name":"Upgraded","type":"event"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"owners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"issuer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"revokeConfirmation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"burnId","type":"uint256"}],"name":"getBurn","outputs":[{"name":"_burner","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"confirmations","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newIssuer","type":"address"}],"name":"transferIssuer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"burnList","outputs":[{"name":"value","type":"uint256"},{"name":"burner","type":"address"},{"name":"data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"isConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmationCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactions","outputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"WITHDRAW_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwners","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"from","type":"uint256"},{"name":"to","type":"uint256"},{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionIds","outputs":[{"name":"_transactionIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"_confirmations","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"withdrawFee","type":"uint256"}],"name":"setWithdrawFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transactionCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_required","type":"uint256"}],"name":"changeRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"confirmTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"submitTransaction","outputs":[{"name":"transactionId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_OWNER_COUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"required","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"newOwner","type":"address"}],"name":"replaceOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBurnCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"executeTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"cap","type":"uint256"},{"name":"withdrawFee","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Revocation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Submission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Execution","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"ExecutionFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerRemoval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"required","type":"uint256"}],"name":"RequirementChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burnID","type":"uint256"},{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"TokenBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint32","name":"pos","type":"uint32"}],"name":"checkpoints","outputs":[{"components":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint224","name":"votes","type":"uint224"}],"internalType":"struct ERC20Votes.Checkpoint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint224","name":"","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newBlacklister","type":"address"}],"name":"BlacklisterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"UnBlacklisted","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"blacklister","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"unBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newBlacklister","type":"address"}],"name":"updateBlacklister","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false,
                    balance: ''
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":false,"inputs":[{"name":"_bridge","type":"address"}],"name":"removeBridge","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferDistribution","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"distributionAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"bridgePointers","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"advisorsRewardDistributionAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"isBridge","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"privateOfferingDistributionAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"nonces","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_holder","type":"address"},{"name":"_spender","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_expiry","type":"uint256"},{"name":"_allowed","type":"bool"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bridge","type":"address"}],"name":"addBridge","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bridgeList","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"F_ADDR","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_amount","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bridgeCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"expirations","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_distributionAddress","type":"address"},{"name":"_privateOfferingDistributionAddress","type":"address"},{"name":"_advisorsRewardDistributionAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"bridge","type":"address"}],"name":"BridgeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"bridge","type":"address"}],"name":"BridgeRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ContractFallbackCallFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false,
                    balance: ''
                }
            ],
        tabNetwork2: []
    },
    {
        EVM: true,
        networkName: 'Binance Smart Chain',
        symbol: 'BNB',
        label: 'Binance Smart Chain',
        labelChoose: 'BSC',
        visible: true,
        rpcUrl: 'https://bsc-dataseed.binance.org/',
        explorer: 'https://bscscan.com/',
        blockChainId: 56,
        backgroundBTN: "orange",
        //maxFeePerGas: web3.utils.toHex(6 * 1e9),
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000), // MM write 76000000 ....
        maxGas_Token: web3.utils.toHex(60000),
        maxFeePerGas_Token: '',
        // maxFeePerGas_Token: web3.utils.toHex(6 * 1e9),
        // maxGas_Token: web3.utils.toHex(81447),
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_BNB_30x30.png',
        logoDark: 'logo_BNB_30x30.png',
        nativeCurrency: { name: 'Binance Coin', decimals: 18, symbol: 'BNB' },
        Standart: '',
        tabToken:
            [
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUSDC,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUSDT,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: true
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC, contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },

                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_sender","type":"address"},{"indexed":true,"internalType":"bytes32","name":"_to","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"to","type":"bytes32"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false
                },

                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bridgeContract","type":"address"}],"name":"setBridgeContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"isBridge","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTokenInterfacesVersion","outputs":[{"name":"major","type":"uint64"},{"name":"minor","type":"uint64"},{"name":"patch","type":"uint64"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"bridgeContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    },
    {
        EVM: false,
        networkName: 'Binance Chain',
        symbol: 'BNB',
        label: 'Binance Chain',
        labelChoose: 'Binance Chain',
        visible: true,
        rpcUrl: '',
        explorer: 'https://explorer.binance.org/',
        blockChainId: 'Binance-Chain-Tigris',
        backgroundBTN: "orange",
        maxFeePerGas: '',
        maxGas: '',
        maxFeePerGas_Token: '',
        maxGas_Token: '',
        maxPriorityFeePerGas: '',
        maxPriorityFeePerGas_Token: '',
        logo: 'logo_BINANCECHAIN_30x30.png',
        logoDark: 'logo_BINANCECHAIN_30x30.png',
        nativeCurrency: { name: 'Binance Coin', decimals: 18, symbol: 'BNB' },
        Standart: '',
        tabToken:
            [
                {
                    adress: '',
                    ABI: '',
                    contract: '',
                    decimals: decimal_18,
                    token: tabToken.tokenUSDC,
                    gouvernent: false
                },
                {
                    adress: '',
                    ABI: '',
                    contract: '',
                    decimals: decimal_18,
                    token: tabToken.tokenUSDT,
                    gouvernent: false
                },
                {
                    adress: 'BUSD-BAF',
                    ABI: '',
                    contract: '',
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false
                },
                {
                    adress: 'BNB',
                    ABI: '',
                    contract: '',
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: true
                },
                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false
                },
                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: false
                },
                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false
                },
                {
                    adress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false
                },
                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false
                },
                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false
                },
                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false
                },
                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false
                },

                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false
                },
                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false
                },
                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false
                },
                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false
                },
                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false
                },
                {
                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    },
    {
        EVM: true,
        networkName: 'Matic Mainnet',
        symbol: 'MATIC',
        label: 'Polygon',
        labelChoose: 'Polygon',
        visible: true,
        //rpcUrl: 'https://polygon-rpc.com/',
        rpcUrl: 'https://rpc-mainnet.maticvigil.com/',
        explorer: 'https://polygonscan.com/',
        blockChainId: 137,
        backgroundBTN: "purple",
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000),
        maxFeePerGas_Token: '',
        maxGas_Token: web3.utils.toHex(100000),
        maxPriorityFeePerGas: '',
        maxPriorityFeePerGas_Token: '',
        // maxPriorityFeePerGas: web3.utils.toHex(70* 1e9),
        // maxPriorityFeePerGas_Token: web3.utils.toHex(60* 1e9),
        logo: 'logo_MATIC_30x30.png',
        logoDark: 'logo_MATIC_30x30.png',
        nativeCurrency: { name: 'Polygon', decimals: 18, symbol: 'MATIC' },
        Standart: '',
        tabToken:
            [
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    adressProxy: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"IMPLEMENTATION_SLOT","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER_SLOT","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    //ABI: standartABI_BSC,
                    ABI: JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"UnBlacklisted","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"APPROVE_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BLACKLISTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CANCEL_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EIP712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"META_TRANSACTION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESCUER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"approveWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"authorizationState","outputs":[{"internalType":"enum GasAbstraction.AuthorizationState","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"blacklisters","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"cancelAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"decrement","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"decreaseAllowanceWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"increment","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"increaseAllowanceWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"},{"internalType":"string","name":"newSymbol","type":"string"},{"internalType":"uint8","name":"newDecimals","type":"uint8"},{"internalType":"address","name":"childChainManager","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pausers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"tokenContract","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rescuers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"},{"internalType":"string","name":"newSymbol","type":"string"}],"name":"updateMetadata","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"withdrawWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    ABI: standartABI_BSC,
                    //ABI: JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false
                },
                {
                    //adress: "0x9fb83c0635de2e815fd1c21b3a292277540c2e8d",
                    adress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_underlying","type":"address"},{"internalType":"address","name":"_vault","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"auth","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"LogAddAuth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveHeight","type":"uint256"}],"name":"LogChangeMPCOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldVault","type":"address"},{"indexed":true,"internalType":"address","name":"newVault","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveTime","type":"uint256"}],"name":"LogChangeVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"txhash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"bindaddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"txhash","type":"bytes32"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swapin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"bindaddr","type":"address"}],"name":"Swapout","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TRANSFER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"applyMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"applyVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeMPCOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeVault","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayMinter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"depositVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithTransferPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllMinters","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"initVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minters","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mpc","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"revokeMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"setVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setVaultOnly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]'),
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    //decimals: 0,
                    token: tabToken.tokenBUSD,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false
                },

                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"childChainManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CHILD_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CHILD_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    //decimals: 0,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    ABI: standartABI_BSC,
                    //ABI: JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CHILD_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CHILD_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"}],"name":"changeName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address","name":"childChainManager","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    //decimals: 8,
                    decimals: 0,
                    //decimals: 0,
                    token: tabToken.tokenBTC,
                    gouvernent: false //8 don't exist on toWei, i calcul manualy if it number
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: true
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    ABI: standartABI_BSC,
                    contract: null,
                    //decimals: 0,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: 8,
                    token: tabToken.tokenCRO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false
                },

                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    //ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"_proxyTo","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_new","type":"address"},{"indexed":false,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyOwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_new","type":"address"},{"indexed":true,"internalType":"address","name":"_old","type":"address"}],"name":"ProxyUpdated","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyType","outputs":[{"internalType":"uint256","name":"proxyTypeId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"updateAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_newProxyTo","type":"address"}],"name":"updateImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    }
    ,
    {
        EVM: true,
        networkName: 'Fantom Opera',
        symbol: 'FTM',
        label: 'Fantom',
        labelChoose: 'Fantom',
        visible: true,
        rpcUrl: 'https://rpc.ftm.tools/',
        explorer: 'https://ftmscan.com/',
        blockChainId: 250,
        backgroundBTN: "blue",
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000),
        maxFeePerGas_Token: '',
        maxGas_Token: web3.utils.toHex(45000), //MM write 267401227875122 ...
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_FTM_30x30.png',
        logoDark: 'logo_FTM_30x30.png',
        nativeCurrency: { name: 'Fantom', decimals: 18, symbol: 'FTM' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveTime","type":"uint256"}],"name":"LogChangeDCRMOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"txhash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"bindaddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"txhash","type":"bytes32"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swapin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"bindaddr","type":"address"}],"name":"Swapout","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TRANSFER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"changeDCRMOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_underlying","type":"address"},{"internalType":"address","name":"_vault","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveHeight","type":"uint256"}],"name":"LogChangeMPCOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldVault","type":"address"},{"indexed":true,"internalType":"address","name":"newVault","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveTime","type":"uint256"}],"name":"LogChangeVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"txhash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"bindaddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"txhash","type":"bytes32"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swapin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"bindaddr","type":"address"}],"name":"Swapout","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TRANSFER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeMPCOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeVault","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"depositVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithTransferPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_underlying","type":"address"},{"internalType":"address","name":"_vault","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"auth","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"LogAddAuth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveHeight","type":"uint256"}],"name":"LogChangeMPCOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldVault","type":"address"},{"indexed":true,"internalType":"address","name":"newVault","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveTime","type":"uint256"}],"name":"LogChangeVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"txhash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"bindaddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"txhash","type":"bytes32"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swapin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"bindaddr","type":"address"}],"name":"Swapout","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TRANSFER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"applyMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"applyVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeMPCOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeVault","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayMinter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"depositVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithTransferPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllMinters","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"initVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minters","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mpc","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"revokeMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"setVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setVaultOnly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_underlying","type":"address"},{"internalType":"address","name":"_vault","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"auth","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"LogAddAuth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveHeight","type":"uint256"}],"name":"LogChangeMPCOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldVault","type":"address"},{"indexed":true,"internalType":"address","name":"newVault","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveTime","type":"uint256"}],"name":"LogChangeVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"txhash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"bindaddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"txhash","type":"bytes32"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swapin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"bindaddr","type":"address"}],"name":"Swapout","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TRANSFER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"applyMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"applyVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeMPCOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeVault","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayMinter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"depositVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithTransferPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllMinters","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"initVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minters","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mpc","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"revokeMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"setVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setVaultOnly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"PauserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"PauserRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isPauser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renouncePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"PauserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"PauserRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isPauser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renouncePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"PauserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"PauserRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"constant":true,"inputs":[],"name":"ERR_INVALID_ZERO_VALUE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ERR_NO_ERROR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isPauser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renouncePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: true

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },

                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },

                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveTime","type":"uint256"}],"name":"LogChangeDCRMOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"txhash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"bindaddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"txhash","type":"bytes32"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swapin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"bindaddr","type":"address"}],"name":"Swapout","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TRANSFER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"changeDCRMOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_underlying","type":"address"},{"internalType":"address","name":"_vault","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"auth","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"LogAddAuth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveHeight","type":"uint256"}],"name":"LogChangeMPCOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldVault","type":"address"},{"indexed":true,"internalType":"address","name":"newVault","type":"address"},{"indexed":true,"internalType":"uint256","name":"effectiveTime","type":"uint256"}],"name":"LogChangeVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"txhash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"bindaddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogSwapout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"txhash","type":"bytes32"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swapin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"bindaddr","type":"address"}],"name":"Swapout","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TRANSFER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"applyMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"applyVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeMPCOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newVault","type":"address"}],"name":"changeVault","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayMinter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"delayVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"depositVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"address","name":"to","type":"address"}],"name":"depositWithTransferPermit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllMinters","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"initVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"minters","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mpc","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"revokeMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"setVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"setVaultOnly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithPermit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    },
    {
        EVM: false,
        networkName: 'Solana',
        symbol: 'SOL',
        label: 'Solana',
        labelChoose: 'Solana',
        visible: false,
        rpcUrl: '',
        explorer: 'https://explorer.solana.com/',
        blockChainId: 0,
        backgroundBTN: "blue",
        gmaxFeePerGas: '',
        maxGas: '',
        maxFeePerGas_Token: '',
        maxGas_Token: '',
        maxPriorityFeePerGas: '',
        maxPriorityFeePerGas_Token: '',
        logo: 'logo_SOL_30x30.png',
        logoDark: 'logo_SOL_30x30.png',
        nativeCurrency: { name: 'Solana', decimals: 0, symbol: 'SOL' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: 8,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false

                },
                {

                    adress: "1",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: true

                },

                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []

    },
    {
        EVM: true,
        networkName: 'Cronos',
        symbol: 'CRO',
        label: 'Cronos',
        labelChoose: 'Cronos',
        visible: true,
        rpcUrl: 'https://evm-cronos.crypto.org',
        explorer: 'https://cronos.crypto.org/explorer/',
        blockChainId: 25,
        backgroundBTN: "blue",
        //maxFeePerGas: web3.utils.toHex(5000 * 1e9), 
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000), //MM write 9500000 ...
        //maxFeePerGas_Token: web3.utils.toHex(5000 * 1e9),
        maxFeePerGas_Token: '',
        maxGas_Token: web3.utils.toHex(100000), //MM write 9500000 ...
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_CRONOS_30x30.png', //logo_Cronos.png
        logoDark: 'logo_CRONOS_WHITE_30x30.png', //logo_Cronos.png
        nativeCurrency: { name: 'Crypto.com', decimals: 18, symbol: 'CRO' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',//"0xfA9343C3897324496A05fC75abeD6bAC29f8A",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: 8,
                    token: tabToken.tokenBTC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: 8,
                    token: tabToken.tokenCRO,
                    gouvernent: true

                },
                {

                    adress: "",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },

                {

                    adress: "",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []

    },
    {
        EVM: true,
        networkName: 'Avalanche Network',
        symbol: 'AVAX',
        label: 'Avalanche',
        labelChoose: 'Avalanche',
        visible: true,
        rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
        explorer: 'https://cchain.explorer.avax.network/',
        blockChainId: 43114,
        backgroundBTN: "blue",
        //maxFeePerGas: web3.utils.toHex(40 * 1e9),
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000), //MM write 7600000 ...
        //maxFeePerGas_Token: web3.utils.toHex(25 * 1e9),
        maxFeePerGas_Token: '',
        maxGas_Token: web3.utils.toHex(80000),//MM write 7600000 ...
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_AVAX_30x30.png',
        logoDark: 'logo_AVAX_30x30.png',
        nativeCurrency: { name: 'Avalanche', decimals: 18, symbol: 'AVAX' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "AddSupportedChainId","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "contractAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "supplyIncrement", "type": "uint256"}],"name": "AddSwapToken","type": "event"},{"anonymous": false,"inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address"},{ "indexed": true, "internalType": "address", "name": "spender", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "newBridgeRoleAddress", "type": "address"}],"name": "MigrateBridgeRole","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "to", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},{ "indexed": false, "internalType": "address", "name": "feeAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "feeAmount", "type": "uint256"},{ "indexed": false, "internalType": "bytes32", "name": "originTxId", "type": "bytes32"}],"name": "Mint","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "contractAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "supplyDecrement", "type": "uint256"}],"name": "RemoveSwapToken","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "token", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "Swap","type": "event"},{"anonymous": false,"inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address"},{ "indexed": true, "internalType": "address", "name": "to", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},{ "indexed": false, "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "Unwrap","type": "event"},{"inputs": [{ "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "addSupportedChainId","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "contractAddress", "type": "address"},{ "internalType": "uint256", "name": "supplyIncrement", "type": "uint256"}],"name": "addSwapToken","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "owner", "type": "address"},{ "internalType": "address", "name": "spender", "type": "address"}],"name": "allowance","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "approve","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "account", "type": "address"}],"name": "balanceOf","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "burn","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "account", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "burnFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"name": "chainIds","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "decimals","outputs": [{ "internalType": "uint8", "name": "", "type": "uint8"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "subtractedValue", "type": "uint256"}],"name": "decreaseAllowance","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "addedValue", "type": "uint256"}],"name": "increaseAllowance","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "newBridgeRoleAddress", "type": "address"}],"name": "migrateBridgeRole","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "to", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"},{ "internalType": "address", "name": "feeAddress", "type": "address"},{ "internalType": "uint256", "name": "feeAmount", "type": "uint256"},{ "internalType": "bytes32", "name": "originTxId", "type": "bytes32"}],"name": "mint","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "name","outputs": [{ "internalType": "string", "name": "", "type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "contractAddress", "type": "address"},{ "internalType": "uint256", "name": "supplyDecrement", "type": "uint256"}],"name": "removeSwapToken","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "token", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "swap","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "token", "type": "address"}],"name": "swapSupply","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{ "internalType": "string", "name": "", "type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalSupply","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "recipient", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "transfer","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "sender", "type": "address"},{ "internalType": "address", "name": "recipient", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "transferFrom","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256"},{ "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "unwrap","outputs": [],"stateMutability": "nonpayable","type": "function"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "AddSupportedChainId","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "contractAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "supplyIncrement", "type": "uint256"}],"name": "AddSwapToken","type": "event"},{"anonymous": false,"inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address"},{ "indexed": true, "internalType": "address", "name": "spender", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "newBridgeRoleAddress", "type": "address"}],"name": "MigrateBridgeRole","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "to", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},{ "indexed": false, "internalType": "address", "name": "feeAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "feeAmount", "type": "uint256"},{ "indexed": false, "internalType": "bytes32", "name": "originTxId", "type": "bytes32"}],"name": "Mint","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "contractAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "supplyDecrement", "type": "uint256"}],"name": "RemoveSwapToken","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "token", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "Swap","type": "event"},{"anonymous": false,"inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address"},{ "indexed": true, "internalType": "address", "name": "to", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},{ "indexed": false, "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "Unwrap","type": "event"},{"inputs": [{ "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "addSupportedChainId","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "contractAddress", "type": "address"},{ "internalType": "uint256", "name": "supplyIncrement", "type": "uint256"}],"name": "addSwapToken","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "owner", "type": "address"},{ "internalType": "address", "name": "spender", "type": "address"}],"name": "allowance","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "approve","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "account", "type": "address"}],"name": "balanceOf","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "burn","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "account", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "burnFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"name": "chainIds","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "decimals","outputs": [{ "internalType": "uint8", "name": "", "type": "uint8"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "subtractedValue", "type": "uint256"}],"name": "decreaseAllowance","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "addedValue", "type": "uint256"}],"name": "increaseAllowance","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "newBridgeRoleAddress", "type": "address"}],"name": "migrateBridgeRole","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "to", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"},{ "internalType": "address", "name": "feeAddress", "type": "address"},{ "internalType": "uint256", "name": "feeAmount", "type": "uint256"},{ "internalType": "bytes32", "name": "originTxId", "type": "bytes32"}],"name": "mint","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "name","outputs": [{ "internalType": "string", "name": "", "type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "contractAddress", "type": "address"},{ "internalType": "uint256", "name": "supplyDecrement", "type": "uint256"}],"name": "removeSwapToken","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "token", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "swap","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "token", "type": "address"}],"name": "swapSupply","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{ "internalType": "string", "name": "", "type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalSupply","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "recipient", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "transfer","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "sender", "type": "address"},{ "internalType": "address", "name": "recipient", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "transferFrom","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256"},{ "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "unwrap","outputs": [],"stateMutability": "nonpayable","type": "function"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "AddSupportedChainId","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "contractAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "supplyIncrement", "type": "uint256"}],"name": "AddSwapToken","type": "event"},{"anonymous": false,"inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address"},{ "indexed": true, "internalType": "address", "name": "spender", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "newBridgeRoleAddress", "type": "address"}],"name": "MigrateBridgeRole","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "to", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},{ "indexed": false, "internalType": "address", "name": "feeAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "feeAmount", "type": "uint256"},{ "indexed": false, "internalType": "bytes32", "name": "originTxId", "type": "bytes32"}],"name": "Mint","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "contractAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "supplyDecrement", "type": "uint256"}],"name": "RemoveSwapToken","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "token", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "Swap","type": "event"},{"anonymous": false,"inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address"},{ "indexed": true, "internalType": "address", "name": "to", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},{ "indexed": false, "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "Unwrap","type": "event"},{"inputs": [{ "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "addSupportedChainId","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "contractAddress", "type": "address"},{ "internalType": "uint256", "name": "supplyIncrement", "type": "uint256"}],"name": "addSwapToken","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "owner", "type": "address"},{ "internalType": "address", "name": "spender", "type": "address"}],"name": "allowance","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "approve","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "account", "type": "address"}],"name": "balanceOf","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "burn","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "account", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "burnFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"name": "chainIds","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "decimals","outputs": [{ "internalType": "uint8", "name": "", "type": "uint8"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "subtractedValue", "type": "uint256"}],"name": "decreaseAllowance","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "addedValue", "type": "uint256"}],"name": "increaseAllowance","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "newBridgeRoleAddress", "type": "address"}],"name": "migrateBridgeRole","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "to", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"},{ "internalType": "address", "name": "feeAddress", "type": "address"},{ "internalType": "uint256", "name": "feeAmount", "type": "uint256"},{ "internalType": "bytes32", "name": "originTxId", "type": "bytes32"}],"name": "mint","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "name","outputs": [{ "internalType": "string", "name": "", "type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "contractAddress", "type": "address"},{ "internalType": "uint256", "name": "supplyDecrement", "type": "uint256"}],"name": "removeSwapToken","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "token", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "swap","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "token", "type": "address"}],"name": "swapSupply","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{ "internalType": "string", "name": "", "type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalSupply","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "recipient", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "transfer","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "sender", "type": "address"},{ "internalType": "address", "name": "recipient", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "transferFrom","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256"},{ "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "unwrap","outputs": [],"stateMutability": "nonpayable","type": "function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: '',//"0x264c1383EA520f73dd837F915ef3a732e204a493", //I have contract but not ABI in explorer
                    ABI: '',
                    contract: null,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "AddSupportedChainId","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "contractAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "supplyIncrement", "type": "uint256"}],"name": "AddSwapToken","type": "event"},{"anonymous": false,"inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address"},{ "indexed": true, "internalType": "address", "name": "spender", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "newBridgeRoleAddress", "type": "address"}],"name": "MigrateBridgeRole","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "to", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},{ "indexed": false, "internalType": "address", "name": "feeAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "feeAmount", "type": "uint256"},{ "indexed": false, "internalType": "bytes32", "name": "originTxId", "type": "bytes32"}],"name": "Mint","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "contractAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "supplyDecrement", "type": "uint256"}],"name": "RemoveSwapToken","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "token", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "Swap","type": "event"},{"anonymous": false,"inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address"},{ "indexed": true, "internalType": "address", "name": "to", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},{ "indexed": false, "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "Unwrap","type": "event"},{"inputs": [{ "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "addSupportedChainId","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "contractAddress", "type": "address"},{ "internalType": "uint256", "name": "supplyIncrement", "type": "uint256"}],"name": "addSwapToken","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "owner", "type": "address"},{ "internalType": "address", "name": "spender", "type": "address"}],"name": "allowance","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "approve","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "account", "type": "address"}],"name": "balanceOf","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "burn","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "account", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "burnFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"name": "chainIds","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "decimals","outputs": [{ "internalType": "uint8", "name": "", "type": "uint8"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "subtractedValue", "type": "uint256"}],"name": "decreaseAllowance","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "addedValue", "type": "uint256"}],"name": "increaseAllowance","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "newBridgeRoleAddress", "type": "address"}],"name": "migrateBridgeRole","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "to", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"},{ "internalType": "address", "name": "feeAddress", "type": "address"},{ "internalType": "uint256", "name": "feeAmount", "type": "uint256"},{ "internalType": "bytes32", "name": "originTxId", "type": "bytes32"}],"name": "mint","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "name","outputs": [{ "internalType": "string", "name": "", "type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "contractAddress", "type": "address"},{ "internalType": "uint256", "name": "supplyDecrement", "type": "uint256"}],"name": "removeSwapToken","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "token", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "swap","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "token", "type": "address"}],"name": "swapSupply","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{ "internalType": "string", "name": "", "type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalSupply","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "recipient", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "transfer","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "sender", "type": "address"},{ "internalType": "address", "name": "recipient", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "transferFrom","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256"},{ "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "unwrap","outputs": [],"stateMutability": "nonpayable","type": "function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs": [],"stateMutability": "nonpayable","type": "constructor"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "AddSupportedChainId","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "contractAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "supplyIncrement", "type": "uint256"}],"name": "AddSwapToken","type": "event"},{"anonymous": false,"inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address"},{ "indexed": true, "internalType": "address", "name": "spender", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],"name": "Approval","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "newBridgeRoleAddress", "type": "address"}],"name": "MigrateBridgeRole","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "to", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},{ "indexed": false, "internalType": "address", "name": "feeAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "feeAmount", "type": "uint256"},{ "indexed": false, "internalType": "bytes32", "name": "originTxId", "type": "bytes32"}],"name": "Mint","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "contractAddress", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "supplyDecrement", "type": "uint256"}],"name": "RemoveSwapToken","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "address", "name": "token", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "Swap","type": "event"},{"anonymous": false,"inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address"},{ "indexed": true, "internalType": "address", "name": "to", "type": "address"},{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"},{ "indexed": false, "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "Unwrap","type": "event"},{"inputs": [{ "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "addSupportedChainId","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "contractAddress", "type": "address"},{ "internalType": "uint256", "name": "supplyIncrement", "type": "uint256"}],"name": "addSwapToken","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "owner", "type": "address"},{ "internalType": "address", "name": "spender", "type": "address"}],"name": "allowance","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "approve","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "account", "type": "address"}],"name": "balanceOf","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "burn","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "account", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "burnFrom","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"name": "chainIds","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "decimals","outputs": [{ "internalType": "uint8", "name": "", "type": "uint8"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "subtractedValue", "type": "uint256"}],"name": "decreaseAllowance","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "spender", "type": "address"},{ "internalType": "uint256", "name": "addedValue", "type": "uint256"}],"name": "increaseAllowance","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "newBridgeRoleAddress", "type": "address"}],"name": "migrateBridgeRole","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "to", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"},{ "internalType": "address", "name": "feeAddress", "type": "address"},{ "internalType": "uint256", "name": "feeAmount", "type": "uint256"},{ "internalType": "bytes32", "name": "originTxId", "type": "bytes32"}],"name": "mint","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "name","outputs": [{ "internalType": "string", "name": "", "type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "contractAddress", "type": "address"},{ "internalType": "uint256", "name": "supplyDecrement", "type": "uint256"}],"name": "removeSwapToken","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "token", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "swap","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "token", "type": "address"}],"name": "swapSupply","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "symbol","outputs": [{ "internalType": "string", "name": "", "type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "totalSupply","outputs": [{ "internalType": "uint256", "name": "", "type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{ "internalType": "address", "name": "recipient", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "transfer","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "address", "name": "sender", "type": "address"},{ "internalType": "address", "name": "recipient", "type": "address"},{ "internalType": "uint256", "name": "amount", "type": "uint256"}],"name": "transferFrom","outputs": [{ "internalType": "bool", "name": "", "type": "bool"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256"},{ "internalType": "uint256", "name": "chainId", "type": "uint256"}],"name": "unwrap","outputs": [],"stateMutability": "nonpayable","type": "function"}]'),
                    contract: null,
                    decimals: 8,
                    token: tabToken.tokenBTC,
                    gouvernent: false //8 don't exist on toWei, i calcul manualy if it number

                },
                {

                    adress: '',//"0x885ca6663E1E19DAD31c1e08D9958a2b8F538D53",//I have contract but not ABI on explorer
                    ABI: '',
                    contract: null,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: '',//"0xd59d8F775330D04c2f3F25A31E925ea4CeD5D950",//I have contract but not ABI on explorer
                    ABI: '',
                    contract: null,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: true

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: 8,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },

                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"chainId","type":"uint256"}],"name":"AddSupportedChainId","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"supplyIncrement","type":"uint256"}],"name":"AddSwapToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newBridgeRoleAddress","type":"address"}],"name":"MigrateBridgeRole","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"feeAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"originTxId","type":"bytes32"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"supplyDecrement","type":"uint256"}],"name":"RemoveSwapToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"chainId","type":"uint256"}],"name":"Unwrap","type":"event"},{"inputs":[{"internalType":"uint256","name":"chainId","type":"uint256"}],"name":"addSupportedChainId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"uint256","name":"supplyIncrement","type":"uint256"}],"name":"addSwapToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"chainIds","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newBridgeRoleAddress","type":"address"}],"name":"migrateBridgeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"feeAddress","type":"address"},{"internalType":"uint256","name":"feeAmount","type":"uint256"},{"internalType":"bytes32","name":"originTxId","type":"bytes32"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"uint256","name":"supplyDecrement","type":"uint256"}],"name":"removeSwapToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"swapSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"chainId","type":"uint256"}],"name":"unwrap","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"chainId","type":"uint256"}],"name":"AddSupportedChainId","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"supplyIncrement","type":"uint256"}],"name":"AddSwapToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newBridgeRoleAddress","type":"address"}],"name":"MigrateBridgeRole","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"feeAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"originTxId","type":"bytes32"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"supplyDecrement","type":"uint256"}],"name":"RemoveSwapToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"chainId","type":"uint256"}],"name":"Unwrap","type":"event"},{"inputs":[{"internalType":"uint256","name":"chainId","type":"uint256"}],"name":"addSupportedChainId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"uint256","name":"supplyIncrement","type":"uint256"}],"name":"addSwapToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"chainIds","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newBridgeRoleAddress","type":"address"}],"name":"migrateBridgeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"feeAddress","type":"address"},{"internalType":"uint256","name":"feeAmount","type":"uint256"},{"internalType":"bytes32","name":"originTxId","type":"bytes32"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"},{"internalType":"uint256","name":"supplyDecrement","type":"uint256"}],"name":"removeSwapToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"swapSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"chainId","type":"uint256"}],"name":"unwrap","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"currentOwner","type":"address"},{"indexed":false,"internalType":"address","name":"pendingOwner","type":"address"}],"name":"NewPendingOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"ProxyOwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"claimProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"impl","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingProxyOwner","outputs":[{"internalType":"address","name":"pendingOwner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyOwner","outputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferProxyOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"implementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []

    }
    ,
    {
        EVM: true,
        networkName: 'Harmony Mainnet',
        symbol: 'ONE',
        label: 'Harmony',
        labelChoose: 'Harmony',
        visible: true,
        rpcUrl: 'https://api.harmony.one',
        explorer: 'https://explorer.harmony.one/',
        blockChainId: 1666600000,
        backgroundBTN: "blue",
        maxGas: web3.utils.toHex(21000),
        maxFeePerGas: '',
        // maxFeePerGas: web3.utils.toHex(10 * 1e9),
        // maxGas: web3.utils.toHex(21000),
        maxGas_Token: web3.utils.toHex(70000), //MM write 76000000
        maxFeePerGas_Token: '',
        // maxFeePerGas_Token: web3.utils.toHex(10 * 1e9),
        // maxGas_Token: web3.utils.toHex(100000),
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_ONE_30x30.png',
        logoDark: 'logo_ONE_30x30.png',
        nativeCurrency: { name: 'Harmony', decimals: 18, symbol: 'ONE' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"internalType":"address","type":"address","name":"_ethTokenAddr"},{"name":"name","type":"string","internalType":"string"},{"internalType":"string","type":"string","name":"symbol"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"payable":false},{"name":"Approval","type":"event","inputs":[{"name":"owner","internalType":"address","type":"address","indexed":true},{"name":"spender","internalType":"address","indexed":true,"type":"address"},{"name":"value","indexed":false,"type":"uint256","internalType":"uint256"}],"anonymous":false},{"name":"MinterAdded","type":"event","inputs":[{"internalType":"address","indexed":true,"name":"account","type":"address"}],"anonymous":false},{"anonymous":false,"name":"MinterRemoved","inputs":[{"indexed":true,"name":"account","internalType":"address","type":"address"}],"type":"event"},{"name":"Transfer","type":"event","inputs":[{"type":"address","indexed":true,"name":"from","internalType":"address"},{"name":"to","internalType":"address","type":"address","indexed":true},{"type":"uint256","indexed":false,"name":"value","internalType":"uint256"}],"anonymous":false},{"type":"function","payable":false,"name":"addMinter","stateMutability":"nonpayable","constant":false,"outputs":[],"inputs":[{"type":"address","internalType":"address","name":"account"}]},{"payable":false,"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"inputs":[{"internalType":"address","name":"owner","type":"address"},{"name":"spender","internalType":"address","type":"address"}],"type":"function","name":"allowance","constant":true,"stateMutability":"view"},{"type":"function","name":"approve","outputs":[{"type":"bool","internalType":"bool","name":""}],"constant":false,"payable":false,"inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}],"stateMutability":"nonpayable"},{"constant":true,"stateMutability":"view","payable":false,"outputs":[{"name":"","internalType":"uint256","type":"uint256"}],"inputs":[{"name":"account","type":"address","internalType":"address"}],"type":"function","name":"balanceOf"},{"payable":false,"name":"burn","inputs":[{"internalType":"uint256","type":"uint256","name":"amount"}],"stateMutability":"nonpayable","constant":false,"type":"function","outputs":[]},{"type":"function","constant":false,"payable":false,"outputs":[],"inputs":[{"internalType":"address","type":"address","name":"account"},{"type":"uint256","internalType":"uint256","name":"amount"}],"name":"burnFrom","stateMutability":"nonpayable"},{"name":"decimals","type":"function","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"view","payable":false,"constant":true},{"type":"function","payable":false,"name":"decreaseAllowance","stateMutability":"nonpayable","constant":false,"inputs":[{"type":"address","internalType":"address","name":"spender"},{"name":"subtractedValue","internalType":"uint256","type":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}]},{"payable":false,"type":"function","stateMutability":"view","outputs":[{"name":"","type":"address","internalType":"address"}],"inputs":[],"name":"ethTokenAddr","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","type":"uint256","name":"addedValue"}],"name":"increaseAllowance","payable":false,"type":"function","outputs":[{"type":"bool","internalType":"bool","name":""}],"constant":false,"stateMutability":"nonpayable"},{"payable":false,"constant":true,"inputs":[{"type":"address","name":"account","internalType":"address"}],"outputs":[{"internalType":"bool","type":"bool","name":""}],"name":"isMinter","stateMutability":"view","type":"function"},{"inputs":[{"type":"address","internalType":"address","name":"account"},{"internalType":"uint256","name":"amount","type":"uint256"}],"constant":false,"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"name":"name","outputs":[{"internalType":"string","type":"string","name":""}],"payable":false,"constant":true,"type":"function","inputs":[],"stateMutability":"view"},{"inputs":[],"name":"renounceMinter","outputs":[],"constant":false,"payable":false,"stateMutability":"nonpayable","type":"function"},{"outputs":[{"type":"string","name":"","internalType":"string"}],"inputs":[],"constant":true,"type":"function","name":"symbol","payable":false,"stateMutability":"view"},{"constant":true,"payable":false,"name":"totalSupply","stateMutability":"view","inputs":[],"outputs":[{"name":"","internalType":"uint256","type":"uint256"}],"type":"function"},{"name":"transfer","constant":false,"type":"function","outputs":[{"name":"","type":"bool","internalType":"bool"}],"inputs":[{"type":"address","name":"recipient","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}],"stateMutability":"nonpayable","payable":false},{"payable":false,"type":"function","name":"transferFrom","constant":false,"stateMutability":"nonpayable","inputs":[{"internalType":"address","name":"sender","type":"address"},{"type":"address","name":"recipient","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"type":"bool","internalType":"bool","name":""}]}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"payable":false,"inputs":[{"name":"_ethTokenAddr","internalType":"address","type":"address"},{"type":"string","internalType":"string","name":"name"},{"type":"string","name":"symbol","internalType":"string"},{"internalType":"uint8","type":"uint8","name":"decimals"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"name":"Approval","type":"event","inputs":[{"type":"address","internalType":"address","indexed":true,"name":"owner"},{"name":"spender","type":"address","internalType":"address","indexed":true},{"indexed":false,"type":"uint256","internalType":"uint256","name":"value"}]},{"inputs":[{"type":"address","indexed":true,"internalType":"address","name":"account"}],"name":"MinterAdded","type":"event","anonymous":false},{"type":"event","inputs":[{"internalType":"address","indexed":true,"type":"address","name":"account"}],"anonymous":false,"name":"MinterRemoved"},{"type":"event","name":"Transfer","inputs":[{"name":"from","indexed":true,"type":"address","internalType":"address"},{"type":"address","internalType":"address","indexed":true,"name":"to"},{"type":"uint256","internalType":"uint256","indexed":false,"name":"value"}],"anonymous":false},{"payable":false,"outputs":[],"name":"addMinter","constant":false,"stateMutability":"nonpayable","type":"function","inputs":[{"internalType":"address","name":"account","type":"address"}]},{"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"inputs":[{"name":"owner","type":"address","internalType":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","payable":false,"name":"allowance","constant":true},{"payable":false,"stateMutability":"nonpayable","inputs":[{"name":"spender","type":"address","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"type":"function","constant":false,"name":"approve","outputs":[{"name":"","type":"bool","internalType":"bool"}]},{"constant":true,"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view","payable":false,"type":"function"},{"outputs":[],"inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"type":"function","name":"burn","payable":false,"stateMutability":"nonpayable","constant":false},{"type":"function","outputs":[],"payable":false,"name":"burnFrom","stateMutability":"nonpayable","constant":false,"inputs":[{"type":"address","name":"account","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}]},{"payable":false,"type":"function","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"inputs":[],"name":"decimals","stateMutability":"view","constant":true},{"stateMutability":"nonpayable","name":"decreaseAllowance","outputs":[{"name":"","internalType":"bool","type":"bool"}],"type":"function","payable":false,"constant":false,"inputs":[{"name":"spender","internalType":"address","type":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","name":"ethTokenAddr","payable":false,"inputs":[],"constant":true,"stateMutability":"view","outputs":[{"name":"","internalType":"address","type":"address"}]},{"constant":false,"payable":false,"type":"function","outputs":[{"internalType":"bool","type":"bool","name":""}],"stateMutability":"nonpayable","name":"increaseAllowance","inputs":[{"internalType":"address","type":"address","name":"spender"},{"name":"addedValue","type":"uint256","internalType":"uint256"}]},{"payable":false,"constant":true,"type":"function","stateMutability":"view","outputs":[{"type":"bool","internalType":"bool","name":""}],"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"isMinter"},{"outputs":[{"internalType":"bool","type":"bool","name":""}],"name":"mint","stateMutability":"nonpayable","payable":false,"constant":false,"type":"function","inputs":[{"name":"account","type":"address","internalType":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}]},{"inputs":[],"payable":false,"outputs":[{"name":"","internalType":"string","type":"string"}],"stateMutability":"view","name":"name","type":"function","constant":true},{"type":"function","inputs":[],"name":"renounceMinter","outputs":[],"constant":false,"payable":false,"stateMutability":"nonpayable"},{"inputs":[],"type":"function","outputs":[{"internalType":"string","type":"string","name":""}],"name":"symbol","constant":true,"payable":false,"stateMutability":"view"},{"type":"function","payable":false,"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"constant":true,"stateMutability":"view","inputs":[],"name":"totalSupply"},{"payable":false,"name":"transfer","outputs":[{"name":"","type":"bool","internalType":"bool"}],"inputs":[{"type":"address","internalType":"address","name":"recipient"},{"name":"amount","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable","type":"function","constant":false},{"inputs":[{"name":"sender","internalType":"address","type":"address"},{"internalType":"address","type":"address","name":"recipient"},{"internalType":"uint256","name":"amount","type":"uint256"}],"constant":false,"name":"transferFrom","payable":false,"stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"payable":false,"inputs":[{"name":"_ethTokenAddr","internalType":"address","type":"address"},{"type":"string","internalType":"string","name":"name"},{"type":"string","name":"symbol","internalType":"string"},{"internalType":"uint8","type":"uint8","name":"decimals"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"name":"Approval","type":"event","inputs":[{"type":"address","internalType":"address","indexed":true,"name":"owner"},{"name":"spender","type":"address","internalType":"address","indexed":true},{"indexed":false,"type":"uint256","internalType":"uint256","name":"value"}]},{"inputs":[{"type":"address","indexed":true,"internalType":"address","name":"account"}],"name":"MinterAdded","type":"event","anonymous":false},{"type":"event","inputs":[{"internalType":"address","indexed":true,"type":"address","name":"account"}],"anonymous":false,"name":"MinterRemoved"},{"type":"event","name":"Transfer","inputs":[{"name":"from","indexed":true,"type":"address","internalType":"address"},{"type":"address","internalType":"address","indexed":true,"name":"to"},{"type":"uint256","internalType":"uint256","indexed":false,"name":"value"}],"anonymous":false},{"payable":false,"outputs":[],"name":"addMinter","constant":false,"stateMutability":"nonpayable","type":"function","inputs":[{"internalType":"address","name":"account","type":"address"}]},{"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"inputs":[{"name":"owner","type":"address","internalType":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","payable":false,"name":"allowance","constant":true},{"payable":false,"stateMutability":"nonpayable","inputs":[{"name":"spender","type":"address","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"type":"function","constant":false,"name":"approve","outputs":[{"name":"","type":"bool","internalType":"bool"}]},{"constant":true,"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view","payable":false,"type":"function"},{"outputs":[],"inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"type":"function","name":"burn","payable":false,"stateMutability":"nonpayable","constant":false},{"type":"function","outputs":[],"payable":false,"name":"burnFrom","stateMutability":"nonpayable","constant":false,"inputs":[{"type":"address","name":"account","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}]},{"payable":false,"type":"function","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"inputs":[],"name":"decimals","stateMutability":"view","constant":true},{"stateMutability":"nonpayable","name":"decreaseAllowance","outputs":[{"name":"","internalType":"bool","type":"bool"}],"type":"function","payable":false,"constant":false,"inputs":[{"name":"spender","internalType":"address","type":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","name":"ethTokenAddr","payable":false,"inputs":[],"constant":true,"stateMutability":"view","outputs":[{"name":"","internalType":"address","type":"address"}]},{"constant":false,"payable":false,"type":"function","outputs":[{"internalType":"bool","type":"bool","name":""}],"stateMutability":"nonpayable","name":"increaseAllowance","inputs":[{"internalType":"address","type":"address","name":"spender"},{"name":"addedValue","type":"uint256","internalType":"uint256"}]},{"payable":false,"constant":true,"type":"function","stateMutability":"view","outputs":[{"type":"bool","internalType":"bool","name":""}],"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"isMinter"},{"outputs":[{"internalType":"bool","type":"bool","name":""}],"name":"mint","stateMutability":"nonpayable","payable":false,"constant":false,"type":"function","inputs":[{"name":"account","type":"address","internalType":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}]},{"inputs":[],"payable":false,"outputs":[{"name":"","internalType":"string","type":"string"}],"stateMutability":"view","name":"name","type":"function","constant":true},{"type":"function","inputs":[],"name":"renounceMinter","outputs":[],"constant":false,"payable":false,"stateMutability":"nonpayable"},{"inputs":[],"type":"function","outputs":[{"internalType":"string","type":"string","name":""}],"name":"symbol","constant":true,"payable":false,"stateMutability":"view"},{"type":"function","payable":false,"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"constant":true,"stateMutability":"view","inputs":[],"name":"totalSupply"},{"payable":false,"name":"transfer","outputs":[{"name":"","type":"bool","internalType":"bool"}],"inputs":[{"type":"address","internalType":"address","name":"recipient"},{"name":"amount","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable","type":"function","constant":false},{"inputs":[{"name":"sender","internalType":"address","type":"address"},{"internalType":"address","type":"address","name":"recipient"},{"internalType":"uint256","name":"amount","type":"uint256"}],"constant":false,"name":"transferFrom","payable":false,"stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"payable":false,"inputs":[{"name":"_ethTokenAddr","internalType":"address","type":"address"},{"type":"string","internalType":"string","name":"name"},{"type":"string","name":"symbol","internalType":"string"},{"internalType":"uint8","type":"uint8","name":"decimals"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"name":"Approval","type":"event","inputs":[{"type":"address","internalType":"address","indexed":true,"name":"owner"},{"name":"spender","type":"address","internalType":"address","indexed":true},{"indexed":false,"type":"uint256","internalType":"uint256","name":"value"}]},{"inputs":[{"type":"address","indexed":true,"internalType":"address","name":"account"}],"name":"MinterAdded","type":"event","anonymous":false},{"type":"event","inputs":[{"internalType":"address","indexed":true,"type":"address","name":"account"}],"anonymous":false,"name":"MinterRemoved"},{"type":"event","name":"Transfer","inputs":[{"name":"from","indexed":true,"type":"address","internalType":"address"},{"type":"address","internalType":"address","indexed":true,"name":"to"},{"type":"uint256","internalType":"uint256","indexed":false,"name":"value"}],"anonymous":false},{"payable":false,"outputs":[],"name":"addMinter","constant":false,"stateMutability":"nonpayable","type":"function","inputs":[{"internalType":"address","name":"account","type":"address"}]},{"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"inputs":[{"name":"owner","type":"address","internalType":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","payable":false,"name":"allowance","constant":true},{"payable":false,"stateMutability":"nonpayable","inputs":[{"name":"spender","type":"address","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"type":"function","constant":false,"name":"approve","outputs":[{"name":"","type":"bool","internalType":"bool"}]},{"constant":true,"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view","payable":false,"type":"function"},{"outputs":[],"inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"type":"function","name":"burn","payable":false,"stateMutability":"nonpayable","constant":false},{"type":"function","outputs":[],"payable":false,"name":"burnFrom","stateMutability":"nonpayable","constant":false,"inputs":[{"type":"address","name":"account","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}]},{"payable":false,"type":"function","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"inputs":[],"name":"decimals","stateMutability":"view","constant":true},{"stateMutability":"nonpayable","name":"decreaseAllowance","outputs":[{"name":"","internalType":"bool","type":"bool"}],"type":"function","payable":false,"constant":false,"inputs":[{"name":"spender","internalType":"address","type":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","name":"ethTokenAddr","payable":false,"inputs":[],"constant":true,"stateMutability":"view","outputs":[{"name":"","internalType":"address","type":"address"}]},{"constant":false,"payable":false,"type":"function","outputs":[{"internalType":"bool","type":"bool","name":""}],"stateMutability":"nonpayable","name":"increaseAllowance","inputs":[{"internalType":"address","type":"address","name":"spender"},{"name":"addedValue","type":"uint256","internalType":"uint256"}]},{"payable":false,"constant":true,"type":"function","stateMutability":"view","outputs":[{"type":"bool","internalType":"bool","name":""}],"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"isMinter"},{"outputs":[{"internalType":"bool","type":"bool","name":""}],"name":"mint","stateMutability":"nonpayable","payable":false,"constant":false,"type":"function","inputs":[{"name":"account","type":"address","internalType":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}]},{"inputs":[],"payable":false,"outputs":[{"name":"","internalType":"string","type":"string"}],"stateMutability":"view","name":"name","type":"function","constant":true},{"type":"function","inputs":[],"name":"renounceMinter","outputs":[],"constant":false,"payable":false,"stateMutability":"nonpayable"},{"inputs":[],"type":"function","outputs":[{"internalType":"string","type":"string","name":""}],"name":"symbol","constant":true,"payable":false,"stateMutability":"view"},{"type":"function","payable":false,"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"constant":true,"stateMutability":"view","inputs":[],"name":"totalSupply"},{"payable":false,"name":"transfer","outputs":[{"name":"","type":"bool","internalType":"bool"}],"inputs":[{"type":"address","internalType":"address","name":"recipient"},{"name":"amount","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable","type":"function","constant":false},{"inputs":[{"name":"sender","internalType":"address","type":"address"},{"internalType":"address","type":"address","name":"recipient"},{"internalType":"uint256","name":"amount","type":"uint256"}],"constant":false,"name":"transferFrom","payable":false,"stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"payable":false,"inputs":[{"name":"_ethTokenAddr","internalType":"address","type":"address"},{"type":"string","internalType":"string","name":"name"},{"type":"string","name":"symbol","internalType":"string"},{"internalType":"uint8","type":"uint8","name":"decimals"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"name":"Approval","type":"event","inputs":[{"type":"address","internalType":"address","indexed":true,"name":"owner"},{"name":"spender","type":"address","internalType":"address","indexed":true},{"indexed":false,"type":"uint256","internalType":"uint256","name":"value"}]},{"inputs":[{"type":"address","indexed":true,"internalType":"address","name":"account"}],"name":"MinterAdded","type":"event","anonymous":false},{"type":"event","inputs":[{"internalType":"address","indexed":true,"type":"address","name":"account"}],"anonymous":false,"name":"MinterRemoved"},{"type":"event","name":"Transfer","inputs":[{"name":"from","indexed":true,"type":"address","internalType":"address"},{"type":"address","internalType":"address","indexed":true,"name":"to"},{"type":"uint256","internalType":"uint256","indexed":false,"name":"value"}],"anonymous":false},{"payable":false,"outputs":[],"name":"addMinter","constant":false,"stateMutability":"nonpayable","type":"function","inputs":[{"internalType":"address","name":"account","type":"address"}]},{"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"inputs":[{"name":"owner","type":"address","internalType":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","payable":false,"name":"allowance","constant":true},{"payable":false,"stateMutability":"nonpayable","inputs":[{"name":"spender","type":"address","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"type":"function","constant":false,"name":"approve","outputs":[{"name":"","type":"bool","internalType":"bool"}]},{"constant":true,"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view","payable":false,"type":"function"},{"outputs":[],"inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"type":"function","name":"burn","payable":false,"stateMutability":"nonpayable","constant":false},{"type":"function","outputs":[],"payable":false,"name":"burnFrom","stateMutability":"nonpayable","constant":false,"inputs":[{"type":"address","name":"account","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}]},{"payable":false,"type":"function","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"inputs":[],"name":"decimals","stateMutability":"view","constant":true},{"stateMutability":"nonpayable","name":"decreaseAllowance","outputs":[{"name":"","internalType":"bool","type":"bool"}],"type":"function","payable":false,"constant":false,"inputs":[{"name":"spender","internalType":"address","type":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","name":"ethTokenAddr","payable":false,"inputs":[],"constant":true,"stateMutability":"view","outputs":[{"name":"","internalType":"address","type":"address"}]},{"constant":false,"payable":false,"type":"function","outputs":[{"internalType":"bool","type":"bool","name":""}],"stateMutability":"nonpayable","name":"increaseAllowance","inputs":[{"internalType":"address","type":"address","name":"spender"},{"name":"addedValue","type":"uint256","internalType":"uint256"}]},{"payable":false,"constant":true,"type":"function","stateMutability":"view","outputs":[{"type":"bool","internalType":"bool","name":""}],"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"isMinter"},{"outputs":[{"internalType":"bool","type":"bool","name":""}],"name":"mint","stateMutability":"nonpayable","payable":false,"constant":false,"type":"function","inputs":[{"name":"account","type":"address","internalType":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}]},{"inputs":[],"payable":false,"outputs":[{"name":"","internalType":"string","type":"string"}],"stateMutability":"view","name":"name","type":"function","constant":true},{"type":"function","inputs":[],"name":"renounceMinter","outputs":[],"constant":false,"payable":false,"stateMutability":"nonpayable"},{"inputs":[],"type":"function","outputs":[{"internalType":"string","type":"string","name":""}],"name":"symbol","constant":true,"payable":false,"stateMutability":"view"},{"type":"function","payable":false,"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"constant":true,"stateMutability":"view","inputs":[],"name":"totalSupply"},{"payable":false,"name":"transfer","outputs":[{"name":"","type":"bool","internalType":"bool"}],"inputs":[{"type":"address","internalType":"address","name":"recipient"},{"name":"amount","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable","type":"function","constant":false},{"inputs":[{"name":"sender","internalType":"address","type":"address"},{"internalType":"address","type":"address","name":"recipient"},{"internalType":"uint256","name":"amount","type":"uint256"}],"constant":false,"name":"transferFrom","payable":false,"stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"payable":false,"inputs":[{"name":"_ethTokenAddr","internalType":"address","type":"address"},{"type":"string","internalType":"string","name":"name"},{"type":"string","name":"symbol","internalType":"string"},{"internalType":"uint8","type":"uint8","name":"decimals"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"name":"Approval","type":"event","inputs":[{"type":"address","internalType":"address","indexed":true,"name":"owner"},{"name":"spender","type":"address","internalType":"address","indexed":true},{"indexed":false,"type":"uint256","internalType":"uint256","name":"value"}]},{"inputs":[{"type":"address","indexed":true,"internalType":"address","name":"account"}],"name":"MinterAdded","type":"event","anonymous":false},{"type":"event","inputs":[{"internalType":"address","indexed":true,"type":"address","name":"account"}],"anonymous":false,"name":"MinterRemoved"},{"type":"event","name":"Transfer","inputs":[{"name":"from","indexed":true,"type":"address","internalType":"address"},{"type":"address","internalType":"address","indexed":true,"name":"to"},{"type":"uint256","internalType":"uint256","indexed":false,"name":"value"}],"anonymous":false},{"payable":false,"outputs":[],"name":"addMinter","constant":false,"stateMutability":"nonpayable","type":"function","inputs":[{"internalType":"address","name":"account","type":"address"}]},{"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"inputs":[{"name":"owner","type":"address","internalType":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","payable":false,"name":"allowance","constant":true},{"payable":false,"stateMutability":"nonpayable","inputs":[{"name":"spender","type":"address","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"type":"function","constant":false,"name":"approve","outputs":[{"name":"","type":"bool","internalType":"bool"}]},{"constant":true,"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view","payable":false,"type":"function"},{"outputs":[],"inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"type":"function","name":"burn","payable":false,"stateMutability":"nonpayable","constant":false},{"type":"function","outputs":[],"payable":false,"name":"burnFrom","stateMutability":"nonpayable","constant":false,"inputs":[{"type":"address","name":"account","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}]},{"payable":false,"type":"function","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"inputs":[],"name":"decimals","stateMutability":"view","constant":true},{"stateMutability":"nonpayable","name":"decreaseAllowance","outputs":[{"name":"","internalType":"bool","type":"bool"}],"type":"function","payable":false,"constant":false,"inputs":[{"name":"spender","internalType":"address","type":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","name":"ethTokenAddr","payable":false,"inputs":[],"constant":true,"stateMutability":"view","outputs":[{"name":"","internalType":"address","type":"address"}]},{"constant":false,"payable":false,"type":"function","outputs":[{"internalType":"bool","type":"bool","name":""}],"stateMutability":"nonpayable","name":"increaseAllowance","inputs":[{"internalType":"address","type":"address","name":"spender"},{"name":"addedValue","type":"uint256","internalType":"uint256"}]},{"payable":false,"constant":true,"type":"function","stateMutability":"view","outputs":[{"type":"bool","internalType":"bool","name":""}],"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"isMinter"},{"outputs":[{"internalType":"bool","type":"bool","name":""}],"name":"mint","stateMutability":"nonpayable","payable":false,"constant":false,"type":"function","inputs":[{"name":"account","type":"address","internalType":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}]},{"inputs":[],"payable":false,"outputs":[{"name":"","internalType":"string","type":"string"}],"stateMutability":"view","name":"name","type":"function","constant":true},{"type":"function","inputs":[],"name":"renounceMinter","outputs":[],"constant":false,"payable":false,"stateMutability":"nonpayable"},{"inputs":[],"type":"function","outputs":[{"internalType":"string","type":"string","name":""}],"name":"symbol","constant":true,"payable":false,"stateMutability":"view"},{"type":"function","payable":false,"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"constant":true,"stateMutability":"view","inputs":[],"name":"totalSupply"},{"payable":false,"name":"transfer","outputs":[{"name":"","type":"bool","internalType":"bool"}],"inputs":[{"type":"address","internalType":"address","name":"recipient"},{"name":"amount","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable","type":"function","constant":false},{"inputs":[{"name":"sender","internalType":"address","type":"address"},{"internalType":"address","type":"address","name":"recipient"},{"internalType":"uint256","name":"amount","type":"uint256"}],"constant":false,"name":"transferFrom","payable":false,"stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function"}]'),
                    contract: null,
                    decimals: 8,
                    token: tabToken.tokenBTC,
                    gouvernent: false //8 don't exist on toWei, i calcul manualy if it number

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"payable":false,"inputs":[{"name":"_ethTokenAddr","internalType":"address","type":"address"},{"type":"string","internalType":"string","name":"name"},{"type":"string","name":"symbol","internalType":"string"},{"internalType":"uint8","type":"uint8","name":"decimals"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"name":"Approval","type":"event","inputs":[{"type":"address","internalType":"address","indexed":true,"name":"owner"},{"name":"spender","type":"address","internalType":"address","indexed":true},{"indexed":false,"type":"uint256","internalType":"uint256","name":"value"}]},{"inputs":[{"type":"address","indexed":true,"internalType":"address","name":"account"}],"name":"MinterAdded","type":"event","anonymous":false},{"type":"event","inputs":[{"internalType":"address","indexed":true,"type":"address","name":"account"}],"anonymous":false,"name":"MinterRemoved"},{"type":"event","name":"Transfer","inputs":[{"name":"from","indexed":true,"type":"address","internalType":"address"},{"type":"address","internalType":"address","indexed":true,"name":"to"},{"type":"uint256","internalType":"uint256","indexed":false,"name":"value"}],"anonymous":false},{"payable":false,"outputs":[],"name":"addMinter","constant":false,"stateMutability":"nonpayable","type":"function","inputs":[{"internalType":"address","name":"account","type":"address"}]},{"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"inputs":[{"name":"owner","type":"address","internalType":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","payable":false,"name":"allowance","constant":true},{"payable":false,"stateMutability":"nonpayable","inputs":[{"name":"spender","type":"address","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"type":"function","constant":false,"name":"approve","outputs":[{"name":"","type":"bool","internalType":"bool"}]},{"constant":true,"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view","payable":false,"type":"function"},{"outputs":[],"inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"type":"function","name":"burn","payable":false,"stateMutability":"nonpayable","constant":false},{"type":"function","outputs":[],"payable":false,"name":"burnFrom","stateMutability":"nonpayable","constant":false,"inputs":[{"type":"address","name":"account","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}]},{"payable":false,"type":"function","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"inputs":[],"name":"decimals","stateMutability":"view","constant":true},{"stateMutability":"nonpayable","name":"decreaseAllowance","outputs":[{"name":"","internalType":"bool","type":"bool"}],"type":"function","payable":false,"constant":false,"inputs":[{"name":"spender","internalType":"address","type":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","name":"ethTokenAddr","payable":false,"inputs":[],"constant":true,"stateMutability":"view","outputs":[{"name":"","internalType":"address","type":"address"}]},{"constant":false,"payable":false,"type":"function","outputs":[{"internalType":"bool","type":"bool","name":""}],"stateMutability":"nonpayable","name":"increaseAllowance","inputs":[{"internalType":"address","type":"address","name":"spender"},{"name":"addedValue","type":"uint256","internalType":"uint256"}]},{"payable":false,"constant":true,"type":"function","stateMutability":"view","outputs":[{"type":"bool","internalType":"bool","name":""}],"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"isMinter"},{"outputs":[{"internalType":"bool","type":"bool","name":""}],"name":"mint","stateMutability":"nonpayable","payable":false,"constant":false,"type":"function","inputs":[{"name":"account","type":"address","internalType":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}]},{"inputs":[],"payable":false,"outputs":[{"name":"","internalType":"string","type":"string"}],"stateMutability":"view","name":"name","type":"function","constant":true},{"type":"function","inputs":[],"name":"renounceMinter","outputs":[],"constant":false,"payable":false,"stateMutability":"nonpayable"},{"inputs":[],"type":"function","outputs":[{"internalType":"string","type":"string","name":""}],"name":"symbol","constant":true,"payable":false,"stateMutability":"view"},{"type":"function","payable":false,"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"constant":true,"stateMutability":"view","inputs":[],"name":"totalSupply"},{"payable":false,"name":"transfer","outputs":[{"name":"","type":"bool","internalType":"bool"}],"inputs":[{"type":"address","internalType":"address","name":"recipient"},{"name":"amount","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable","type":"function","constant":false},{"inputs":[{"name":"sender","internalType":"address","type":"address"},{"internalType":"address","type":"address","name":"recipient"},{"internalType":"uint256","name":"amount","type":"uint256"}],"constant":false,"name":"transferFrom","payable":false,"stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"payable":false,"inputs":[{"name":"_ethTokenAddr","internalType":"address","type":"address"},{"type":"string","internalType":"string","name":"name"},{"type":"string","name":"symbol","internalType":"string"},{"internalType":"uint8","type":"uint8","name":"decimals"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"name":"Approval","type":"event","inputs":[{"type":"address","internalType":"address","indexed":true,"name":"owner"},{"name":"spender","type":"address","internalType":"address","indexed":true},{"indexed":false,"type":"uint256","internalType":"uint256","name":"value"}]},{"inputs":[{"type":"address","indexed":true,"internalType":"address","name":"account"}],"name":"MinterAdded","type":"event","anonymous":false},{"type":"event","inputs":[{"internalType":"address","indexed":true,"type":"address","name":"account"}],"anonymous":false,"name":"MinterRemoved"},{"type":"event","name":"Transfer","inputs":[{"name":"from","indexed":true,"type":"address","internalType":"address"},{"type":"address","internalType":"address","indexed":true,"name":"to"},{"type":"uint256","internalType":"uint256","indexed":false,"name":"value"}],"anonymous":false},{"payable":false,"outputs":[],"name":"addMinter","constant":false,"stateMutability":"nonpayable","type":"function","inputs":[{"internalType":"address","name":"account","type":"address"}]},{"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"inputs":[{"name":"owner","type":"address","internalType":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","payable":false,"name":"allowance","constant":true},{"payable":false,"stateMutability":"nonpayable","inputs":[{"name":"spender","type":"address","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"type":"function","constant":false,"name":"approve","outputs":[{"name":"","type":"bool","internalType":"bool"}]},{"constant":true,"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view","payable":false,"type":"function"},{"outputs":[],"inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"type":"function","name":"burn","payable":false,"stateMutability":"nonpayable","constant":false},{"type":"function","outputs":[],"payable":false,"name":"burnFrom","stateMutability":"nonpayable","constant":false,"inputs":[{"type":"address","name":"account","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}]},{"payable":false,"type":"function","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"inputs":[],"name":"decimals","stateMutability":"view","constant":true},{"stateMutability":"nonpayable","name":"decreaseAllowance","outputs":[{"name":"","internalType":"bool","type":"bool"}],"type":"function","payable":false,"constant":false,"inputs":[{"name":"spender","internalType":"address","type":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","name":"ethTokenAddr","payable":false,"inputs":[],"constant":true,"stateMutability":"view","outputs":[{"name":"","internalType":"address","type":"address"}]},{"constant":false,"payable":false,"type":"function","outputs":[{"internalType":"bool","type":"bool","name":""}],"stateMutability":"nonpayable","name":"increaseAllowance","inputs":[{"internalType":"address","type":"address","name":"spender"},{"name":"addedValue","type":"uint256","internalType":"uint256"}]},{"payable":false,"constant":true,"type":"function","stateMutability":"view","outputs":[{"type":"bool","internalType":"bool","name":""}],"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"isMinter"},{"outputs":[{"internalType":"bool","type":"bool","name":""}],"name":"mint","stateMutability":"nonpayable","payable":false,"constant":false,"type":"function","inputs":[{"name":"account","type":"address","internalType":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}]},{"inputs":[],"payable":false,"outputs":[{"name":"","internalType":"string","type":"string"}],"stateMutability":"view","name":"name","type":"function","constant":true},{"type":"function","inputs":[],"name":"renounceMinter","outputs":[],"constant":false,"payable":false,"stateMutability":"nonpayable"},{"inputs":[],"type":"function","outputs":[{"internalType":"string","type":"string","name":""}],"name":"symbol","constant":true,"payable":false,"stateMutability":"view"},{"type":"function","payable":false,"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"constant":true,"stateMutability":"view","inputs":[],"name":"totalSupply"},{"payable":false,"name":"transfer","outputs":[{"name":"","type":"bool","internalType":"bool"}],"inputs":[{"type":"address","internalType":"address","name":"recipient"},{"name":"amount","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable","type":"function","constant":false},{"inputs":[{"name":"sender","internalType":"address","type":"address"},{"internalType":"address","type":"address","name":"recipient"},{"internalType":"uint256","name":"amount","type":"uint256"}],"constant":false,"name":"transferFrom","payable":false,"stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"payable":false,"inputs":[{"name":"_ethTokenAddr","internalType":"address","type":"address"},{"type":"string","internalType":"string","name":"name"},{"type":"string","name":"symbol","internalType":"string"},{"internalType":"uint8","type":"uint8","name":"decimals"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"name":"Approval","type":"event","inputs":[{"type":"address","internalType":"address","indexed":true,"name":"owner"},{"name":"spender","type":"address","internalType":"address","indexed":true},{"indexed":false,"type":"uint256","internalType":"uint256","name":"value"}]},{"inputs":[{"type":"address","indexed":true,"internalType":"address","name":"account"}],"name":"MinterAdded","type":"event","anonymous":false},{"type":"event","inputs":[{"internalType":"address","indexed":true,"type":"address","name":"account"}],"anonymous":false,"name":"MinterRemoved"},{"type":"event","name":"Transfer","inputs":[{"name":"from","indexed":true,"type":"address","internalType":"address"},{"type":"address","internalType":"address","indexed":true,"name":"to"},{"type":"uint256","internalType":"uint256","indexed":false,"name":"value"}],"anonymous":false},{"payable":false,"outputs":[],"name":"addMinter","constant":false,"stateMutability":"nonpayable","type":"function","inputs":[{"internalType":"address","name":"account","type":"address"}]},{"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"inputs":[{"name":"owner","type":"address","internalType":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","payable":false,"name":"allowance","constant":true},{"payable":false,"stateMutability":"nonpayable","inputs":[{"name":"spender","type":"address","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"type":"function","constant":false,"name":"approve","outputs":[{"name":"","type":"bool","internalType":"bool"}]},{"constant":true,"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view","payable":false,"type":"function"},{"outputs":[],"inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"type":"function","name":"burn","payable":false,"stateMutability":"nonpayable","constant":false},{"type":"function","outputs":[],"payable":false,"name":"burnFrom","stateMutability":"nonpayable","constant":false,"inputs":[{"type":"address","name":"account","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}]},{"payable":false,"type":"function","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"inputs":[],"name":"decimals","stateMutability":"view","constant":true},{"stateMutability":"nonpayable","name":"decreaseAllowance","outputs":[{"name":"","internalType":"bool","type":"bool"}],"type":"function","payable":false,"constant":false,"inputs":[{"name":"spender","internalType":"address","type":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","name":"ethTokenAddr","payable":false,"inputs":[],"constant":true,"stateMutability":"view","outputs":[{"name":"","internalType":"address","type":"address"}]},{"constant":false,"payable":false,"type":"function","outputs":[{"internalType":"bool","type":"bool","name":""}],"stateMutability":"nonpayable","name":"increaseAllowance","inputs":[{"internalType":"address","type":"address","name":"spender"},{"name":"addedValue","type":"uint256","internalType":"uint256"}]},{"payable":false,"constant":true,"type":"function","stateMutability":"view","outputs":[{"type":"bool","internalType":"bool","name":""}],"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"isMinter"},{"outputs":[{"internalType":"bool","type":"bool","name":""}],"name":"mint","stateMutability":"nonpayable","payable":false,"constant":false,"type":"function","inputs":[{"name":"account","type":"address","internalType":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}]},{"inputs":[],"payable":false,"outputs":[{"name":"","internalType":"string","type":"string"}],"stateMutability":"view","name":"name","type":"function","constant":true},{"type":"function","inputs":[],"name":"renounceMinter","outputs":[],"constant":false,"payable":false,"stateMutability":"nonpayable"},{"inputs":[],"type":"function","outputs":[{"internalType":"string","type":"string","name":""}],"name":"symbol","constant":true,"payable":false,"stateMutability":"view"},{"type":"function","payable":false,"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"constant":true,"stateMutability":"view","inputs":[],"name":"totalSupply"},{"payable":false,"name":"transfer","outputs":[{"name":"","type":"bool","internalType":"bool"}],"inputs":[{"type":"address","internalType":"address","name":"recipient"},{"name":"amount","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable","type":"function","constant":false},{"inputs":[{"name":"sender","internalType":"address","type":"address"},{"internalType":"address","type":"address","name":"recipient"},{"internalType":"uint256","name":"amount","type":"uint256"}],"constant":false,"name":"transferFrom","payable":false,"stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"payable":false,"inputs":[{"name":"_ethTokenAddr","internalType":"address","type":"address"},{"type":"string","internalType":"string","name":"name"},{"type":"string","name":"symbol","internalType":"string"},{"internalType":"uint8","type":"uint8","name":"decimals"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"name":"Approval","type":"event","inputs":[{"type":"address","internalType":"address","indexed":true,"name":"owner"},{"name":"spender","type":"address","internalType":"address","indexed":true},{"indexed":false,"type":"uint256","internalType":"uint256","name":"value"}]},{"inputs":[{"type":"address","indexed":true,"internalType":"address","name":"account"}],"name":"MinterAdded","type":"event","anonymous":false},{"type":"event","inputs":[{"internalType":"address","indexed":true,"type":"address","name":"account"}],"anonymous":false,"name":"MinterRemoved"},{"type":"event","name":"Transfer","inputs":[{"name":"from","indexed":true,"type":"address","internalType":"address"},{"type":"address","internalType":"address","indexed":true,"name":"to"},{"type":"uint256","internalType":"uint256","indexed":false,"name":"value"}],"anonymous":false},{"payable":false,"outputs":[],"name":"addMinter","constant":false,"stateMutability":"nonpayable","type":"function","inputs":[{"internalType":"address","name":"account","type":"address"}]},{"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"inputs":[{"name":"owner","type":"address","internalType":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","payable":false,"name":"allowance","constant":true},{"payable":false,"stateMutability":"nonpayable","inputs":[{"name":"spender","type":"address","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"type":"function","constant":false,"name":"approve","outputs":[{"name":"","type":"bool","internalType":"bool"}]},{"constant":true,"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view","payable":false,"type":"function"},{"outputs":[],"inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"type":"function","name":"burn","payable":false,"stateMutability":"nonpayable","constant":false},{"type":"function","outputs":[],"payable":false,"name":"burnFrom","stateMutability":"nonpayable","constant":false,"inputs":[{"type":"address","name":"account","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}]},{"payable":false,"type":"function","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"inputs":[],"name":"decimals","stateMutability":"view","constant":true},{"stateMutability":"nonpayable","name":"decreaseAllowance","outputs":[{"name":"","internalType":"bool","type":"bool"}],"type":"function","payable":false,"constant":false,"inputs":[{"name":"spender","internalType":"address","type":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","name":"ethTokenAddr","payable":false,"inputs":[],"constant":true,"stateMutability":"view","outputs":[{"name":"","internalType":"address","type":"address"}]},{"constant":false,"payable":false,"type":"function","outputs":[{"internalType":"bool","type":"bool","name":""}],"stateMutability":"nonpayable","name":"increaseAllowance","inputs":[{"internalType":"address","type":"address","name":"spender"},{"name":"addedValue","type":"uint256","internalType":"uint256"}]},{"payable":false,"constant":true,"type":"function","stateMutability":"view","outputs":[{"type":"bool","internalType":"bool","name":""}],"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"isMinter"},{"outputs":[{"internalType":"bool","type":"bool","name":""}],"name":"mint","stateMutability":"nonpayable","payable":false,"constant":false,"type":"function","inputs":[{"name":"account","type":"address","internalType":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}]},{"inputs":[],"payable":false,"outputs":[{"name":"","internalType":"string","type":"string"}],"stateMutability":"view","name":"name","type":"function","constant":true},{"type":"function","inputs":[],"name":"renounceMinter","outputs":[],"constant":false,"payable":false,"stateMutability":"nonpayable"},{"inputs":[],"type":"function","outputs":[{"internalType":"string","type":"string","name":""}],"name":"symbol","constant":true,"payable":false,"stateMutability":"view"},{"type":"function","payable":false,"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"constant":true,"stateMutability":"view","inputs":[],"name":"totalSupply"},{"payable":false,"name":"transfer","outputs":[{"name":"","type":"bool","internalType":"bool"}],"inputs":[{"type":"address","internalType":"address","name":"recipient"},{"name":"amount","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable","type":"function","constant":false},{"inputs":[{"name":"sender","internalType":"address","type":"address"},{"internalType":"address","type":"address","name":"recipient"},{"internalType":"uint256","name":"amount","type":"uint256"}],"constant":false,"name":"transferFrom","payable":false,"stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function"}]'),
                    contract: null,
                    decimals: 8,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"type":"event","name":"Approval","anonymous":false,"inputs":[{"internalType":"address","name":"src","indexed":true,"type":"address"},{"name":"guy","internalType":"address","indexed":true,"type":"address"},{"type":"uint256","indexed":false,"name":"wad","internalType":"uint256"}]},{"name":"Deposit","type":"event","anonymous":false,"inputs":[{"name":"dst","internalType":"address","type":"address","indexed":true},{"internalType":"uint256","name":"wad","type":"uint256","indexed":false}]},{"anonymous":false,"inputs":[{"name":"src","internalType":"address","type":"address","indexed":true},{"indexed":true,"type":"address","internalType":"address","name":"dst"},{"name":"wad","indexed":false,"internalType":"uint256","type":"uint256"}],"name":"Transfer","type":"event"},{"name":"Withdrawal","inputs":[{"type":"address","indexed":true,"internalType":"address","name":"src"},{"type":"uint256","internalType":"uint256","name":"wad","indexed":false}],"type":"event","anonymous":false},{"inputs":[{"name":"","internalType":"address","type":"address"},{"type":"address","internalType":"address","name":""}],"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"type":"function","stateMutability":"view","name":"allowance"},{"name":"balanceOf","outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"inputs":[{"type":"address","name":"","internalType":"address"}],"type":"function","stateMutability":"view"},{"inputs":[],"name":"decimals","stateMutability":"view","outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"type":"function"},{"inputs":[],"name":"name","type":"function","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view"},{"stateMutability":"view","inputs":[],"outputs":[{"internalType":"string","name":"","type":"string"}],"name":"symbol","type":"function"},{"type":"receive","stateMutability":"payable"},{"stateMutability":"payable","name":"deposit","type":"function","outputs":[],"inputs":[]},{"stateMutability":"nonpayable","name":"withdraw","type":"function","inputs":[{"name":"wad","type":"uint256","internalType":"uint256"}],"outputs":[]},{"name":"totalSupply","outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"type":"function","inputs":[],"stateMutability":"view"},{"type":"function","outputs":[{"name":"","internalType":"bool","type":"bool"}],"name":"approve","stateMutability":"nonpayable","inputs":[{"name":"guy","type":"address","internalType":"address"},{"internalType":"uint256","type":"uint256","name":"wad"}]},{"type":"function","outputs":[{"internalType":"bool","name":"","type":"bool"}],"inputs":[{"type":"address","name":"dst","internalType":"address"},{"type":"uint256","name":"wad","internalType":"uint256"}],"name":"transfer","stateMutability":"nonpayable"},{"stateMutability":"nonpayable","inputs":[{"internalType":"address","type":"address","name":"src"},{"internalType":"address","type":"address","name":"dst"},{"name":"wad","internalType":"uint256","type":"uint256"}],"type":"function","outputs":[{"internalType":"bool","name":"","type":"bool"}],"name":"transferFrom"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: true

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },

                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"type":"string","internalType":"string","name":"_name"},{"name":"_symbol","type":"string","internalType":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"address","name":"_underlying","type":"address"},{"type":"address","name":"_vault","internalType":"address"}],"type":"constructor","stateMutability":"nonpayable"},{"name":"Approval","anonymous":false,"inputs":[{"name":"owner","internalType":"address","type":"address","indexed":true},{"name":"spender","internalType":"address","type":"address","indexed":true},{"internalType":"uint256","name":"value","indexed":false,"type":"uint256"}],"type":"event"},{"anonymous":false,"name":"LogAddAuth","type":"event","inputs":[{"name":"auth","type":"address","internalType":"address","indexed":true},{"type":"uint256","name":"timestamp","indexed":false,"internalType":"uint256"}]},{"anonymous":false,"type":"event","inputs":[{"indexed":true,"name":"oldOwner","internalType":"address","type":"address"},{"name":"newOwner","indexed":true,"type":"address","internalType":"address"},{"name":"effectiveHeight","type":"uint256","internalType":"uint256","indexed":true}],"name":"LogChangeMPCOwner"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldVault","type":"address","internalType":"address"},{"indexed":true,"name":"newVault","internalType":"address","type":"address"},{"indexed":true,"type":"uint256","internalType":"uint256","name":"effectiveTime"}],"type":"event","name":"LogChangeVault"},{"name":"LogSwapin","inputs":[{"type":"bytes32","internalType":"bytes32","name":"txhash","indexed":true},{"indexed":true,"internalType":"address","type":"address","name":"account"},{"type":"uint256","name":"amount","indexed":false,"internalType":"uint256"}],"anonymous":false,"type":"event"},{"anonymous":false,"inputs":[{"name":"account","internalType":"address","type":"address","indexed":true},{"indexed":true,"internalType":"address","name":"bindaddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"type":"event","name":"LogSwapout"},{"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"internalType":"address","type":"address","indexed":true,"name":"to"},{"type":"uint256","indexed":false,"name":"value","internalType":"uint256"}],"anonymous":false,"name":"Transfer","type":"event"},{"stateMutability":"view","inputs":[],"outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"DOMAIN_SEPARATOR","type":"function"},{"inputs":[],"stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"PERMIT_TYPEHASH","type":"function"},{"type":"function","outputs":[{"type":"bytes32","internalType":"bytes32","name":""}],"stateMutability":"view","inputs":[],"name":"TRANSFER_TYPEHASH"},{"type":"function","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"stateMutability":"view","name":"allowance","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","internalType":"address","type":"address"}]},{"inputs":[{"name":"","type":"address","internalType":"address"}],"name":"balanceOf","type":"function","stateMutability":"view","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"name":"decimals","type":"function","inputs":[],"stateMutability":"view","outputs":[{"name":"","type":"uint8","internalType":"uint8"}]},{"name":"delay","inputs":[],"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"name":"delayDelay","stateMutability":"view","type":"function","inputs":[],"outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","name":"delayMinter","type":"function","inputs":[]},{"name":"delayVault","type":"function","inputs":[],"stateMutability":"view","outputs":[{"name":"","internalType":"uint256","type":"uint256"}]},{"name":"isMinter","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function","inputs":[{"type":"address","internalType":"address","name":""}]},{"inputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"minters","type":"function","outputs":[{"name":"","internalType":"address","type":"address"}],"stateMutability":"view"},{"type":"function","name":"name","stateMutability":"view","outputs":[{"name":"","internalType":"string","type":"string"}],"inputs":[]},{"name":"nonces","outputs":[{"internalType":"uint256","type":"uint256","name":""}],"type":"function","inputs":[{"name":"","internalType":"address","type":"address"}],"stateMutability":"view"},{"type":"function","stateMutability":"view","name":"pendingDelay","inputs":[],"outputs":[{"name":"","internalType":"uint256","type":"uint256"}]},{"name":"pendingMinter","outputs":[{"type":"address","internalType":"address","name":""}],"stateMutability":"view","inputs":[],"type":"function"},{"name":"pendingVault","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"view","outputs":[{"internalType":"string","name":"","type":"string"}],"type":"function","inputs":[],"name":"symbol"},{"type":"function","stateMutability":"view","name":"underlying","outputs":[{"internalType":"address","type":"address","name":""}],"inputs":[]},{"stateMutability":"view","inputs":[],"name":"vault","type":"function","outputs":[{"type":"address","name":"","internalType":"address"}]},{"name":"owner","type":"function","inputs":[],"stateMutability":"view","outputs":[{"internalType":"address","type":"address","name":""}]},{"name":"mpc","outputs":[{"internalType":"address","type":"address","name":""}],"inputs":[],"type":"function","stateMutability":"view"},{"name":"setVaultOnly","inputs":[{"type":"bool","name":"enabled","internalType":"bool"}],"outputs":[],"type":"function","stateMutability":"nonpayable"},{"name":"initVault","type":"function","inputs":[{"internalType":"address","name":"_vault","type":"address"}],"stateMutability":"nonpayable","outputs":[]},{"inputs":[{"internalType":"address","name":"_auth","type":"address"}],"name":"setMinter","type":"function","outputs":[],"stateMutability":"nonpayable"},{"inputs":[{"type":"address","name":"_vault","internalType":"address"}],"name":"setVault","type":"function","stateMutability":"nonpayable","outputs":[]},{"name":"applyVault","type":"function","stateMutability":"nonpayable","inputs":[],"outputs":[]},{"stateMutability":"nonpayable","name":"applyMinter","type":"function","inputs":[],"outputs":[]},{"type":"function","stateMutability":"nonpayable","name":"revokeMinter","inputs":[{"internalType":"address","type":"address","name":"_auth"}],"outputs":[]},{"name":"getAllMinters","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","inputs":[]},{"inputs":[{"type":"address","internalType":"address","name":"newVault"}],"outputs":[{"internalType":"bool","name":"","type":"bool"}],"type":"function","stateMutability":"nonpayable","name":"changeVault"},{"stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function","name":"changeMPCOwner","inputs":[{"internalType":"address","name":"newVault","type":"address"}]},{"stateMutability":"nonpayable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","type":"function"},{"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"burn","type":"function","stateMutability":"nonpayable","inputs":[{"internalType":"address","name":"from","type":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"stateMutability":"nonpayable","name":"Swapin","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function","inputs":[{"type":"bytes32","name":"txhash","internalType":"bytes32"},{"internalType":"address","name":"account","type":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"name":"Swapout","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"internalType":"address","type":"address","name":"bindaddr"}],"outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function","stateMutability":"nonpayable"},{"outputs":[{"type":"uint256","internalType":"uint256","name":""}],"stateMutability":"view","name":"totalSupply","inputs":[],"type":"function"},{"type":"function","inputs":[{"name":"target","internalType":"address","type":"address"},{"name":"value","type":"uint256","internalType":"uint256"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","internalType":"bytes32","name":"r"},{"name":"s","type":"bytes32","internalType":"bytes32"},{"type":"address","internalType":"address","name":"to"}],"name":"depositWithPermit","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"inputs":[{"name":"target","internalType":"address","type":"address"},{"name":"value","type":"uint256","internalType":"uint256"},{"name":"deadline","type":"uint256","internalType":"uint256"},{"name":"v","type":"uint8","internalType":"uint8"},{"type":"bytes32","internalType":"bytes32","name":"r"},{"type":"bytes32","internalType":"bytes32","name":"s"},{"internalType":"address","name":"to","type":"address"}],"type":"function","name":"depositWithTransferPermit","stateMutability":"nonpayable"},{"outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deposit","type":"function","stateMutability":"nonpayable","inputs":[{"name":"amount","type":"uint256","internalType":"uint256"},{"name":"to","type":"address","internalType":"address"}]},{"inputs":[{"type":"uint256","internalType":"uint256","name":"amount"}],"outputs":[{"name":"","internalType":"uint256","type":"uint256"}],"name":"deposit","type":"function","stateMutability":"nonpayable"},{"stateMutability":"nonpayable","inputs":[],"name":"deposit","type":"function","outputs":[{"type":"uint256","internalType":"uint256","name":""}]},{"outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"depositVault","inputs":[{"type":"uint256","internalType":"uint256","name":"amount"},{"name":"to","internalType":"address","type":"address"}],"type":"function","stateMutability":"nonpayable"},{"stateMutability":"nonpayable","outputs":[{"internalType":"uint256","type":"uint256","name":""}],"inputs":[{"name":"amount","internalType":"uint256","type":"uint256"},{"name":"to","type":"address","internalType":"address"}],"name":"withdraw","type":"function"},{"stateMutability":"nonpayable","type":"function","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"withdraw","inputs":[{"name":"amount","internalType":"uint256","type":"uint256"}]},{"type":"function","name":"withdraw","outputs":[{"internalType":"uint256","type":"uint256","name":""}],"stateMutability":"nonpayable","inputs":[]},{"inputs":[{"internalType":"address","type":"address","name":"from"},{"name":"amount","internalType":"uint256","type":"uint256"},{"internalType":"address","type":"address","name":"to"}],"name":"withdrawVault","type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","internalType":"uint256","name":""}]},{"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","type":"function","inputs":[{"name":"spender","internalType":"address","type":"address"},{"type":"uint256","internalType":"uint256","name":"value"}],"stateMutability":"nonpayable"},{"stateMutability":"nonpayable","inputs":[{"name":"spender","internalType":"address","type":"address"},{"type":"uint256","name":"value","internalType":"uint256"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[{"internalType":"bool","type":"bool","name":""}],"name":"approveAndCall","type":"function"},{"stateMutability":"nonpayable","type":"function","inputs":[{"internalType":"address","name":"target","type":"address"},{"name":"spender","type":"address","internalType":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"name":"deadline","internalType":"uint256","type":"uint256"},{"name":"v","type":"uint8","internalType":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[]},{"stateMutability":"nonpayable","type":"function","name":"transferWithPermit","inputs":[{"type":"address","name":"target","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"},{"name":"deadline","type":"uint256","internalType":"uint256"},{"name":"v","type":"uint8","internalType":"uint8"},{"name":"r","type":"bytes32","internalType":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"outputs":[{"type":"bool","internalType":"bool","name":""}]},{"outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"type":"function","stateMutability":"nonpayable"},{"name":"transferFrom","type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","internalType":"bool","name":""}],"inputs":[{"internalType":"address","name":"from","type":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"value","internalType":"uint256","type":"uint256"}]},{"type":"function","name":"transferAndCall","inputs":[{"name":"to","internalType":"address","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}]}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"payable":false,"inputs":[{"type":"address","internalType":"address","name":"_ethTokenAddr"},{"name":"name","type":"string","internalType":"string"},{"name":"symbol","type":"string","internalType":"string"},{"type":"uint8","internalType":"uint8","name":"decimals"}],"stateMutability":"nonpayable","type":"constructor"},{"type":"event","name":"Approval","inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"name":"spender","internalType":"address","type":"address"},{"indexed":false,"internalType":"uint256","type":"uint256","name":"value"}],"anonymous":false},{"name":"MinterAdded","type":"event","inputs":[{"name":"account","indexed":true,"type":"address","internalType":"address"}],"anonymous":false},{"type":"event","anonymous":false,"name":"MinterRemoved","inputs":[{"type":"address","internalType":"address","indexed":true,"name":"account"}]},{"inputs":[{"name":"from","internalType":"address","indexed":true,"type":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"indexed":false,"type":"uint256","internalType":"uint256","name":"value"}],"name":"Transfer","anonymous":false,"type":"event"},{"name":"addMinter","inputs":[{"name":"account","internalType":"address","type":"address"}],"outputs":[],"stateMutability":"nonpayable","payable":false,"constant":false,"type":"function"},{"constant":true,"name":"allowance","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"type":"function","payable":false,"stateMutability":"view","inputs":[{"internalType":"address","name":"owner","type":"address"},{"type":"address","internalType":"address","name":"spender"}]},{"name":"approve","outputs":[{"type":"bool","name":"","internalType":"bool"}],"inputs":[{"name":"spender","internalType":"address","type":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"payable":false,"constant":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"inputs":[{"name":"account","type":"address","internalType":"address"}],"type":"function","stateMutability":"view","name":"balanceOf","payable":false},{"name":"burn","type":"function","constant":false,"inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"payable":false,"stateMutability":"nonpayable"},{"type":"function","payable":false,"inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}],"stateMutability":"nonpayable","name":"burnFrom","constant":false,"outputs":[]},{"name":"decimals","outputs":[{"name":"","internalType":"uint8","type":"uint8"}],"inputs":[],"type":"function","stateMutability":"view","constant":true,"payable":false},{"type":"function","constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"payable":false,"stateMutability":"nonpayable","name":"decreaseAllowance"},{"inputs":[],"name":"ethTokenAddr","outputs":[{"name":"","type":"address","internalType":"address"}],"payable":false,"constant":true,"type":"function","stateMutability":"view"},{"name":"increaseAllowance","type":"function","stateMutability":"nonpayable","outputs":[{"name":"","type":"bool","internalType":"bool"}],"inputs":[{"type":"address","internalType":"address","name":"spender"},{"name":"addedValue","type":"uint256","internalType":"uint256"}],"constant":false,"payable":false},{"name":"isMinter","inputs":[{"internalType":"address","name":"account","type":"address"}],"payable":false,"type":"function","stateMutability":"view","constant":true,"outputs":[{"name":"","type":"bool","internalType":"bool"}]},{"outputs":[{"internalType":"bool","name":"","type":"bool"}],"type":"function","name":"mint","payable":false,"constant":false,"stateMutability":"nonpayable","inputs":[{"name":"account","internalType":"address","type":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"name":"name","outputs":[{"type":"string","name":"","internalType":"string"}],"constant":true,"inputs":[],"payable":false,"type":"function","stateMutability":"view"},{"type":"function","stateMutability":"nonpayable","payable":false,"name":"renounceMinter","inputs":[],"constant":false,"outputs":[]},{"outputs":[{"type":"string","internalType":"string","name":""}],"payable":false,"constant":true,"stateMutability":"view","name":"symbol","inputs":[],"type":"function"},{"payable":false,"name":"totalSupply","outputs":[{"name":"","internalType":"uint256","type":"uint256"}],"stateMutability":"view","constant":true,"inputs":[],"type":"function"},{"inputs":[{"type":"address","name":"recipient","internalType":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"nonpayable","constant":false,"payable":false,"name":"transfer","outputs":[{"name":"","type":"bool","internalType":"bool"}],"type":"function"},{"payable":false,"type":"function","inputs":[{"internalType":"address","name":"sender","type":"address"},{"name":"recipient","internalType":"address","type":"address"},{"internalType":"uint256","type":"uint256","name":"amount"}],"name":"transferFrom","constant":false,"stateMutability":"nonpayable","outputs":[{"type":"bool","internalType":"bool","name":""}]}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"payable":false,"inputs":[{"name":"_ethTokenAddr","internalType":"address","type":"address"},{"type":"string","internalType":"string","name":"name"},{"type":"string","name":"symbol","internalType":"string"},{"internalType":"uint8","type":"uint8","name":"decimals"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"name":"Approval","type":"event","inputs":[{"type":"address","internalType":"address","indexed":true,"name":"owner"},{"name":"spender","type":"address","internalType":"address","indexed":true},{"indexed":false,"type":"uint256","internalType":"uint256","name":"value"}]},{"inputs":[{"type":"address","indexed":true,"internalType":"address","name":"account"}],"name":"MinterAdded","type":"event","anonymous":false},{"type":"event","inputs":[{"internalType":"address","indexed":true,"type":"address","name":"account"}],"anonymous":false,"name":"MinterRemoved"},{"type":"event","name":"Transfer","inputs":[{"name":"from","indexed":true,"type":"address","internalType":"address"},{"type":"address","internalType":"address","indexed":true,"name":"to"},{"type":"uint256","internalType":"uint256","indexed":false,"name":"value"}],"anonymous":false},{"payable":false,"outputs":[],"name":"addMinter","constant":false,"stateMutability":"nonpayable","type":"function","inputs":[{"internalType":"address","name":"account","type":"address"}]},{"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"inputs":[{"name":"owner","type":"address","internalType":"address"},{"internalType":"address","name":"spender","type":"address"}],"stateMutability":"view","type":"function","payable":false,"name":"allowance","constant":true},{"payable":false,"stateMutability":"nonpayable","inputs":[{"name":"spender","type":"address","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}],"type":"function","constant":false,"name":"approve","outputs":[{"name":"","type":"bool","internalType":"bool"}]},{"constant":true,"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view","payable":false,"type":"function"},{"outputs":[],"inputs":[{"name":"amount","type":"uint256","internalType":"uint256"}],"type":"function","name":"burn","payable":false,"stateMutability":"nonpayable","constant":false},{"type":"function","outputs":[],"payable":false,"name":"burnFrom","stateMutability":"nonpayable","constant":false,"inputs":[{"type":"address","name":"account","internalType":"address"},{"name":"amount","internalType":"uint256","type":"uint256"}]},{"payable":false,"type":"function","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"inputs":[],"name":"decimals","stateMutability":"view","constant":true},{"stateMutability":"nonpayable","name":"decreaseAllowance","outputs":[{"name":"","internalType":"bool","type":"bool"}],"type":"function","payable":false,"constant":false,"inputs":[{"name":"spender","internalType":"address","type":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","name":"ethTokenAddr","payable":false,"inputs":[],"constant":true,"stateMutability":"view","outputs":[{"name":"","internalType":"address","type":"address"}]},{"constant":false,"payable":false,"type":"function","outputs":[{"internalType":"bool","type":"bool","name":""}],"stateMutability":"nonpayable","name":"increaseAllowance","inputs":[{"internalType":"address","type":"address","name":"spender"},{"name":"addedValue","type":"uint256","internalType":"uint256"}]},{"payable":false,"constant":true,"type":"function","stateMutability":"view","outputs":[{"type":"bool","internalType":"bool","name":""}],"inputs":[{"type":"address","internalType":"address","name":"account"}],"name":"isMinter"},{"outputs":[{"internalType":"bool","type":"bool","name":""}],"name":"mint","stateMutability":"nonpayable","payable":false,"constant":false,"type":"function","inputs":[{"name":"account","type":"address","internalType":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}]},{"inputs":[],"payable":false,"outputs":[{"name":"","internalType":"string","type":"string"}],"stateMutability":"view","name":"name","type":"function","constant":true},{"type":"function","inputs":[],"name":"renounceMinter","outputs":[],"constant":false,"payable":false,"stateMutability":"nonpayable"},{"inputs":[],"type":"function","outputs":[{"internalType":"string","type":"string","name":""}],"name":"symbol","constant":true,"payable":false,"stateMutability":"view"},{"type":"function","payable":false,"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"constant":true,"stateMutability":"view","inputs":[],"name":"totalSupply"},{"payable":false,"name":"transfer","outputs":[{"name":"","type":"bool","internalType":"bool"}],"inputs":[{"type":"address","internalType":"address","name":"recipient"},{"name":"amount","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable","type":"function","constant":false},{"inputs":[{"name":"sender","internalType":"address","type":"address"},{"internalType":"address","type":"address","name":"recipient"},{"internalType":"uint256","name":"amount","type":"uint256"}],"constant":false,"name":"transferFrom","payable":false,"stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"type":"function"}]'),
                    contract: null, //ABI OF USDT WHERE WEBSITE DONT WORK
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    }
    ,
    {
        EVM: true,
        networkName: 'Velas Chain',
        symbol: 'VLX',
        label: 'Velas',
        labelChoose: 'Velas',
        visible: true,
        rpcUrl: 'https://evmexplorer.velas.com/rpc',
        explorer: 'https://evmexplorer.velas.com/',
        blockChainId: 106,
        backgroundBTN: "blue",
        //maxFeePerGas: web3.utils.toHex(3 * 1e9),
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000), //MM write 285000000 ...
        maxFeePerGas_Token: '',
        //maxFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        maxGas_Token: web3.utils.toHex(102760), ///MM write 285000000 ...
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_VLX_30x30.png', //logo_VLX.png
        logoDark: 'logo_VLX_WHITE_30x30.png', //logo_VLX.png
        nativeCurrency: { name: 'Velas', decimals: 18, symbol: 'VLX' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{\"constant\":true,\"inputs\":[],\"name\":\"mintingFinished\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_bridgeContract\",\"type\":\"address\"}],\"name\":\"setBridgeContract\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"},{\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"transferAndCall\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseApproval\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_token\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"claimTokens\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"isBridge\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finishMinting\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTokenInterfacesVersion\",\"outputs\":[{\"name\":\"major\",\"type\":\"uint64\"},{\"name\":\"minor\",\"type\":\"uint64\"},{\"name\":\"patch\",\"type\":\"uint64\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"bridgeContract\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseApproval\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_name\",\"type\":\"string\"},{\"name\":\"_symbol\",\"type\":\"string\"},{\"name\":\"_decimals\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"MintFinished\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"}],\"name\":\"OwnershipRenounced\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"burner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Burn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{\"constant\":true,\"inputs\":[],\"name\":\"mintingFinished\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_bridgeContract\",\"type\":\"address\"}],\"name\":\"setBridgeContract\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"},{\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"transferAndCall\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseApproval\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_token\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"claimTokens\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"isBridge\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finishMinting\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTokenInterfacesVersion\",\"outputs\":[{\"name\":\"major\",\"type\":\"uint64\"},{\"name\":\"minor\",\"type\":\"uint64\"},{\"name\":\"patch\",\"type\":\"uint64\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"bridgeContract\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseApproval\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_name\",\"type\":\"string\"},{\"name\":\"_symbol\",\"type\":\"string\"},{\"name\":\"_decimals\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"MintFinished\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"}],\"name\":\"OwnershipRenounced\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"burner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Burn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{\"constant\":true,\"inputs\":[],\"name\":\"mintingFinished\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_bridgeContract\",\"type\":\"address\"}],\"name\":\"setBridgeContract\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"},{\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"transferAndCall\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseApproval\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_token\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"claimTokens\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"isBridge\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finishMinting\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTokenInterfacesVersion\",\"outputs\":[{\"name\":\"major\",\"type\":\"uint64\"},{\"name\":\"minor\",\"type\":\"uint64\"},{\"name\":\"patch\",\"type\":\"uint64\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"bridgeContract\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseApproval\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_name\",\"type\":\"string\"},{\"name\":\"_symbol\",\"type\":\"string\"},{\"name\":\"_decimals\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"MintFinished\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"}],\"name\":\"OwnershipRenounced\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"burner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Burn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{\"constant\":true,\"inputs\":[],\"name\":\"mintingFinished\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_bridgeContract\",\"type\":\"address\"}],\"name\":\"setBridgeContract\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"},{\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"transferAndCall\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseApproval\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_token\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"claimTokens\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"isBridge\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"finishMinting\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTokenInterfacesVersion\",\"outputs\":[{\"name\":\"major\",\"type\":\"uint64\"},{\"name\":\"minor\",\"type\":\"uint64\"},{\"name\":\"patch\",\"type\":\"uint64\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"bridgeContract\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_spender\",\"type\":\"address\"},{\"name\":\"_addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseApproval\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"},{\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_name\",\"type\":\"string\"},{\"name\":\"_symbol\",\"type\":\"string\"},{\"name\":\"_decimals\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"MintFinished\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"}],\"name\":\"OwnershipRenounced\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"burner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Burn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },

                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {
                    //Wrapped
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"src\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"guy\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"dst\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"src\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"dst\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"src\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"Withdrawal\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"guy\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"dst\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"src\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"dst\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: true

                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    }
    ,
    {
        EVM: true,
        networkName: 'Arbitrum One',
        symbol: 'AETH',
        label: 'Arbitrum',
        labelChoose: 'Arbitrum',
        visible: true,
        rpcUrl: 'https://arb1.arbitrum.io/rpc',
        explorer: 'https://arbiscan.io/',
        blockChainId: 42161,
        backgroundBTN: "blue",
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000),
        maxFeePerGas_Token: '',
        maxGas_Token: web3.utils.toHex(100000),
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_ARBITRUM_30x30.png',
        logoDark: 'logo_ARBITRUM_30x30.png',
        nativeCurrency: { name: 'Arbitrum', decimals: 18, symbol: 'AETH' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs": [{"internalType": "address","name": "_logic","type": "address"},{"internalType": "address","name": "admin_","type": "address"},{"internalType": "bytes","name": "_data","type": "bytes"}],"stateMutability": "payable","type": "constructor"},{"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "previousAdmin","type": "address"},{"indexed": false,"internalType": "address","name": "newAdmin","type": "address"}],"name": "AdminChanged","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "implementation","type": "address"}],"name": "Upgraded","type": "event"},{"stateMutability": "payable","type": "fallback"},{"inputs": [],"name": "admin","outputs": [{"internalType": "address","name": "admin_","type": "address"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newAdmin","type": "address"}],"name": "changeAdmin","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [],"name": "implementation","outputs": [{"internalType": "address","name": "implementation_","type": "address"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newImplementation","type": "address"}],"name": "upgradeTo","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newImplementation","type": "address"},{"internalType": "bytes","name": "data","type": "bytes"}],"name": "upgradeToAndCall","outputs": [],"stateMutability": "payable","type": "function"},{"stateMutability": "payable","type": "receive"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"address","name":"_logic","type":"address"},{"internalType":"address","name":"admin_","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"admin_","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"implementation_","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: true

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",//contract source code not verified
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: 0,
                    token: tabToken.tokenBTC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"usr","type":"address"}],"name":"Deny","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"usr","type":"address"}],"name":"Rely","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"deny","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deploymentChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"rely","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", //0x4d15a3a2286d883af0aa1b3f21367843fac63e07 Ok ABI not dispo and 3 holders on scan ...
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    },
    {
        EVM: true,
        networkName: 'Moonriver',
        symbol: 'MOVR',
        label: 'Moonriver',
        labelChoose: 'Moonriver',
        visible: true,
        rpcUrl: 'https://rpc.moonriver.moonbeam.network',
        explorer: 'https://blockscout.moonriver.moonbeam.network/',
        blockChainId: 1285,
        backgroundBTN: "blue",
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000),
        maxFeePerGas_Token: '',
        maxGas_Token: web3.utils.toHex(100000),
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_MOVR_30x30.png',
        logoDark: 'logo_MOVR_30x30.png',
        nativeCurrency: { name: 'Moonriver', decimals: 18, symbol: 'MOVR' },
        Standart: '',
        tabToken:
            [
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false
                },
                {
                    adress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: true
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    },
    {
        EVM: true,
        networkName: 'Gnosis Chain',
        symbol: 'xDAI',
        label: 'Gnosis Chain (xDai)',
        labelChoose: 'Gnosis Chain',
        visible: true,
        rpcUrl: 'https://rpc.xdaichain.com/',
        explorer: 'https://blockscout.com/xdai/mainnet/',
        blockChainId: 100,
        backgroundBTN: "blue",
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000),
        maxFeePerGas_Token: '',
        maxGas_Token: web3.utils.toHex(100000),
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_GNO_30x30.png',
        logoDark: 'logo_GNO_30x30.png',
        nativeCurrency: { name: 'xDai', decimals: 18, symbol: 'XDAI' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "", //0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83
                    ABI: '',
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "", //0x4ECaBa5870353805a9F068101A40E0f32ed605C6
                    ABI: '',
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false

                },
                {

                    adress: "", //0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f contract source code not verified
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: true

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "", //0x4d15a3a2286d883af0aa1b3f21367843fac63e07 Ok ABI not dispo and 3 holders on scan ...
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    },
    {
        EVM: true,
        networkName: 'TomoChain',
        symbol: 'TOMO',
        label: 'TomoChain',
        labelChoose: 'TomoChain',
        visible: true,
        rpcUrl: 'https://rpc.tomochain.com',
        explorer: 'https://tomoscan.io',
        blockChainId: 88,
        backgroundBTN: "blue",
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000),
        maxFeePerGas_Token: '',
        maxGas_Token: web3.utils.toHex(10450000),
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_TOMO_30x30.png',
        logoDark: 'logo_TOMO_30x30.png',
        nativeCurrency: { name: 'TomoChain', decimals: 18, symbol: 'TOMO' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", //0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83
                    ABI: JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"owners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"value","type":"uint256"}],"name":"estimateFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"original_contract","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"issuer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"revokeConfirmation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"original_network","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"WITHDRAW_FEE_TOMO","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"burnId","type":"uint256"}],"name":"getBurn","outputs":[{"name":"_burner","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"setMinFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"confirmations","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"depositFee","type":"uint256"}],"name":"setDepositFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"burnList","outputs":[{"name":"value","type":"uint256"},{"name":"burner","type":"address"},{"name":"data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"isConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"receivingFeeWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"isFeeByTomoMode","type":"bool"}],"name":"toggleFeeByTomoMode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmationCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactions","outputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"WITHDRAW_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwners","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"withdrawFee","type":"uint256"}],"name":"setWithdrawFeeTomo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"from","type":"uint256"},{"name":"to","type":"uint256"},{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionIds","outputs":[{"name":"_transactionIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"_confirmations","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"withdrawFee","type":"uint256"}],"name":"setWithdrawFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transactionCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_required","type":"uint256"}],"name":"changeRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"confirmTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferContractIssuer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"submitTransaction","outputs":[{"name":"transactionId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_OWNER_COUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"required","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEPOSIT_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"newOwner","type":"address"}],"name":"replaceOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBurnCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"wallet","type":"address"}],"name":"setReceivingFeeWallet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"executeTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"TOMO_FEE_MODE","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"burn","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"cap","type":"uint256"},{"name":"minFee","type":"uint256"},{"name":"depositAndWithdrawFee","type":"uint256[]"},{"name":"originContract","type":"string"},{"name":"network","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Revocation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Submission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Execution","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"ExecutionFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerRemoval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"required","type":"uint256"}],"name":"RequirementChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burnID","type":"uint256"},{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"TokenBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"isFeeByTomoMode","type":"bool"}],"name":"ToggleFeeByTomoMode","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"withdrawFeeTomo","type":"uint256"}],"name":"SetWithdrawFeeTomo","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"receivingFeeWallet","type":"address"}],"name":"SetReceivingFeeWallet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"issuer","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Fee","type":"event"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", //0x4ECaBa5870353805a9F068101A40E0f32ed605C6
                    ABI: JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"owners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"value","type":"uint256"}],"name":"estimateFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"issuer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"revokeConfirmation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"burnId","type":"uint256"}],"name":"getBurn","outputs":[{"name":"_burner","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"setMinFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"confirmations","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"depositFee","type":"uint256"}],"name":"setDepositFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"burnList","outputs":[{"name":"value","type":"uint256"},{"name":"burner","type":"address"},{"name":"data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"isConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmationCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactions","outputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"WITHDRAW_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwners","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"from","type":"uint256"},{"name":"to","type":"uint256"},{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionIds","outputs":[{"name":"_transactionIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"_confirmations","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"withdrawFee","type":"uint256"}],"name":"setWithdrawFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transactionCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_required","type":"uint256"}],"name":"changeRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"confirmTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferContractIssuer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"submitTransaction","outputs":[{"name":"transactionId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_OWNER_COUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"required","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEPOSIT_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"newOwner","type":"address"}],"name":"replaceOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBurnCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"executeTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"cap","type":"uint256"},{"name":"minFee","type":"uint256"},{"name":"depositFee","type":"uint256"},{"name":"withdrawFee","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Revocation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Submission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Execution","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"ExecutionFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerRemoval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"required","type":"uint256"}],"name":"RequirementChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burnID","type":"uint256"},{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"TokenBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"issuer","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Fee","type":"event"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false

                },
                {

                    adress: "", //0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f contract source code not verified
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"owners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"value","type":"uint256"}],"name":"estimateFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"issuer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"revokeConfirmation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"burnId","type":"uint256"}],"name":"getBurn","outputs":[{"name":"_burner","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"setMinFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"confirmations","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"depositFee","type":"uint256"}],"name":"setDepositFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"burnList","outputs":[{"name":"value","type":"uint256"},{"name":"burner","type":"address"},{"name":"data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"isConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmationCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactions","outputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"WITHDRAW_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwners","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"from","type":"uint256"},{"name":"to","type":"uint256"},{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionIds","outputs":[{"name":"_transactionIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"_confirmations","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"withdrawFee","type":"uint256"}],"name":"setWithdrawFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transactionCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_required","type":"uint256"}],"name":"changeRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"confirmTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferContractIssuer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"submitTransaction","outputs":[{"name":"transactionId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_OWNER_COUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"required","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEPOSIT_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"newOwner","type":"address"}],"name":"replaceOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBurnCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"executeTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"cap","type":"uint256"},{"name":"minFee","type":"uint256"},{"name":"depositFee","type":"uint256"},{"name":"withdrawFee","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Revocation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Submission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Execution","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"ExecutionFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerRemoval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"required","type":"uint256"}],"name":"RequirementChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burnID","type":"uint256"},{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"TokenBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"issuer","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Fee","type":"event"}]'),
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "", //0x4d15a3a2286d883af0aa1b3f21367843fac63e07 Ok ABI not dispo and 3 holders on scan ...
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: true
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    },
    {
        EVM: true, //https://blockexplorer.boba.network/api?module=contract&action=getabi&address=0x66a2a913e447d6b4bf33efbec43aaef87890fbbc
        networkName: 'Boba Network',
        symbol: 'BOBA',
        label: 'Boba Network',
        labelChoose: 'Boba Network',
        visible: true,
        rpcUrl: 'https://mainnet.boba.network',
        explorer: 'https://blockexplorer.boba.network',
        blockChainId: 288,
        backgroundBTN: "blue",
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000),
        maxFeePerGas_Token: '',
        maxGas_Token: web3.utils.toHex(100000),
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_BOBA_30x30.png',
        logoDark: 'logo_BOBA_30x30.png',
        nativeCurrency: { name: 'Ethereum', decimals: 18, symbol: 'ETH' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", //0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", //0x4ECaBa5870353805a9F068101A40E0f32ed605C6
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: true

                },
                {

                    adress: "", //0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f contract source code not verified
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "", //0x4d15a3a2286d883af0aa1b3f21367843fac63e07 Ok ABI not dispo and 3 holders on scan ...
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    },
    {
        EVM: true,
        networkName: 'OKExChain',
        symbol: 'OKT',
        label: 'OKExChain',
        labelChoose: 'OKExChain',
        visible: true,
        rpcUrl: 'https://exchainrpc.okex.org',
        explorer: 'https://www.oklink.com/okexchain/',
        blockChainId: 66,
        backgroundBTN: "blue",
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(31500),
        maxFeePerGas_Token: '',
        maxGas_Token: web3.utils.toHex(75852),
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_OKT_30x30.png',
        logoDark: 'logo_OKT_30x30.png',
        nativeCurrency: { name: 'OKExChain', decimals: 18, symbol: 'OKT' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false

                },
                {

                    adress: "", //0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f contract source code not verified
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "", //0x4d15a3a2286d883af0aa1b3f21367843fac63e07 Ok ABI not dispo and 3 holders on scan ...
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: true
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    },
    {
        EVM: true,
        networkName: 'KuCoin Chain',
        symbol: 'KCS',
        label: 'KuCoin Chain',
        labelChoose: 'KuCoin Chain',
        visible: true,
        rpcUrl: 'https://rpc-mainnet.kcc.network',
        explorer: 'https://explorer.kcc.io/en',
        blockChainId: 321,
        backgroundBTN: "blue",
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000),
        maxFeePerGas_Token: '',
        maxGas_Token: web3.utils.toHex(100000),
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_KCS_30x30.png',
        logoDark: 'logo_KCS_30x30.png',
        nativeCurrency: { name: 'KuCoin Token', decimals: 18, symbol: 'KCS' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"address","name":"minter","type":"address"},{"internalType":"address","name":"pauser","type":"address"},{"internalType":"address","name":"blacklister","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"BlackListed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"unBlackListed","type":"event"},{"inputs":[],"name":"BLACKLISTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isBlackListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"unsetBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"address","name":"minter","type":"address"},{"internalType":"address","name":"pauser","type":"address"},{"internalType":"address","name":"blacklister","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"BlackListed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_account","type":"address"}],"name":"unBlackListed","type":"event"},{"inputs":[],"name":"BLACKLISTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isBlackListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"unsetBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false

                },
                {

                    adress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                    ABI: standartABI_BSC,
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: true
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    },
    {
        EVM: true,
        networkName: 'RSK Mainnet',
        symbol: 'RBTC',
        label: 'RSK',
        labelChoose: 'RSK',
        visible: true,
        rpcUrl: 'https://public-node.rsk.co',
        explorer: 'https://explorer.rsk.co',
        blockChainId: 30,
        backgroundBTN: "blue",
        maxFeePerGas: '',
        maxGas: web3.utils.toHex(21000),
        maxFeePerGas_Token: '',
        maxGas_Token: '',
        maxPriorityFeePerGas: web3.utils.toHex(3 * 1e9),
        maxPriorityFeePerGas_Token: web3.utils.toHex(3 * 1e9),
        logo: 'logo_RSK_30x30.png',
        logoDark: 'logo_RSK_30x30.png',
        nativeCurrency: { name: 'RSK Smart Bitcoin', decimals: 18, symbol: 'RBTC' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: true

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    },
    {
        EVM: false,
        networkName: 'Bitcoin',
        symbol: 'BTC',
        label: 'Bitcoin',
        labelChoose: 'Bitcoin',
        visible: false,
        rpcUrl: '',
        explorer: 'https://www.blockchain.com/explorer',
        blockChainId: '',
        backgroundBTN: "blue",
        maxFeePerGas: '',
        maxGas: '',
        maxFeePerGas_Token: '',
        maxGas_Token: '',
        maxPriorityFeePerGas: '',
        maxPriorityFeePerGas_Token: '',
        logo: 'logo_BTC_30x30.png',
        logoDark: 'logo_BTC_30x30.png',
        nativeCurrency: { name: 'Bitcoin', decimals: 18, symbol: 'BTC' },
        Standart: '',
        tabToken:
            [
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_6,
                    token: tabToken.tokenUSDT,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBUSD,
                    gouvernent: false

                },
                {

                    adress: '',
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBNB,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenETH,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBTC,
                    gouvernent: true

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMATIC,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTM,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenAVAX,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCRO,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenONE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSOL,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenCAKE,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUNI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenDAI,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenUST,
                    gouvernent: false

                },
                {

                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenVLX,
                    gouvernent: false

                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenFTT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTUSD,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenMOVR,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenTOMO,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenBOBA,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenOKT,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenKCS,
                    gouvernent: false
                },
                {
                    adress: "",
                    ABI: '',
                    contract: null,
                    decimals: decimal_18,
                    token: tabToken.tokenSTAKE,
                    gouvernent: false
                }
            ],
        tabNetwork2: []
    }
]

//********************************************************************************************************************************************************************************
//**************************************************************************END INIT NETWORK**************************************************************************************
//********************************************************************************************************************************************************************************


//********************************************************************************************************************************************************************************
//**************************************************************************START FUNCTION NETWORK********************************************************************************
//********************************************************************************************************************************************************************************

const initTabNetwork2 = () => {

    let tabTokenCommmon;
    let tabTokenAlready;
    let found;

    for (let B = 0; B <= tabNetwork.length - 1; B++) {

        for (let C = 0; C <= tabNetwork.length - 1; C++) {

            tabTokenCommmon = [];
            tabTokenAlready = [];
            found = false;

            //If not this network
            if (tabNetwork[B].blockChainId !== tabNetwork[C].blockChainId) {

                for (let D = 0; D <= tabNetwork[B].tabToken.length - 1; D++) {

                    if ((tabNetwork[B].tabToken[D].adress !== '') || (tabNetwork[B].tabToken[D].gouvernent == true)) {

                        for (let E = 0; E <= tabNetwork[C].tabToken.length - 1; E++) {

                            //console.log("BC 1 :" + tabNetwork[B].label + " - BC 2 : " + tabNetwork[C].label + " - Token : " + tabNetwork[C].tabToken[E].token.label + " adrr: " + tabNetwork[C].tabToken[E].adress);

                            if ((tabNetwork[C].tabToken[E].adress !== '') || (tabNetwork[C].tabToken[E].gouvernent == true)) {

                                //console.log("tabNetwork[B].tabToken[D].label : " + tabNetwork[B].label , tabNetwork[B].tabToken[D].label)
                                //console.log("tabNetwork[C].tabToken[E].label : " + tabNetwork[C].label  , tabNetwork[C].tabToken[E].label)
                                if (tabNetwork[B].tabToken[D].token.label == tabNetwork[C].tabToken[E].token.label) {

                                    if (tabTokenAlready.find(element => element == tabNetwork[B].tabToken[D].token.label) == undefined) {

                                        found = true;
                                        tabTokenCommmon.push(tabNetwork[B].tabToken[D]);

                                        tabTokenAlready.push(tabNetwork[B].tabToken[D].token.label);
                                    };
                                };

                            };
                        };
                    };
                };

                if (found == true) {

                    tabNetwork[B].tabNetwork2.push({
                        EVM: tabNetwork[C].EVM,
                        networkName: tabNetwork[C].networkName,
                        symbol: tabNetwork[C].symbol,
                        label: tabNetwork[C].label,
                        labelChoose: tabNetwork[C].labelChoose,
                        rpcUrl: tabNetwork[C].rpcUrl,
                        explorer: tabNetwork[C].explorer,
                        blockChainId: tabNetwork[C].blockChainId,
                        gasPrice: tabNetwork[C].gasPrice,
                        maxGas: tabNetwork[C].maxGas,
                        gasPriceToken: tabNetwork[C].gasPriceToken,
                        maxGasToken: tabNetwork[C].maxGasToken,
                        logo: tabNetwork[C].logo,
                        logoBorder: tabNetwork[C].logoBorder,
                        logoDark: tabNetwork[C].logoDark,
                        logoBorderDark: tabNetwork[C].logoBorderDark,
                        nativeCurrency: tabNetwork[C].nativeCurrency,
                        Standart: tabNetwork[C].Standart,
                        tabToken: tabTokenCommmon
                    });
                };
            };
        };
    };
};


const getContract = (label) => {
    //let network = getNetwork(labelNetwork);

    let token = getTokenOfNetwork(btnChooseToken1.innerHTML)
    if (token !== false) {
        console.log("token.contract", token.contract)
        return token.contract;
    } else {
        console.warn("Error getContract", label);
        return false;
    };
};

const getIndexToken = (tabToken, label) => {
    console.warn('tabToken.length : ', tabToken.length + ' ' + label)
    for (let i = 0; i <= tabToken.length - 1; i++) {
        if (label == tabToken[i].token.label) {
            return i;
        };
    };

    console.warn("OUT of getIndexToken")
    return false;
};

const getNetworkViaID = async (ID) => {
    for (let i = 0; i <= tabNetwork.length - 1; i++) {

        if (ID == tabNetwork[i].blockChainId) {
            return tabNetwork[i];
        };
    };
    console.error("out of getNetworkViaID", (ID));
    return false;

};

const getPictureBorderViaID = async (ID) => {
    console.log("getPictureBorderViaID", ID)
    let network = await getNetworkViaID(ID);

    if (network !== false) {
        if (darkMode == true) {
            return network.logoDark;
        } else {
            return network.logo;
        };

    } else {
        console.warn("Error return getNetworkViaID");
    };
};

const getIndexNetwork2 = (network, label) => {
    for (let i = 0; i <= network.tabNetwork2.length - 1; i++) {
        if (label == network.tabNetwork2[i].label) {
            return i;
        };
    };
    console.warn("out of getIndexNetwork2", (label));
    return false;
};

const getIndexNetwork = (label) => {

    console.warn("label", label)
    for (let i = 0; i <= tabNetwork.length - 1; i++) {

        if (label == tabNetwork[i].label) {
            return i;
        };
    };
    console.warn("out of getIndexNetwork", (label));
    return false;

};

const getTokenComboToken1 = () => {
    return getTokenOfNetwork(btnChooseToken1.innerHTML);

    // if (comboToken.value > 0) {
    //     return getTokenOfNetwork(btnChooseToken1.label);

    // } else {
    //     console.warn("out of getTokenComboToken1");
    //     return false;
    // };
};

const getTokenOfNetwork = (label) => {
    //let network = getNetworkComboSwap1()

    return seekToken(tabNetwork[IDSwap1 - 1].tabToken, label);


    //  for (let i = 0; i <= network.tabToken.length - 1; i++) {


    // if (label == network.tabToken[i].token.label) {
    //     return network.tabToken[i];
    // };
    //};

    console.error("out of getTokenOfNetwork", (label));
    return false;

};

const getExplorer = (network) => {
    if (network !== false) {
        return network.explorer;
    } else {
        console.error("Error getHashLink");
        return false;
    };
}

//For get ABI of all token in etherscan
const getABI = (adress) => {

    let url = getExplorer(getNetworkComboSwap1());

    $.getJSON('https://api.' + url + 'api?module=contract&action=getabi&address=' + adress, function (data) {
        var contractABI = "";
        contractABI = JSON.parse(data.result);
        console.log("contractABI", contractABI)
        if (contractABI != '') {
            var MyContract = new web3.eth.Contract(contractABI, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48');
            //var myContractInstance = MyContract.at("0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359");
            //var result = myContractInstance.memberId("0xfe8ad7dd2f564a877cc23feea6c0a9cc2e783715");
            //console.log("result1 : " + result);
            //var result = myContractInstance.members(1);
            //console.log("result2 : " + result);
        } else {
            console.log("Error");
        }
    });
}

//For link explorer with hashtag
const getHashLink = (txHash) => {

    let url = getExplorer(getNetworkComboSwap1());

    const txURL = url + 'tx/' + txHash;
    console.log("TX URL : ", txURL);
    return txURL;
};

const getNetwork = (id) => {

    if (tabNetwork.length >= id - 1) {
        return tabNetwork[id - 1];
    }
    // for (let i = 0; i <= tabNetwork.length - 1; i++) {

    //     if (id == tabNetwork[i].blockChainId) {
    //         return tabNetwork[i];
    //     };
    // };
    console.error("out of getNetwork", (id));
    return false;

};


const getNetworkComboSwap1 = () => {

    return getNetwork(IDSwap1);

    // if (comboSwap1.value > 0) {
    //     return getNetwork(btnChooseSwap1.label);

    // } else {
    //     console.warn("out of getNetworkComboSwap1 : ",comboSwap1.value);
    //     return false;
    // };


}

const getNetworkComboSwap2 = () => {

    return getNetwork(IDSwap2);

    // if (comboSwap2.value > 0) {
    //     return getNetwork(btnChooseSwap2.label);

    // } else {
    //     console.warn("out of getNetworkComboSwap2");
    //     return false;
    // };


}


//For choose blockchainID
function getNetworkIdComboSwap1() {

    let network = getNetworkComboSwap1();
    if (network !== false) {
        networkIdComboSwap1 = network.blockChainId;
        console.log('ok networkIdComboSwap1:', networkIdComboSwap1);
    } else {
        console.error("Error getNetworkIDComboSwap1");
        return false;
    }

};

//For choose blockchainID
function getNetworkIdComboSwap2() {

    let network = getNetworkComboSwap2();
    if (network !== false) {
        networkIdComboSwap2 = network.blockChainId;
    } else {
        console.error("Error getNetworkIDComboSwap2");
        return false;
    }

};

//For choose node 
const setNode = async () => {

    let network = getNetworkComboSwap1();

    if (network !== false) {
        console.log('network.rpcUrl', network.rpcUrl);
        console.log('network.label', network.label);
        node1 = network.rpcUrl;
    } else {
        console.error("error to attribuate node");
        return false;
    };

    console.log("attribuate node1", node1);
    //var node1 = 'https://bsc-dataseed.binance.org'; //mainent
    //var node1='https://bsc-dataseed1.binance.org:443'; //testnet

    web3 = new Web3(new Web3.providers.HttpProvider(node1, { timeout: 10000 }));

};

const getGouvernent = (network) => {
    for (let i = 0; i <= network.tabToken.length - 1; i++) {
        if (network.tabToken[i].gouvernent == true) {
            return network.tabToken[i];
        };
    };
};

//For add network on MetaMask
const addNetwork = async () => {

    let add = false;

    console.log("Start add network");

    let network = getNetworkComboSwap1();

    if (network !== false) {
        console.log('Network !== false');
        add = true;
    } else {
        console.log('Network == false');
        return false;
    };

    console.log("web3.utils.toHex(network.blockChainId)", web3.utils.toHex(network.blockChainId));
    console.log("network.blockChainId", network.blockChainId);
    if (add == true) {
        console.log("entry");
        let chain_Id;
        //On mobiel Metamask want number, not 0x ... but not on PC...
        if (mobile == true) {
            chain_Id = network.blockChainId;
        } else {
            chain_Id = web3.utils.toHex(network.blockChainId);
        };
        console.log("mobile : ", mobile);

        console.log("ADD : " + network.networkName);
        console.log("ChainID : " + chain_Id);
        await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: chain_Id,
                    rpcUrls: [network.rpcUrl],
                    chainName: network.networkName,
                    nativeCurrency: { name: network.nativeCurrency.name, decimals: network.nativeCurrency.decimals, symbol: network.nativeCurrency.symbol },
                    blockExplorerUrls: [network.explorer],
                },
            ],
        });
    };
};

const getGasPrice = (gouvernent) => {
    if (gouvernent == true) {
        maxPriorityFeePerGas = networkComboSwap1.maxPriorityFeePerGas;
        maxFeePerGas = networkComboSwap1.maxFeePerGas;
        maxGas = networkComboSwap1.maxGas;
    } else {
        maxPriorityFeePerGas = networkComboSwap1.maxPriorityFeePerGas_Token;
        maxFeePerGas = networkComboSwap1.maxFeePerGas_Token;
        maxGas = networkComboSwap1.maxGas_Token;
    };
};


//********************************************************************************************************************************************************************************
//**************************************************************************END FUNCTION NETWORK**********************************************************************************
//********************************************************************************************************************************************************************************