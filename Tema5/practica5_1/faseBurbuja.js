const divGeneral1 = document.getElementById("divGeneral1")
divGeneral1.addEventListener("click", () => {
    yoSoy("divGeneral1")
})

const div1 = document.getElementById("div1")
div1.addEventListener("click", () => {
    yoSoy("div1")
})

const div2 = document.getElementById("div2")
div2.addEventListener("click", () => {
    yoSoy("div2")
})

const p2 = document.getElementById("p2")
p2.addEventListener("click", () => {
    yoSoy("p2")
})

const p1 = document.getElementById("p1")
p1.addEventListener("click", (evento) => {
    evento.stopPropagation();
    yoSoy("p1")
})