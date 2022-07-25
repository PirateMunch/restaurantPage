import {functionOne} from './loadPage.js';
import {functionTwo} from './contact.js';
import {functionThree} from './menu.js';

console.log("works")
window.onload(functionOne());
console.log("not working?!")

const section = document.getElementById('section');
const divContact = document.getElementById('divContact');
const divMenu = document.getElementById('divMenu');
const homeBtn = document.querySelector('.home');
const contactBtn = document.querySelector('.contact');
const menuBtn = document.querySelector('.menu');

const tester = function () {
    console.log("Works")
}

const homeFunction = function () {
    if (section.dataset.loaded === true) {
       console.log("true yo")
    } else {
        functionOne();
    };
};

const contactFunction = function () {
    if (divContact.dataset.loaded === true) {
        console.log("More True yo")
    } else {
        functionTwo()
    };
};

const menuFunction = function () {
    if (divMenu.dataset.loaded === true) {
        console.log("Menus yo")
    } else {
        functionThree()
    };
};





homeBtn.addEventListener ('click', tester);
contactBtn.addEventListener ('click', contactFunction);
menuBtn.addEventListener ('click', menuFunction);





