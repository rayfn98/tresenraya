//Validador de que ingresó el  nombre de usuario

function userNameValidator() {
    const userName = document.querySelector("#user-name");
    const btnStart = document.querySelector("#btn-start");
    if (userName.value.length > 0) {
        btnStart.removeAttribute("disabled");
    } else {
        btnStart.setAttribute("disabled", true);
    }
}

// INICIAR JUEGO
let started = false;

function handleStart() {
    started = true;
    const grid = document.querySelector(".game-grid");
    const userName = document.querySelector("#user-name");
    grid.classList.add("started");
    localStorage.setItem("userName", userName.value);
    alert(`Usuario ${userName.value} guardado, dar clik para comenzar`);
}

const userSession = localStorage.getItem("userName");
if (userSession) {
    const userName = document.querySelector("#user-name");
    const btn = document.querySelector("#btn-start");
    btn.removeAttribute("disabled");
    userName.value = userSession;
}