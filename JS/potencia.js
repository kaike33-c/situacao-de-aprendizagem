function calcularPotencia() {
    let v = parseFloat(document.getElementById('potVoltagem').value);
    let i = parseFloat(document.getElementById('potCorrente').value);
    let r = parseFloat(document.getElementById('potResistencia').value);
    let p = 0;
    if (!isNaN(v) && !isNaN(i)) {
        p = v * i;
    } else if (!isNaN(i) && !isNaN(r)) {
        p = i * i * r;
    } else if (!isNaN(v) && !isNaN(r)) {
        p = (v * v) / r;
    } else {
        document.getElementById('resultadoPotencia').innerHTML = 'Insira pelo menos dois valores.';
        return;
    }
    document.getElementById('resultadoPotencia').innerHTML = 'Potência: ' + p.toFixed(2) + ' W';
}
