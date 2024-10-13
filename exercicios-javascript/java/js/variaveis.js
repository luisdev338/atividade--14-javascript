function converter() {
    
    let celsius = parseFloat(document.getElementById("celsius").value);
    
   
    let fahrenheit = (celsius * 9/5) + 32;

  
    document.getElementById("resultado").innerText = `A temperatura em graus Fahrenheit é: ${fahrenheit.toFixed(2)}°F`; }

   
    function calcularArea() {
        var base = document.getElementById('base').value;
        var altura = document.getElementById('altura').value;

        if (base && altura) {
            var area = (base * altura) / 2;
            document.getElementById('resultado').innerHTML = 'A área do triângulo é: ' + area + ' cm²';
        } else {
            document.getElementById('resultado').innerHTML = 'Por favor, insira ambos os valores.';
        }
    }

   
    function calcular() {
        var numero = document.getElementById('numero').value;

        if (numero) {
            var quadrado = numero * numero;
            var cubo = numero * numero * numero;
            document.getElementById('resultado').innerHTML = 
                'Quadrado: ' + quadrado + '<br>Cubo: ' + cubo;
        } else {
            document.getElementById('resultado').innerHTML = 'Por favor, insira um número.';
        }
    }
   
    
    function calcularPotencia() {
        var base = document.getElementById('base').value;
        var expoente = document.getElementById('expoente').value;

        if (base && expoente) {
            var potencia = Math.pow(base, expoente);
            document.getElementById('resultado').innerHTML = 
                base + ' elevado a ' + expoente + ' é igual a: ' + potencia;
        } else {
            document.getElementById('resultado').innerHTML = 'Por favor, insira ambos os valores.';
        }
    }


    