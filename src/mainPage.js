function loadMainPage () {

    const page1 = document.getElementById('content');
    const main = document.createElement('main');
    page1.appendChild(main);

    const section = document.createElement('section');
    section.id = "section";
    main.appendChild(section);

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
};

export {loadMainPage};