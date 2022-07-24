function functionOne() {
    const page = document.getElementById('content');

    const header = document.createElement('header');
    header.innerText = "Restaurant Page";
    page.appendChild(header);

    const main = document.createElement('main');
    page.appendChild(main);

    const divBtn = document.createElement('div');
    divBtn.id = "divBtn"
    main.appendChild(divBtn);

    const homeBtn = document.createElement('input');
    homeBtn.type = "button";
    homeBtn.value = "Home";
    homeBtn.id = "home";
    divBtn.appendChild(homeBtn);

    const contactBtn = document.createElement('input');
    contactBtn.type = "button";
    contactBtn.value = "Contact";
    contactBtn.id = "contact";
    divBtn.appendChild(contactBtn);

    const menuBtn = document.createElement('input');
    menuBtn.type = "button";
    menuBtn.value = "Menu";
    menuBtn.id = "menu";
    divBtn.appendChild(menuBtn);

    const section = document.createElement('section');
    section.id = "section";
    section.dataset.loaded = true;
    main.appendChild(section);

    const span = document.createElement('span');
    span.innerText = ` Lorem Epsilon Lor Lor lol
xxxxx nnnnnnnnnnnnnn jjjjjjjjjjjjjj kkkkkkkkkkkkk kkkkkkkkkkk`;
    section.appendChild(span);

    const img = document.createElement('img');
    img.src = "restaurant.jpg";
    section.appendChild(img);
}

export {functionOne};