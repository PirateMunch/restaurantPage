function functionThree () {
    console.log("Menu Yoooo")
    const section = document.getElementById('section');
    
    const divMenu = document.createElement('div');
    divMenu.dataset.loaded = true;
    divMenu.id = "divMenu";
    section.appendChild(divMenu);

    const menuUL = document.createElement('ul');
    menuUL.id = "menuUL";
    divMenu.appendChild(menuUL);
    
    const starterLi = document.createElement('li');
    starterLi.innerText = "Starter's :"
    menuUL.appendChild(starterLi);
    
    const list1 = document.createElement('li');
    starterLi.appendChild(list1);

    const list2 = document.createElement('li');
    starterLi.appendChild(list2);

    const list3 = document.createElement('li');
    starterLi.appendChild(list3);

    const mainLi = document.createElement('li');
    mainLi.innerText = "Main's :"
    menuUL.appendChild(mainLi);
    
    const main1 = document.createElement('li');
    mainLi.appendChild(main1);

    const main2 = document.createElement('li');
    mainLi.appendChild(main2);

    const main3 = document.createElement('li');
    mainLi.appendChild(main3);

    const dessLi = document.createElement('li');
    dessLi.innerText = "Dessert's :"
    menuUL.appendChild(dessLi);
    
    const dess1 = document.createElement('li');
    dessLi.appendChild(dess1);

    const dess2 = document.createElement('li');
    dessLi.appendChild(dess2);

    const dess3 = document.createElement('li');
    dessLi.appendChild(dess3);
};

export {functionThree};