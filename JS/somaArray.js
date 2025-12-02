function somarAleatorios() {
    let arr = [];
    let soma = 0;
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * 220) + 1;
        arr.push(num);
        soma += num;
    }
    document.getElementById('resultadoSoma').innerHTML = 'Números: ' + arr.join(', ') + '<br>Soma: ' + soma;
}
