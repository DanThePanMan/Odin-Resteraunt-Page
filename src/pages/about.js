function displayAbout() {
    const body = document.querySelector(".content");
    body.innerHTML = "";

    //making top
    const top = document.createElement("div");
    top.classList.add("top");
    //adding top content
    const aboutTitle = document.createElement("h1");
    const aboutMessage = document.createElement("p");
    aboutTitle.classList.add("aboutTitle");
    aboutMessage.classList.add("aboutMessage");
    aboutTitle.textContent = "About Us";
    aboutMessage.textContent =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi sint dolorem similique quiaratione architecto aut praesentium, ipsum aspernaturobcaecati recusandae, saepe natus? Laudantium quaeratcum fugiat autem doloremque.oremLorem ipsum dolor, sitamet consectetur adipisicing elit. Repellendus modi sintdolorem similique quia ratione architecto autpraesentium, ipsum aspernatur obcaecati recusandae,saepe natus? Laudantium quaerat cum fugiat autemdoloremque.oremLorem ipsum dolor, sit amet consecteturadipisicing elit. Repellendus modi sint doloremsimilique quia ratione architecto aut praesentium, ipsumaspernatur obcaecati recusandae, saepe natus? Laudantiumquaerat cum fugiat autem doloremque.oremLorem ipsumdolor, sit amet consectetur adipisicing elit.Repellendus modi sint dolorem similique quia rationearchitecto aut praesentium, ipsum aspernatur obcaecatirecusandae, saepe natus? Laudantium quaerat cum fugiatautem doloremque.orem";
    top.appendChild(aboutTitle);
    top.appendChild(aboutMessage);

    //bottom
    const bottom = document.createElement("div");
    bottom.classList.add("bottom");

    //inner
    const bottomInner = document.createElement("div");
    bottomInner.classList.add("bottomInner");
    bottom.appendChild(bottomInner);

    const hours = document.createElement("p");
    const phone = document.createElement("p");
    hours.classList.add("hnf");
    phone.classList.add("hnf");
    hours.textContent = "3:30pm - 9:30pm";
    phone.textContent = "Call us at (111)-222-3333";

    bottomInner.appendChild(hours);
    bottomInner.appendChild(phone);

    body.appendChild(top);
    body.appendChild(bottom);
}

export { displayAbout };
