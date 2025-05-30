
//-----------------------COLORES---------------------------

function pintarN(elemento, color) {
  elemento.style.backgroundColor = color;
}

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");


if (div1 && div2 && div3 && div4) {
  div1.addEventListener("click", () => pintarN(div1, "black"));
  div2.addEventListener("click", () => pintarN(div2, "black"));
  div3.addEventListener("click", () => pintarN(div3, "black"));
  div4.addEventListener("click", () => pintarN(div4, "black"));
}