// Variável = pequeno espaço na memória do pc para armazenar um valor.

let pesoPeca = 100

// pesoPeca - Camel case
// peso_peca - Snak case
// PesoPeca - Pascal

if (pesoPeca > 100) {
    console.log("Peso maior que 100g")
} else {
    console.log("Peso insuficiente, não é possível cadastrar.")
}

let numeroPecas = 10

if(numeroPecas < 10){
    console.log("Ainda há espaço na caixa, podemos cadastrar a peça")
} else {
    console.log("Não há espaço disponível na caixa")
}

let nomePeca = 'Disco' 

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length < 3){
    console.log("Nome da peça muito curto, não pode cadastrar")
} else {
    console.log("Nome de peça adequado, podemos cadastrar")
}

