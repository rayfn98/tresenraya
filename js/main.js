import { getBotMove, getRandom } from "./getMove.js";
import "./initialValidators.js";

// Contador de movimientos
let moveCounter = 0;
// Permite si el usuario puede jugar
let disabled = true;

// Función general que escucha si hace click a una cuadrícula
const selectItem = (e) => {
    const item = e;
    if (started == false) {
        return;
    }
    if (disabled && moveCounter > 0) {
        return;
    } else if (moveCounter === 0) {
        firstMove(item);
        moveCounter++;
        return;
    } else if (moveCounter > 0 && moveCounter % 2 !== 0) {
        putBlack(item);
        moveCounter++;
        return;
    }
    //  else if (moveCounter > 0 && moveCounter % 2 == 0) {
    //     putRed(item);
    //     moveCounter++;
    // }
    winnerValidator();
};

// Poner ficha roja /negra
function firstMove(item) {
    let random = getRandom();
    while (item.target.id == random) {
        random = getRandom();
    }
    if (item.target.id !== random && random > 0) {
        items.forEach((i) => {
            if (i.id == random) {
                i.style.backgroundImage = "url('assets/fichaRoja.png')";
                i.classList.add("selected");
                i.setAttribute("player", "false");
                disabled = false;
                grid.classList.remove("disabled");
            }
        });
    }
}
// Poner Ficha negra del jugador
function putBlack(item) {
    item.target.style.backgroundImage = "url('assets/fichaNegra.png')";
    item.target.classList.add("selected");
    item.target.setAttribute("player", "true");
    putRed();
}

function putRed() {
    grid.classList.add("disabled");
    disabled = true;
    setTimeout(() => {
        getBotMove(items);
        moveCounter++;
    }, 1000);
    setTimeout(() => {
        disabled = false;
        grid.classList.remove("disabled");
    }, 2000);
}

// INICIAR JUEGO
function handleStart() {
    started = true;
}
// WinnerValidator
function winnerValidator() {
    console.log("validando");
}

// Selecciona todos las casillas
const items = document.querySelectorAll(".item");
items.forEach((item) => item.addEventListener("click", selectItem));
// Selecciona el grid del juego para desactivarlo durante los turnos
const grid = document.querySelector(".game-grid");