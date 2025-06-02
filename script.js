// menu hamburguer
const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active')
})

// Formulario
const formulario = document.querySelector('#formulario');
const botaoFormulario = document.querySelector('#formulario-botao');

function submit () {
    formulario.className = 'edit';
    formulario.innerHTML = 'Obrigado! Responderei assim que possível!';
}

botaoFormulario.addEventListener('submit', submit)

//menu lateral
const menuLateral = document.querySelectorAll('.menu-lateral-item');

menuLateral.forEach(item => {
    item.addEventListener('click', () => {
        //remove a classe 'selected' de todos os botoes
        menuLateral.forEach(bnt => bnt.classList.remove('selected'));

        //Adiciona a classe 'selected' ao item clicado
        item.classList.add('selected');
    })
})

// particulas
particlesJS.load('particles-container', 'particlesjs-config.json');