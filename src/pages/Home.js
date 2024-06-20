function displayHomePage() {
    const body = document.querySelector(".content");
    const hero = document.createElement("div");
    hero.classList.add("hero");

    //making the bg inner element
    const bg = document.createElement("div");
    bg.classList.add("background");
    hero.appendChild(bg);

    //making the h1 inner element heroText
    const heroText = document.createElement("h1");
    heroText.classList.add("heroText");
    heroText.textContent = "Freshly Made According To Your Needs";
    bg.appendChild(heroText);

    body.innerHTML = "";
    body.appendChild(hero);

    //for 2nd half
    const message = document.createElement("div");
    message.classList.add("message");

    //inner section
    const messageInner = document.createElement("div");
    messageInner.classList.add("messageInner");
    message.appendChild(messageInner);

    //message content
    const messageTitle = document.createElement("h1");
    const messageText = document.createElement("div");

    messageTitle.classList.add("messageTitle");
    messageText.classList.add("messageText");

    messageTitle.textContent = "A message to ur customers: ";
    messageText.textContent =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus modi sint dolorem similique quiaratione architecto aut praesentium, ipsum aspernaturobcaecati recusandae, saepe natus? Laudantium quaeratcum fugiat autem doloremque.oremLorem ipsum dolor, sitamet consectetur adipisicing elit. Repellendus modi sintdolorem similique quia ratione architecto autpraesentium, ipsum aspernatur obcaecati recusandae,saepe natus? Laudantium quaerat cum fugiat autemdoloremque.oremLorem ipsum dolor, sit amet consecteturadipisicing elit. Repellendus modi sint doloremsimilique quia ratione architecto aut praesentium, ipsumaspernatur obcaecati recusandae, saepe natus? Laudantiumquaerat cum fugiat autem doloremque.oremLorem ipsumdolor, sit amet consectetur adipisicing elit.Repellendus modi sint dolorem similique quia rationearchitecto aut praesentium, ipsum aspernatur obcaecatirecusandae, saepe natus? Laudantium quaerat cum fugiatautem doloremque.orem";
    messageInner.appendChild(messageTitle);
    messageInner.appendChild(messageText);

    body.appendChild(message);
}

export default displayHomePage;
