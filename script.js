// menu hamburguer
const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active')
})

// Formulario
const formulario = document.querySelector('#formulario');
const botaoFormulario = document.querySelector('#formulario-botao');

function submit (event) {
    formulario.className = 'edit';
    formulario.innerHTML = 'Obrigado! Responderei assim que possível!';
    event.preventDefault();
}

formulario.addEventListener('submit', submit)

// particulas
particlesJS.load('particles-container', 'particlesjs-config.json');