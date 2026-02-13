// Exercício 3: Troca de valores

// Declare duas variáveis, a e b, com valores diferentes.
let a = 13;
let b = 23;

// Troque os valores entre elas usando uma terceira variável temporária.
const c = a;
a = b;
b = c;

// Imprima os valores após a troca.
console.log(a, b);