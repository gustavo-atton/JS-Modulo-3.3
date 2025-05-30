/*Crea una página junto a un script que guarde dentro de una variable global
un color dependiendo de la letra del teclado presionada. */

//PARTE 1 (a,s,d)

let caja = document.querySelector("#key");
let colorxtecla = ""; // Variable Global

// Funcion Pintar

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    colorxtecla = " rgb(232, 2, 236)";
  } else if (event.key === "s") {
    colorxtecla = " rgb(254, 93, 0)";
  } else if (event.key === "d") {
    colorxtecla = " rgb(0, 170, 255)";
  }

  caja.style.backgroundColor = colorxtecla;
});

//PARTE 2 (q,w,e)

// Funcion Crear Nueva Caja

function crearcaja(color) {
  let nuevacaja = document.createElement("div");
  nuevacaja.style.backgroundColor = color;
  nuevacaja.classList = "caja";
  document.body.appendChild(nuevacaja);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    crearcaja("rgb(66, 4, 105)"); //morado
  } else if (event.key === "w" || event.key === "W") {
    crearcaja("rgb(45, 46, 47)"); //gris
  } else if (event.key === "e" || event.key === "E") {
    crearcaja("rgb(69, 39, 15)"); //café
  }
});
