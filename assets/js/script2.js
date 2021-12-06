const boton1 = document.querySelector("#btn-1");
const boton2 = document.querySelector("#btn-2");
const boton3 = document.querySelector("#btn-3");
const boton4 = document.querySelector("#btn-4");
const boton5 = document.querySelector("#btn-5");
const boton6 = document.querySelector("#btn-6");

const caja = document.querySelector("#caja");


boton1.addEventListener("click", function() {
    caja.style.backgroundColor = "#e53e3e";
})

boton2.addEventListener("click", function() {
    caja.style.backgroundColor = "#dd6b20";
})

boton3.addEventListener("click", function() {
    caja.style.backgroundColor = "#faf089";
})

boton4.addEventListener("click", function() {
    caja.style.backgroundColor = "#48bb78";
})

boton5.addEventListener("click", function() {
    caja.style.backgroundColor = "#81e6d9";
})

boton6.addEventListener("click", function() {
    caja.style.backgroundColor = "#d53f8c";
})