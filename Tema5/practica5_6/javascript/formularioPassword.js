const antiguoPassword = document.getElementById("antiguoPassword");
const nuevoPassword = document.getElementById("nuevoPassword");
const repetirNuevoPassword = document.getElementById("repetirNuevoPassword");
const botonEnviarFormularioPassword = document.getElementById("botonEnviarFormularioPassword");

botonEnviarFormularioPassword.addEventListener("click", enviarFormulario)
antiguoPassword.addEventListener("blur", todoCorrecto)
nuevoPassword.addEventListener("blur", todoCorrecto)
repetirNuevoPassword.addEventListener("blur", todoCorrecto)

function enviarFormulario(evento) {
    if (todoCorrecto(evento)) {
        alert("Formulario enviado");
    }
}

function todoCorrecto(evento) {
    evento.preventDefault();
    // Las siguientes funciones devolveran true o false dependiendo de si cumple o no los criterios.
    const camposRellenados = todosCamposRellenados();
    const passwordNuevoValido = passwordNuevoCumpleRegEx();
    const passwordRepetidoCoincide = passwordRepetidoIgual();
    // Si todo es valido retorna true, que se usara cuando se pulse el boton "Enviar formulario"
    if (camposRellenados && passwordNuevoValido && passwordRepetidoCoincide) {
        return true;
    }
}

function todosCamposRellenados() {
    // Si alguno de los campos, o todos, esta vacio mostrara un mensaje y devolvera false
    let respuesta = true;
    if (antiguoPassword.value == '') {
        alert("El campo password antiguo esta vacio.");
        respuesta = false;
    }
    if (nuevoPassword.value == '') {
        alert("El campo password nuevo esta vacio.");
        respuesta = false;
    }
    if (repetirNuevoPassword.value == '') {
        alert("El campo repetir password esta vacio.");
        respuesta = false;
    }
    return respuesta;
}

function passwordNuevoCumpleRegEx() {
    // Comprueba que se cumple el RegEx y devolvera true en el caso que se cumpla
    const regEx = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16}$)/)
    const nuevoPassword = document.getElementById("nuevoPassword");
    if (regEx.test(nuevoPassword.value)) {
        return true
    }
    alert("El password nuevo no tiene todas las carateristicas pedidas");
    return false
}

function passwordRepetidoIgual() {
    if (nuevoPassword.value == repetirNuevoPassword.value) {
        return true
    }
    alert("El password repetido no coincide con el password nuevo");
    return false
}

