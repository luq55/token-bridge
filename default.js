//For return width
const resMobile = () => {
    //hauteur.innerHTML = window.innerHeight;
    //largeur.innerHTML = window.innerWidth;
    const width = window.innerWidth;
    console.log("width", width)
    if (width > 1022) {
        return false;
    } else {
        return true;
    }
};
const mobile = resMobile();

function CheckIE() {

    console.log("navigator.userAgent : ", navigator.userAgent);
    var Browser;
    Browser = navigator.userAgent;
    console.log("Browser.indexOf", Browser.indexOf);
    if (Browser.indexOf("Edg") == -1) { //if = edg, = chrome too
        console.log('Edge=-1');
        nav = 'Edg'
    } else {
        console.log('Edge<>-1');

        if (Browser.indexOf("Chrome") == -1) {
            console.log('Chrome=-1');
            nav = 'Chrome'
        } else {
            console.log('Chrome<>-1');

        }
        if (Browser.indexOf("Firefox") == -1) {
            console.log('Firefox=-1');
            nav = 'Firefox'
        } else {
            console.log('Firefox<>-1');

        }
        if (Browser.indexOf("Trident") == -1) {
            console.log('Trident=-1');
            nav = 'Trident'
        } else {
            console.log('Trident<>-1');

        }
    }

};


//for arround
function roundDecimal(nombre, precision) {
    var precision = precision || 2;
    var tmp = Math.pow(10, precision);
    return Math.round(nombre * tmp) / tmp;
};

//For arround 2
function roundDecimal2(nombre, precision) {
    let lotsOfDecimal = nombre;
    lotsOfDecimal;
    let twoDecimalPlaces = lotsOfDecimal.toFixed(precision);
    return twoDecimalPlaces;
};

//For mumtiply amount with decimal
function multiplyToDecimal() {
    console.log("Amount before", amount, decimal)
    //let decimalInt = parseInt(decimal);
    //for (let i = 1; i <= decimalInt; i++) {
    //    qtyToken = qtyToken * 10
    //}

    amount = amount * 10 ** decimal

    console.log("Amount after", amount)
};

//For read decimal of token
function getDecimal(decimalToken) {

    //get decimals to multiply by token amount
    decimalToken.methods.decimals().call(function (error, d) {
        console.log("decimals:", error, d);
        decimal = d
    });
};

function copyToClickBoard(content) {

    navigator.clipboard.writeText(content)
        .then(() => {
            console.log("Text copied to clipboard...")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })

}

const isDarkMode = async () => { //https://www.tech-wiki.online/fr/javascript-detect-dark-mode.html#:~:text=D%C3%A9tection%20du%20mode%20sombre%20et,%2Dcolor%2Dscheme%20requ%C3%AAte%20m%C3%A9diatique.

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

        console.log("Dark mode on")
        darkMode = true
       
    } else {
        //nextButton.style.filter = "invert(100%)";
        console.log("Dark mode off")
        darkMode = false
       
    };
    return darkMode;
}

const darkModeChanged = () => {
    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', event => {
            if (event.matches) {
                //dark mode
            } else {
                //light mode
            }
        })
}

dec2hex = function (d) {
    if (d > 15)
      { return d.toString(16) } else
      { return "0" + d.toString(16) }
  }
  rgb = function (r, g, b) { return "#" + dec2hex(r) + dec2hex(g) + dec2hex(b) };

const onDarkMode = () => {
    //nextButton.style.filter = "invert(0%)";

    cellLittleLogo.style.filter = "invert(0%)";
    onboardButton.style.filter = "invert(0%)";
  
    cellNav.style.filter = "invert(0%)";
  
    footer.style.backgroundColor = normalBlue;
    footer.style.backgroundImage = "url('background.png')"

    popupSwap1.style.backgroundColor = normalBlue;
    popupSwap2.style.backgroundColor = normalBlue;
    popupToken1.style.backgroundColor = normalBlue;
    popupToken2.style.backgroundColor = normalBlue;
    //popupToken2.style.backgroundColor="#28395B";
};

const onLightMode = () => {
  
    cellLittleLogo.style.filter = "invert(100%)";
    onboardButton.style.filter = "invert(100%)";
    
    cellNav.style.filter = "invert(100%)";
    

    footer.style.backgroundColor = inversDarkBlue;
    footer.style.backgroundImage = "url('backgroundInvers.png')"

    popupSwap1.style.backgroundColor = inversDarkBlue;
    popupSwap2.style.backgroundColor= inversDarkBlue;
    popupToken1.style.backgroundColor = inversDarkBlue;
    popupToken2.style.backgroundColor = inversDarkBlue;
    //popupToken2.style.backgroundColor="#E5DBCS";
};
