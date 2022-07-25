import {loadHomePage} from './homePage.js';
import {loadContactPage} from './contact.js';
import {loadMenuPage} from './menu.js';
import {loadMainPage} from './mainPage.js';

window.addEventListener('load', loadMainPage);

globalEventListener("click", ".contact", e => {
    loadContactPage();
});

globalEventListener("click", ".menu", e => {
    loadMenuPage();
});

globalEventListener("click", ".home", e => {
    loadHomePage();
}) ;

function globalEventListener(type, selector, callback) {
    document.addEventListener(type, e=> {
        if (e.target.matches(selector)) callback(e)
    });
};






