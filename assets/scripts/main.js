"use strict";

//Logo switch color:
const mainLogo = document.getElementById('logo');

function colorSwitch () {
    if (getComputedStyle(mainLogo).backgroundColor = "#1d2c49") {
        mainLogo.style.backgroundColor = "white";
    } else {
        mainLogo.style.backgroundColor = "#1d2c49";
    }
};

colorSwitch ();
