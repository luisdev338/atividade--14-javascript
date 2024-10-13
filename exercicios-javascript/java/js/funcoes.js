/* funcoes - 1*/
function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}

function calcularDivisao() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if (num1 && num2) {
        num1 = Number(num1);
        num2 = Number(num2);

        var resultado = dividir(num1, num2);
        document.getElementById('resultado').innerHTML = 
            'Resultado: ' + resultado;
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira ambos os números.';
    }
}

/* funções - 2 */
function ordenarStrings(lista) {
    return lista.sort((a, b) => a.localeCompare(b)); 
}

function ordenarLista() {
    var entrada = document.getElementById('strings').value;

    if (entrada) {
        var lista = entrada.split(',').map(item => item.trim()); 
        var listaOrdenada = ordenarStrings(lista);
        
        document.getElementById('resultado').innerHTML = 
            'Lista ordenada: ' + listaOrdenada.join(', ');
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira uma lista de palavras.';
    }
}
/* funções - 3 */
function encontrarMaiorNumero(array) {
    return Math.max(...array); 
}

function encontrarMaior() {
    var entrada = document.getElementById('numeros').value;

    if (entrada) {
        var arrayNumeros = entrada.split(',').map(Number); 
        
        if (arrayNumeros.every(num => !isNaN(num))) {
            var maiorNumero = encontrarMaiorNumero(arrayNumeros);
            document.getElementById('resultado').innerHTML = 
                'O maior número é: ' + maiorNumero;
        } else {
            document.getElementById('resultado').innerHTML = 
                'Por favor, insira apenas números válidos.';
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira uma lista de números.';
    }
}
/* funções - 4 */
function inverterString() {
    let str = document.getElementById("inputString").value;
    let strInvertida = str.split("").reverse().join("");
    document.getElementById("resultado").textContent = "String invertida: " + strInvertida;
}
