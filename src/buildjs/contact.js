function functionTwo () {
    console.log("Contacts yo")
    const section = document.getElementById('section');

    const divContact = document.createElement('div');
    divContact.dataset.loaded = true;
    divContact.id = "divContact";
    section.appendChild(divContact);

    const contactUl = document.createElement('ul');
    contactUl.appendChild(contactUl);

    const contactList = document.createElement('li');
    contactList.appendChild(contactUl);
    info.innerText = `Name \xa0: \xa0\xa0 Neal Wilson
    <br>Phone Number \xa0:\xa0\xa0 079XX XXX XXXX
    <br>Email \xa0:\xa0\xa0 myEmail@Emails.co.uk
    <br>address \xa0:\xa0\xa0  69 ThisStreet, ThisVillage, Cornwall, TRXX XXX ` 
};

export {functionTwo};