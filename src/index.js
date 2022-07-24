import {functionOne, functionTwo, functionThree} from './buildjs/loadPage.js';

const section = document.getElementById('section');
const divContact = document.getElementById('divContact');
const divMenu = document.getElementById('divMenu');
const homeBtn = document.getElementById('home');
const contentBtn = document.getElementById('content');
const menuBtn = document.getElementById('menu');

window.onload(functionOne())

homeBtn.addEventListener ('click', homeFunction);
contentBtn.addEventListener ('click', contentFunction);
menuBtn.addEventListener ('click', menuFunction);

const homeFunction = function () {
    if (section.dataset.loaded === true) {
       console.log("true yo")
    } else {
        document.getElementById('home').addEventListener('click', functionOne)
    };
};

const contentFunction = function () {
    if (divContact.dataset.loaded = true) {
        console.log("More True yo")
    } else {
        document.getElementById('contact').addEventListener('click', functionTwo);
    };
};

const menuFunction = function () {
    if (divMenu.dataset.loaded = true) {
        console.log("Menus yo")
    } else {
        document.getElementById('menu').addEventListener('click', functionThree);
    };
};





