let arrayGerado = [];

function gerarArray() {
    arrayGerado = [];
    for (let i = 0; i < 10; i++) {
        arrayGerado.push(Math.floor(Math.random() * 100) + 1);
    }
    document.getElementById('arrayDisplay').innerHTML = 'Array gerado: ' + arrayGerado.join(', ');
}

function buscaLinear() {
    let alvo = parseInt(document.getElementById('alvoBusca').value);
    let encontrado = false;
    let indice = -1;
    for (let i = 0; i < arrayGerado.length; i++) {
        if (arrayGerado[i] === alvo) {
            encontrado = true;
            indice = i;
            break;
        }
    }
    document.getElementById('resultadoBusca').innerHTML = encontrado ? 'Encontrado na posição ' + indice : 'Não encontrado';
}
