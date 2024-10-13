function verificarNumero() {
    var numero = document.getElementById('numero').value;

    if (numero) {
        numero = Number(numero); // Converter para número
        if (numero >= 1 && numero <= 100) {
            document.getElementById('resultado').innerHTML = 'O número ' + numero + ' está entre 1 e 100.';
        } else {
            document.getElementById('resultado').innerHTML = 'O número ' + numero + ' NÃO está entre 1 e 100.';
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um número válido.';
    }
}

//condicionais - 2
function classificarIdade() {
    var idade = document.getElementById('idade').value;

    if (idade) {
        idade = Number(idade); // Converter para número
        var classificacao;
        
        if (idade >= 0 && idade <= 12) {
            classificacao = 'Criança';
        } else if (idade >= 13 && idade <= 17) {
            classificacao = 'Adolescente';
        } else if (idade >= 18) {
            classificacao = 'Adulta';
        } else {
            classificacao = 'Idade inválida';
        }
        
        document.getElementById('resultado').innerHTML = 
            'A pessoa com ' + idade + ' anos é classificada como: ' + classificacao;
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira uma idade válida.';
    }
}

//condicionais - 3
function verificarDias() {
    var mes = document.getElementById('mes').value;
    var dias;

    if (mes) {
        mes = Number(mes); // Converter para número

        switch(mes) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                dias = 31;
                break;
            case 4: case 6: case 9: case 11:
                dias = 30;
                break;
            case 2:
                dias = 28; // Não estamos considerando anos bissextos aqui
                break;
            default:
                dias = null;
                break;
        }

        if (dias) {
            document.getElementById('resultado').innerHTML = 
                'O mês ' + mes + ' possui ' + dias + ' dias.';
        } else {
            document.getElementById('resultado').innerHTML = 'Mês inválido.';
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um número de mês válido.';
    }
}

//condicionais - 4 
function verificarNumero() {
    var numero = document.getElementById('numero').value;

    if (numero) {
        numero = Number(numero); // Converter para número

        if (numero > 0) {
            document.getElementById('resultado').innerHTML = 'O número ' + numero + ' é positivo.';
        } else if (numero < 0) {
            document.getElementById('resultado').innerHTML = 'O número ' + numero + ' é negativo.';
        } else {
            document.getElementById('resultado').innerHTML = 'O número é zero.';
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um número válido.';
    }
}