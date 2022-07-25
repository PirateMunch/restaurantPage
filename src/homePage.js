import { removeChilds } from "./removeChilds";

function loadHomePage() {
    removeChilds(section);
    const divHide = document.createElement('div');
    divHide.id = "divHide";
    divHide.className = "divHide";
    section.appendChild(divHide);

    const span = document.createElement('span');
    span.id = "span";
    span.innerText = ` Lorem Epsilon Lor Lor lol
    xxxxx nnnnnnnnnnnnnn jjjjjjjjjjjjjj kkkkkkkkkkkkk kkkkkkkkkkk`;
    divHide.appendChild(span);

    const img = document.createElement('img');
    img.id = "img";
    img.src = "restaurant.jpg";
    divHide.appendChild(img);
}

export {loadHomePage};