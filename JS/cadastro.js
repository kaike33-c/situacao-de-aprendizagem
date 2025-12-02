function gravarDados() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    if (nome && email) {
        // Simulação de gravação (em um app real, enviaria para backend)
        document.getElementById('resultadoCadastro').innerHTML = 'Dados gravados: Nome: ' + nome + ', Email: ' + email;
    } else {
        document.getElementById('resultadoCadastro').innerHTML = 'Preencha todos os campos.';
    }
}
