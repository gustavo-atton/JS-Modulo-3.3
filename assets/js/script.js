// Cambiar el color de fondo de un elemento de HTML al hacerle click

//2.1. El código debe estar en 2 archivos: pintar.html y script.js. El script debe estar dentro de la carpeta assets/js

function pintar() {
  ele.style.backgroundColor = "yellow";
}
const ele = document.getElementById("ele1");
//ele.addEventListener("click", pintar); /*  comentar para la  proxima lectura */

/* ------------------------------------------------------------------------------------------------------- */

//2.2. Modifica la función para que reciba el elemento clickeado de forma de no tener que seleccionarlo nuevamente dentro de la función

function pintar2(elemento) {
  elemento.style.backgroundColor = "yellow";
}

// ele.addEventListener('click', () => pintar2(ele)) /*  comentado para proxima lectura */

/* ----------------------------------------------------------------------------------------------- */

/* 2.3. Modifica el código anterior para poder pasarle un color como argumento a la
función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
párrafo se debe pasar amarillo como color. */

function pintar3(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

pintar3(ele); // Pinta por defecto en verde

ele.addEventListener("click", () => pintar3(ele, "yellow")); // Pinta amarillo con el click 



