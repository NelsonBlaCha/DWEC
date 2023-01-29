// Dependiendo del radio button pulsado se mostrara un formulario u otro.

const mostrarFormularioIncidencia = document.getElementById("mostrarFormularioIncidencia");
const mostrarFormularioPassword = document.getElementById("mostrarFormularioPassword");

mostrarFormularioIncidencia.addEventListener("change", mostrarImagenYFormulario)
mostrarFormularioPassword.addEventListener("change", mostrarImagenYFormulario)

function mostrarImagenYFormulario(evento) {
    // Por defecto pongo los displays de las 3 imagenes en oculto.
    // Por defecto pongo los displas de los 3 formularios en oculto.
    // Compruebo que radio button ha sido pulsado mediante su ID.
    // Dependiendo de cual ha sido pulsado, muestro el formulario y la foto adecuada.
    // He optado por hacerlo por separado por si quisieramos poner otro radio button con otro formulario. Por escalabilidad
    document.getElementById("imagenPorDefecto").style.display = "none";
    document.getElementById("imagenIncidencia").style.display = "none";
    document.getElementById("imagenPassword").style.display = "none";
    formularioPassword.style.display = "none";
    formularioIncidencia.style.display = "none";

    if (evento.target.id == "mostrarFormularioIncidencia") {
        document.getElementById("imagenIncidencia").style.display = "block";
        formularioIncidencia.style.display = "block";
    }
    if (evento.target.id == "mostrarFormularioPassword") {
        document.getElementById("imagenPassword").style.display = "block";
        formularioPassword.style.display = "block";
    }
}