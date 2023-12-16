const conteiner = document.querySelector('.main-conteiner');
const toggle = document.querySelector('.header__theme-button');

toggle.addEventListener('click', () => {
    conteiner.classList.toggle('dark');
})

