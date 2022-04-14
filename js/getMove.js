export function getRandom() {
    return Math.floor(Math.random() * (10 - 1)) + 1;
}
export function getBotMove(items) {
    let played = false;
    let random = getRandom();

    do {
        items.forEach((i) => {
            if (i.id == random) {
                if (i.classList.contains("selected")) {
                    random = getRandom();
                } else if (!i.classList.contains("selected") && !played) {
                    i.style.backgroundImage = "url('assets/fichaRoja.png')";
                    i.classList.add("selected");
                    i.setAttribute("player", "false");
                    played = true;
                }
            }
        });
    } while (!played);
}