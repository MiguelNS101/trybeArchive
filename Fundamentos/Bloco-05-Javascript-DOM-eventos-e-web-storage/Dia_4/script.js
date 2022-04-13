function trocarBG(cor) {
    let caixa = document.querySelectorAll('.box');
    caixa[1].style.backgroundColor = cor;
    localStorage.setItem('colorBG', cor);
}

function trocarCorTexto(cor) {
    let paragrafo = document.querySelectorAll('.paragrafo');
    for(let i = 0; i < paragrafo.length; i += 1) {
        paragrafo[i].style.color = cor;
    }
    localStorage.setItem('corText', cor);
}

function tamanhoTexto(tam) {
    let paragrafo = document.querySelectorAll('.paragrafo');
    for(let i = 0; i < paragrafo.length; i += 1) {
        paragrafo[i].style.fontSize = tam;
    }
    localStorage.setItem('tamText', tam);
}

function tamanhoEspacamento(tam) {
    let paragrafo = document.querySelectorAll('.paragrafo');
    for(let i = 0; i < paragrafo.length; i += 1) {
        paragrafo[i].style.lineHeight = tam;
    }
    localStorage.setItem('tamanhoEspacamento', tam);
}

function tipoFonte(tam) {
    let paragrafo = document.querySelectorAll('.paragrafo');
    for(let i = 0; i < paragrafo.length; i += 1) {
        paragrafo[i].style.fontFamily = tam;
    }
    localStorage.setItem('fonteFav', tam);
}

function escolhaBot() {
    let botao = document.querySelectorAll('.bgColorOpt  button');
    for(let i = 0; i < botao.length; i += 1) {
        botao[i].addEventListener('click', function() {
            let opcoes = botao[i].innerText
            trocarBG(opcoes)
        })
    }
}
escolhaBot()

function escolhaBot2() {
    let botao = document.querySelectorAll('.textColorOpt  button');
    for(let i = 0; i < botao.length; i += 1) {
        botao[i].addEventListener('click', function() {
            let opcoes = botao[i].innerText
            trocarCorTexto(opcoes)
        })
    }
}
escolhaBot2()

function escolhaBot3() {
    let botao = document.querySelectorAll('.fontSizeOpt  button');
    for(let i = 0; i < botao.length; i += 1) {
        botao[i].addEventListener('click', function() {
            let opcoes = botao[i].innerText
            tamanhoTexto(opcoes)
        })
    }
}
escolhaBot3()

function escolhaBot4() {
    let botao = document.querySelectorAll('.fontHeightOpt  button');
    for(let i = 0; i < botao.length; i += 1) {
        botao[i].addEventListener('click', function() {
            let opcoes = botao[i].innerText
            tamanhoEspacamento(opcoes)
        })
    }
}
escolhaBot4()

function escolhaBot5() {
    let botao = document.querySelectorAll('.fontFamilyOpt  button');
    for(let i = 0; i < botao.length; i += 1) {
        botao[i].addEventListener('click', function() {
            let opcoes = botao[i].innerText
            tipoFonte(opcoes)
        })
    }
}
escolhaBot5()

function loadPref() {
    colorBG = localStorage.getItem('colorBG')
    corText = localStorage.getItem('corText')
    tamText = localStorage.getItem('tamText')
    tamEsp = localStorage.getItem('tamEsp')
    fonteFav = localStorage.getItem('fonteFav')
    trocarBG(colorBG)
    trocarCorTexto(corText)
    tamanhoTexto(tamText)
    tamanhoEspacamento(tamEsp)
    tipoFonte(fonteFav)
}
loadPref()