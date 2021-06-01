// alert("Olá mundo!");
const imagemBloqueada = document.getElementById("imagemBloqueada");
const imagemDesbloqueada = document.getElementById('imagemDesbloqueada');
const botaoDesbloquearAtivo = document.getElementById('desbloquearAtivo');
const botaoDesbloquearDisabled = document.getElementById("desbloquearDisabled");
const textoBloqueado = document.getElementById('textoBloqueado');
const textoDesbloqueado = document.getElementById('textoDesbloqueado');

document.getElementById("botaoDesbloquear").addEventListener("click", function () {
    imagemBloqueada.setAttribute('class', 'esconder');
    imagemDesbloqueada.setAttribute("class", "mostrar");
    botaoDesbloquearAtivo.setAttribute("class", "esconder");
    botaoDesbloquearDisabled.setAttribute("class", "mostrar");
    textoBloqueado.setAttribute('class', 'esconder')
    textoDesbloqueado.setAttribute('class', 'mostrar')
});

document.getElementById("botaoBloquear").addEventListener("click", function () {
    imagemBloqueada.setAttribute('class', 'mostrar');
    imagemDesbloqueada.setAttribute('class', 'esconder');
    botaoDesbloquearAtivo.setAttribute("class", "mostrar");
    botaoDesbloquearDisabled.setAttribute("class", "esconder");
    textoBloqueado.setAttribute('class', 'mostrar')
    textoDesbloqueado.setAttribute('class', 'esconder')
});