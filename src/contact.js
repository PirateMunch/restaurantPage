import { removeChilds } from "./removeChilds";

function loadContactPage () {
    removeChilds(section);
    const contactUL = document.createElement('ul');
    contactUL.id = "contactUL";
    section.appendChild(contactUL);

    const contactList = document.createElement('li');
    contactUL.appendChild(contactList);
    contactList.innerText = `Name \xa0: \xa0\xa0 Neal Wilson
    <br>Phone Number \xa0:\xa0\xa0 079XX XXX XXXX
    <br>Email \xa0:\xa0\xa0 myEmail@Emails.co.uk
    <br>address \xa0:\xa0\xa0  69 ThisStreet, ThisVillage, Cornwall, TRXX XXX ` 

    const img = document.createElement('img');
    img.id = "img";
    img.src = "restaurant.jpg";
    section.appendChild(img);
};

export {loadContactPage};