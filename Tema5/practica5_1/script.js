function mostrarAlerta(evento) {
    console.log(evento);
    // alert("Soy el divGeneral1")
}

const divGeneral1 = document.getElementById("divGeneral1")
divGeneral1.addEventListener("click", mostrarAlerta)

const div1 = document.getElementById("div1")
div1.addEventListener("click", mostrarAlerta)

const div2 = document.getElementById("div2")
div2.addEventListener("click", mostrarAlerta)

const p1 = document.getElementById("p1")
p1.addEventListener("click", (evento) => {
    alert("Soy el p1")
    evento.stopPropagation();
})

const p2 = document.getElementById("p2")
p2.addEventListener("click", mostrarAlerta)

