// menu hamburguer
const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active')
})

// Formulario
const formulario = document.querySelector('#formulario');
const botaoFormulario = document.querySelector('#formulario-botao');

botaoFormulario.addEventListener('click', () => {
    formulario.className = 'edit';
    formulario.innerHTML = 'Obrigado! Responderei assim que possível!';
})

//carrossel
let carrosseis = document.getElementsByClassName('projetos-carrossel');

for(let i = 0; i < carrosseis.length; i++) {
    let carrossel = carrosseis[i];

    let itens = carrossel.getElementsByClassName('projetos-carrossel-item');
    let posicaoAnterior = 0;
    let mover = posicaoAnterior + 100

    for(let c = 0; c < itens.length; c++) {
        itens[c].style.right = mover + '%'

        posicaoAnterior = mover
    }
}