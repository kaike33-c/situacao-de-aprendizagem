function calcularOhm() {
    let v = parseFloat(document.getElementById('voltagem').value);
    let i = parseFloat(document.getElementById('corrente').value);
    let r = parseFloat(document.getElementById('resistencia').value);
    let resultado = '';
    if (!isNaN(v) && !isNaN(i)) {
        r = v / i;
        resultado = 'Resistência: ' + r.toFixed(2) + ' Ω';
    } else if (!isNaN(v) && !isNaN(r)) {
        i = v / r;
        resultado = 'Corrente: ' + i.toFixed(2) + ' A';
    } else if (!isNaN(i) && !isNaN(r)) {
        v = i * r;
        resultado = 'Voltagem: ' + v.toFixed(2) + ' V';
    } else {
        resultado = 'Insira pelo menos dois valores.';
    }
    document.getElementById('resultadoOhm').innerHTML = resultado;
}
