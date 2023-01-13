// function mostrarAlerta(evento) {
//     elemento = evento.target
//     while (elemento.localName != "body") {
//         console.log("Soy el " + elemento.id);
//         elemento = elemento.parentNode
//     }
// }
// const divGeneral = document.getElementById("divGeneral")
// divGeneral.addEventListener("click", mostrarAlerta)

function yoSoyEvento(evento) {
    alert("Soy el " + evento.target.id)
}

function yoSoy(nombre) {
    alert("Soy el " + nombre)
}