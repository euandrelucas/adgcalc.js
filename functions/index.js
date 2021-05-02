// exemplo: calcular('+', 1, 2, 3, 4)
function calcular(operador,...ns) {
    return eval(`${ns.join(operador)}`);
}
// calc.somar(1, 1, 1)
module.exports = {
    somar: (...numeros) => calcular('+', ...numeros),
    subtrair: (...numeros) => calcular('-', ...numeros),
    multiplicar: (...numeros) => calcular('*',...numeros),
    dividir: (...numeros) => calcular('/', ...numeros)
}