//lacos - 1
function imprimirImpares() {
    let resultado = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            resultado += i + ' ';
        }
    }
    document.getElementById("resultado").textContent = resultado.trim();
}
//lacos - 2
function imprimirNumeros() {
    let resultado = '';
    for (let i = 1; i <= 50; i++) {
        if (i % 5 === 0) {
            resultado += i + ' (múltiplo de 5)\n';
        } else {
            resultado += i + '\n';
        }
    }
    document.getElementById("resultado").textContent = resultado;
}
//lacos - 3
function calcularSoma() {
    let num = parseInt(document.getElementById("numero").value);
    if (isNaN(num) || num < 1) {
        document.getElementById("resultado").textContent = "Por favor, insira um número válido maior que 0.";
        return;
    }
    
    let soma = 0;
    for (let i = 1; i <= num; i++) {
        soma += i;
    }
    
    document.getElementById("resultado").textContent = "A soma de 1 até " + num + " é: " + soma;
}

