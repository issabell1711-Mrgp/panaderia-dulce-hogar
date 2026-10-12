const botonTema = document.getElementById("boton-tema");

botonTema.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");
});
const botonesAgregar = document.querySelectorAll(".btn-agregar");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const botonVaciar = document.getElementById("vaciar-carrito");

botonVaciar.style.display = "none";

let total = 0;


console.log(botonesAgregar);

botonesAgregar.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const nombre = boton.dataset.nombre;
        const precio = boton.dataset.precio;

        if (listaCarrito.textContent.includes("Tu carrito está vacío")) {
    listaCarrito.innerHTML = "";
}
        botonVaciar.style.display = "inline-block";

        total = total + Number(precio);

        totalCarrito.textContent = total;

        console.log("Producto:", nombre);
        console.log("Precio:", precio);

        const nuevoProducto = document.createElement("div");

        const textoProducto = document.createElement("span");
        textoProducto.textContent = nombre + " - $" + precio;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", function() {

            nuevoProducto.remove();

            total = total - Number(precio);

            totalCarrito.textContent = total;

});

        nuevoProducto.appendChild(textoProducto);
        nuevoProducto.appendChild(botonEliminar);

        listaCarrito.appendChild(nuevoProducto);

    });

});

botonVaciar.addEventListener("click", function() {

    listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";

    total = 0;

    totalCarrito.textContent = total;

    botonVaciar.style.display = "none";

});
const formularioRegistro = document.getElementById("formulario-registro");

formularioRegistro.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombreRegistro = document.getElementById("nombre-registro").value.trim();
    const correoRegistro = document.getElementById("correo-registro").value.trim();
    const telefonoRegistro = document.getElementById("telefono-registro").value.trim();
    const contrasenaRegistro = document.getElementById("contrasena-registro").value;
    const confirmarContrasena = document.getElementById("confirmar-contrasena").value;

    if (contrasenaRegistro !== confirmarContrasena) {
    alert("Las contraseñas no coinciden.");
    return;
}
const cliente = {
    nombre: nombreRegistro,
    correo: correoRegistro,
    telefono: telefonoRegistro
};

localStorage.setItem("clienteRegistrado", JSON.stringify(cliente));

alert("Cliente registrado correctamente.");

formularioRegistro.reset();

    console.log("Registro:", nombreRegistro, correoRegistro, telefonoRegistro);

});