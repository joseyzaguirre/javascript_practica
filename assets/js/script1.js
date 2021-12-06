const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

const errornombre = document.querySelector(".errorNombre");
const errorasunto = document.querySelector(".errorAsunto");
const errormensaje = document.querySelector(".errorMensaje");

const resultado = document.querySelector(".resultado");

function isValid(word){
    return word.match(/^[a-zA-Z0-9 ]+$/) != null
}

formulario.addEventListener("submit", function(ev){
    
    ev.preventDefault();

    const inputnombre = nombre.value;
    const inputasunto = asunto.value;
    const inputmensaje = mensaje.value;

    if (!isValid(inputnombre)) {
        errornombre.innerHTML = "El mensaje es requerido;";
    } else {
        errornombre.innerHTML = " ";
    }

    if (!isValid(inputasunto)) {
        errorasunto.innerHTML = "El mensaje es requerido;";
    } else {
        errorasunto.innerHTML = " ";
    }

    if (!isValid(inputmensaje)) {
        errormensaje.innerHTML = "El mensaje es requerido;";
    } else {
        errormensaje.innerHTML = " ";
    }

    if (isValid(inputnombre) && (isValid(inputasunto)) && (isValid(inputmensaje))) {
        resultado.innerHTML = "Mensaje enviado con éxito!!!";
    } else {
        resultado.innerHTML = " ";
    }
    
})

