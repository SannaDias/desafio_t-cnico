function verificaFibonacci(numero) {
    let a = 0, b = 1;
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    if (b === numero) {
        return numero + " pertence à sequência de Fibonacci.";
    } else {
        return numero + " não pertence à sequência de Fibonacci.";
    }
}


let numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));
console.log(verificaFibonacci(numero));
