const numeroRandom = document.getElementById("numeroRandom")
const mostarPantalla = document.getElementById("mostarPantalla")
const mensajeFinal = document.getElementById("mensajeFinal")
let seguirJugando = true;

while (seguirJugando) {
    let numeroIntroducido = 0;
    let numeroAleatorio = parseInt(Math.random() * 11);
    numeroRandom.innerHTML = "El numero aleatorio es " + numeroAleatorio
    while (numeroAleatorio != numeroIntroducido && seguirJugando) {
        datoIntroducido = prompt("Introduzca un numero entre 0 y 10")
        if (datoIntroducido === null) {
            seguirJugando = false
            break
        }
        numeroIntroducido = parseInt(datoIntroducido)
        if (numeroIntroducido < 0 || numeroIntroducido > 10 || isNaN(numeroIntroducido)) {
            mostarPantalla.innerHTML = "Debe ser un numero entre 0 y 10"
        }
        else if (numeroAleatorio != numeroIntroducido) {
            mostarPantalla.innerHTML = "El numero " + numeroIntroducido + " no es el numero correcto"
            seguirJugando = confirm("¿Quiere seguir jugando?")

        }
        else {
            mostarPantalla.innerHTML = "¡¡El numero " + numeroIntroducido + " es correcto!!"
            seguirJugando = confirm("¿Quiere seguir jugando?")
            if (seguirJugando) {
                mostarPantalla.innerHTML = ""
            }
        }
    }
}

mensajeFinal.innerHTML = "¡Gracias por jugar!"
