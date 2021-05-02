function calcular(num, tar, oper) {
    return isNaN(num) || isNaN(tar) ? "Unknown number" : eval(num + oper + tar);
}

module.exports = {
    somar: (num, tar) => calcular(num, tar, '+'),
    subtrair: (num, tar) => calcular(num, tar, '-'),
    multiplicar: (num, tar) => calcular(num, tar, '*'),
    dividir: (num, tar) => calcular(num, tar, '/')
}