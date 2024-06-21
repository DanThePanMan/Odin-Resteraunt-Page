function displayMenu() {
    const listOfItems = [
        "Fish and Chips --- $19.99",
        "Signature Roasted Chicken --- $24.99",
        "Cheeseburger --- 19.99",
        "Cesar Salad --- 14.99",
        "Sweet BBQ Ribs --- 24.99",
        "Baked Potatos -- 8.99",
    ];
    const body = document.querySelector(".content");
    body.innerHTML = "";

    //making menu background
    const menuBG = document.createElement("div");
    menuBG.classList.add("menuBG");

    //making title and list
    const menuTitle = document.createElement("h1");
    const menuList = document.createElement("ul");
    menuTitle.classList.add("menuTitle");
    menuTitle.textContent = "Menu";
    menuList.classList.add("menuList");

    //attach menu to bg
    menuBG.appendChild(menuTitle);
    menuBG.appendChild(menuList);

    //making menu items:
    for (let i = 0; i < listOfItems.length; i++) {
        const menuItem = document.createElement("li");
        menuItem.classList.add("menuItem");
        menuItem.textContent = listOfItems[i];
        menuList.appendChild(menuItem);
    }

    body.appendChild(menuBG);
}

export { displayMenu };
