const contenedor = document.getElementById("contenedor")
const sigueRatonDiv = document.getElementById("sigueRatonDiv")

contenedor.addEventListener("mousemove", moverContenedorTeSigo)
function moverContenedorTeSigo(evento) {
    sigueRatonDiv.style.left = (evento.pageX + 15) + "px";
    sigueRatonDiv.style.top = evento.pageY + "px";
}

document.addEventListener("keydown", cambiarImagenFondo)
function cambiarImagenFondo(evento) {
    evento.preventDefault()
    // if (evento.ctrlKey && evento.key == "F5") {
    if (evento.key == "r") {
        contenedor.style.backgroundImage = "url('https://source.unsplash.com/random')";
    }
}

document.addEventListener("click", mostrarElementoPulsado)
function mostrarElementoPulsado(evento) {
    evento.preventDefault()
    alert("Has pulsado en el " + evento.target.localName)
}