function bubbleSortAleatorios() {
    let arr = [];
    for (let i = 0; i < 10; i++) arr.push(Math.floor(Math.random() * 20) + 1);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    document.getElementById('resultadoBubble').innerHTML = 'Ordenado: ' + arr.join(', ');
}
