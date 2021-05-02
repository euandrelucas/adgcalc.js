const calculadora = require("../functions/index");
const num = process.argv[2] || 50;
const tar = process.argv[3] || 2;

console.log("\x1b[32m%s\x1b[0m", "[CALCULADORA] | Iniciando");

console.log(calculadora.somar(num, tar));
console.log(calculadora.subtrair(num, tar));
console.log(calculadora.multiplicar(num, tar));
console.log(calculadora.dividir(num, tar));