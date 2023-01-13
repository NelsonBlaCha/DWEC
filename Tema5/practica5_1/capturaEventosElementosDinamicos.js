const botonActivar = document.getElementById("botonActivar")
const boton1 = document.getElementById("boton1")
const boton2 = document.getElementById("boton2")
const boton3 = document.getElementById("boton3")
const botonDesactivar = document.getElementById("botonDesactivar")

botonActivar.addEventListener("click", () => {
    boton1.addEventListener("click", yoSoyEvento)
    boton2.addEventListener("click", yoSoyEvento)
    boton3.addEventListener("click", yoSoyEvento)
})

botonDesactivar.addEventListener("click", () => {
    boton1.removeEventListener("click", yoSoyEvento)
    boton2.removeEventListener("click", yoSoyEvento)
    boton3.removeEventListener("click", yoSoyEvento)
})