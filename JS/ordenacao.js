function ordenarCrescente() {
    let arr = [];
    for (let i = 1; i <= 20; i++) arr.push(i);
    document.getElementById('resultadoOrdenacao').innerHTML = 'Crescente: ' + arr.join(', ');
}

function ordenarDecrescente() {
    let arr = [];
    for (let i = 20; i >= 1; i--) arr.push(i);
    document.getElementById('resultadoOrdenacao').innerHTML = 'Decrescente: ' + arr.join(', ');
}
