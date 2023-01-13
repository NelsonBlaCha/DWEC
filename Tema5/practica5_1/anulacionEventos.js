const divGeneral3 = document.getElementById("divGeneral3")
divGeneral3.addEventListener("click", divGeneral3EliminarEvento)
function divGeneral3EliminarEvento() {
    yoSoy("divGeneral3")
    divGeneral3.removeEventListener("click", divGeneral3EliminarEvento)
}

const div111 = document.getElementById("div111")
div111.addEventListener("click", div111EliminarEvento)
function div111EliminarEvento() {
    yoSoy("div111")
    div111.removeEventListener("click", div111EliminarEvento)
}

const div222 = document.getElementById("div222")
div222.addEventListener("click", div222EliminarEvento)
function div222EliminarEvento() {
    yoSoy("div222")
    div222.removeEventListener("click", div222EliminarEvento)
}

const p222 = document.getElementById("p222")
p222.addEventListener("click", p222EliminarEvento)
function p222EliminarEvento() {
    yoSoy("p222")
    p222.removeEventListener("click", p222EliminarEvento)
}

const p111 = document.getElementById("p111")
p111.addEventListener("click", p111EliminarEvento)
function p111EliminarEvento() {
    yoSoy("p111")
    p111.removeEventListener("click", p111EliminarEvento)
}