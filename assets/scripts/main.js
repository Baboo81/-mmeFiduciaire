"use strict";

//Logo switch color:
const mainLogo = document.getElementById('logo');
const linksSection = document.querySelector('links');

function colorSwitch () {
    if (getComputedStyle(linksSection).backgroundColor = "#1d2c49") {
        mainLogo.style.backgroundColor = "white";
    } else {
        mainLogo.style.backgroundColor = "#1d2c49";
    }
};

colorSwitch ();
