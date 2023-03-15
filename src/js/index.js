/*

*1 - Pegar elemento HTML dos botões
*2 - Identificar clique
*3 - Desmarcar o botão selecionado anterior
*4 - Marcar novo botão clicado
*5 - Esconder Imagem anterior
*6 - Mostrar Imagem equivalente ao botão selecionado

*/

const buttonsimages = document.querySelectorAll('.buttons'); // Pegar elemento HTML dos botões

const listimage = document.querySelectorAll('.imagem');

buttonsimages.forEach((buttons, indice) => { // Identificar clique
    buttons.addEventListener('click', () => {

        unchekButton(); // Desmarcar o botão selecionado anterior

        buttons.classList.add('select'); // Marcar novo botão clicado

        hideImageSelect();  // Esconder Imagem anterior

       listimage[indice].classList.add('ativa') // Mostrar Imagem equivalente ao botão selecionado

    })
})

function hideImageSelect() {
    const imageselect = document.querySelector('.ativa');
    imageselect.classList.remove('ativa');
}

function unchekButton() {
    const buttonselect = document.querySelector('.select'); 
    buttonselect.classList.remove('select');
}

