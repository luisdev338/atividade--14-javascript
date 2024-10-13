
const produtos = [
    { nome: 'Produto 1', preco: 10.0, quantidade: 5 },
    { nome: 'Produto 2', preco: 20.0, quantidade: 3 },
    { nome: 'Produto 3', preco: 7.5, quantidade: 10 },
    { nome: 'Produto 4', preco: 50.0, quantidade: 2 },
    { nome: 'Produto 5', preco: 15.0, quantidade: 6 }
];


function calcularValorTotal() {
    let valorTotal = 0;
    for (let produto of produtos) {
        valorTotal += produto.preco * produto.quantidade;
    }
    document.getElementById("resultado").textContent = "Valor total em estoque: R$ " + valorTotal.toFixed(2);
}
//manipulação de objeto - 2 
const estudante = {
    nome: 'João Silva',
    notas: [6.5, 8.0, 7.5, 9.0],
    
   
    calcularMedia: function() {
        let soma = 0;
        for (let nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length;
    },

   
    verificarAprovacao: function() {
        let media = this.calcularMedia();
        return media >= 7 ? 'Aprovado' : 'Reprovado';
    }
};


function verificarAprovacao() {
    let status = estudante.verificarAprovacao();
    document.getElementById("resultado").textContent = `O estudante ${estudante.nome} está ${status}. Média: ${estudante.calcularMedia().toFixed(2)}`;
}
//manipulação de objeto - 3
const funcionarios = [
    { nome: 'Ana', salario: 2500 },
    { nome: 'Carlos', salario: 3000 },
    { nome: 'Maria', salario: 2800 },
    { nome: 'João', salario: 3500 },
    { nome: 'Pedro', salario: 2200 }
];


function calcularSomaSalarios() {
    let somaSalarios = 0;
    for (let funcionario of funcionarios) {
        somaSalarios += funcionario.salario;
    }
    document.getElementById("resultado").textContent = "Soma total dos salários: R$ " + somaSalarios.toFixed(2);
}
//manipulação de objeto - 4

const estudantes = [
    { nome: 'Ana', notas: [8.0, 9.0, 7.5] },
    { nome: 'Carlos', notas: [6.5, 7.0, 5.5] },
    { nome: 'Maria', notas: [9.0, 8.5, 10.0] },
    { nome: 'João', notas: [7.0, 6.5, 7.5] },
    { nome: 'Pedro', notas: [5.5, 6.0, 6.5] }
];

// Função para calcular a média das notas de um estudante
function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

// Função para calcular a média geral de todos os estudantes
function calcularMediaGeral() {
    let somaTotal = 0;
    let quantidadeEstudantes = estudantes.length;

    for (let estudante of estudantes) {
        somaTotal += calcularMedia(estudante.notas);
    }

    return somaTotal / quantidadeEstudantes;
}

// Função que retorna os estudantes que estão acima da média geral
function estudantesAcimaDaMedia() {
    const mediaGeral = calcularMediaGeral();
    let resultado = `Média geral: ${mediaGeral.toFixed(2)}\nEstudantes acima da média:\n`;

    for (let estudante of estudantes) {
        const mediaEstudante = calcularMedia(estudante.notas);
        if (mediaEstudante > mediaGeral) {
            resultado += `${estudante.nome} - Média: ${mediaEstudante.toFixed(2)}\n`;
        }
    }

    // Exibir o resultado no parágrafo
    document.getElementById("resultado").textContent = resultado.trim() || "Nenhum estudante acima da média.";
}

