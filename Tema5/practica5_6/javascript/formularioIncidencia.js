// Comprobar que el formulario de incidencias esta completamente rellenado.
// Para ello usare un unico listener en el boton submit del formulario y comprobare cada input.

const botonEnviarFormularioIncidencias = document.getElementById("botonEnviarFormularioIncidencias");

botonEnviarFormularioIncidencias.addEventListener("click", enviarFormulario)

function enviarFormulario(evento) {
    // 1. Evito que se envie el formulario y recargue la pagina.
    // 2. Compruebo el numero de campos que se han rellenado. Muestro alerta y cambio el borde si hay alguno vacio.
    // 3. Si el numero de campos rellenados coincide con el numero de campos del formulario valido el envio del formulario.
    evento.preventDefault();
    let camposRellenadosDelFormulario = numeroCamposRellenadosDelFormularioIncidencia();
    if (formularioIncidencia.elements.length == camposRellenadosDelFormulario) {
        alert("Formulario enviado correctamente.");
    }
}

function numeroCamposRellenadosDelFormularioIncidencia() {
    // La funcion devuelve el numero de campos rellenados del formulario.
    // Utilizo un bucle FOR y voy recorriendo cada uno de los elementos input del formulario.
    // En el caso de los campos vacios muestro una alerta y les pongo borde.
    // Si el usuario rellena los campos vacios previamente, le quito el borde.
    let camposRellenadosDelFormulario = 0;
    for (let index = 0; index < formularioIncidencia.elements.length; index++) {
        if (formularioIncidencia.elements[index].value == "") {
            alert("El campo " + formularioIncidencia.elements[index].id + " esta vacio");
            formularioIncidencia.elements[index].parentElement.style.border = "3px dotted red";
        } else {
            formularioIncidencia.elements[index].parentElement.style.border = "0px dotted red";
            camposRellenadosDelFormulario++;
        }
    }
    return camposRellenadosDelFormulario;
}