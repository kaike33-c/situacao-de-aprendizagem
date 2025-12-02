function converterTemp() {
    let temp = parseFloat(document.getElementById('temp').value);
    let unidade = document.getElementById('unidade').value;
    let resultado = '';
    if (unidade === 'C') {
        resultado = (temp * 9/5) + 32 + ' °F';
    } else {
        resultado = (temp - 32) * 5/9 + ' °C';
    }
    document.getElementById('resultadoTemp').innerHTML = 'Convertido: ' + resultado;
}
