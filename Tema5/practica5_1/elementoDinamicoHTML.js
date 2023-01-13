const crearParrafo = document.getElementById("crearParrafo")
const divElementoDinamico = document.getElementById("divElementoDinamico")

crearParrafo.addEventListener("click", crearNuevoParrafo)

function crearNuevoParrafo() {
    const parrafo = document.createElement('p')
    const texto = document.createTextNode('Parrafo creado de forma dinamica')
    parrafo.setAttribute("id", "p1111")
    parrafo.appendChild(texto);
    divElementoDinamico.appendChild(parrafo);
    parrafo.addEventListener("click", () => {
        yoSoy("parrafo nuevo")
    })
}