const texto = document.querySelector('.texto-lorem');

const botaoS = document.querySelector('#s-texto');
botaoS.onclick = () => {
    if (!texto.style.textDecoration || texto.style.textDecoration === 'none') {
        texto.style.textDecoration = 'underline';
    } else {
        texto.style.textDecoration = 'none'
    }
}

const botaoI = document.querySelector('#i-texto');
botaoI.onclick = () => {
    if (!texto.style.fontStyle || texto.style.fontStyle === 'normal') {
        texto.style.fontStyle = 'italic';
    } else {
        texto.style.fontStyle = 'normal'
    }
}

const botaoN = document.querySelector('#n-texto');
botaoN.onclick = () => {
    if (!texto.style.fontWeight || texto.style.fontWeight === 'normal') {
        texto.style.fontWeight = 'bold';
    } else {
        texto.style.fontWeight = 'normal'
    }
}

const tamanhoFonte = document.querySelector('.tamanho-fonte')
const aumentarFonte = document.querySelector('#maior-texto');
const diminuirFonte = document.querySelector('#menor-texto');

function definirFonte() {
    return parseInt(texto.style.fontSize.split('px')[0] || 16);
}

diminuirFonte.onclick = () => {
    if (definirFonte() > 12) {
        texto.style.fontSize = `${definirFonte() - 2}px`
    }
    tamanhoFonte.textContent = definirFonte();
}

aumentarFonte.onclick = () => {
    texto.style.fontSize = `${definirFonte() + 2}px`
    tamanhoFonte.textContent = definirFonte();
}

const textoVermelho = document.querySelector('.botao-vermelho');
textoVermelho.onclick = () => {
    texto.style.color = 'red';
}

const textoAzul = document.querySelector('.botao-azul');
textoAzul.onclick = () => {
    texto.style.color = 'blue';
}

const textoRoxo = document.querySelector('.botao-roxo');
textoRoxo.onclick = () => {
    texto.style.color = 'purple';
}

const textoPreto = document.querySelector('.botao-preto');
textoPreto.onclick = () => {
    texto.style.color = 'black';
}
