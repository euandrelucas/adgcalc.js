const calculadora = require("../functions/calculadora");
const {arg1, arg2} = require("./config.json");

console.log("\x1b[32m%s\x1b[0m", "[CALCULADORA] | Iniciando");

calculadora.somar(arg1, arg2);
calculadora.dividir(arg1, arg2);
calculadora.subtrair(arg1, arg2);
calculadora.multiplicar(arg1, arg2);