
const formulario = document.getElementById("formulario-contacto");

console.log(formulario);

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    console.log("El usuario presionó Enviar mensaje");
    
const nombre = document.getElementById("nombre").value.trim();

if (nombre === "") {
    alert("Por favor, escribe tu nombre.");
    return;
}

const correo = document.getElementById("correo").value.trim();

const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!formatoCorreo.test(correo)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
}

const mensaje = document.getElementById("mensaje").value.trim();

if (mensaje.length < 10) {
    alert("El mensaje debe tener al menos 10 caracteres.");
    return;
}

alert("¡Gracias, " + nombre + "! Tu formulario se validó correctamente.");

formulario.reset();

});