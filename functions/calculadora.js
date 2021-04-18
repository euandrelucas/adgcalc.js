const calculadora = {}

calculadora.somar = function(soma1,soma2) {
    try {
    if(isNaN(soma1)) return console.log("[ERRO] | soma1 isNaN")
    if(isNaN(soma2)) return console.log("[ERRO] | soma1 isNaN")
    return(eval(soma1+soma2))
    //return console.log(`\x1b[36m%s\x1b[0m`, `[SOMA] | Resultado: ${eval(soma1+soma2)}`)
    } catch(erro) {
        console.log(`\x1b[31m%s\x1b[0m`, `[SOMA] | Erro: ${erro}`)
    }
}

calculadora.subtrair = function(sub1,sub2) {
    try {
    if(isNaN(sub1)) return console.log("[ERRO] | sub1 isNaN")
    if(isNaN(sub2)) return console.log("[ERRO] | sub2 isNaN")
    return(eval(sub1-sub2))
    //return console.log(`\x1b[36m%s\x1b[0m`, `[SUBTRAIR] | Resultado: ${eval(sub1-sub2)}`)
    } catch(erro) {
        console.log(`\x1b[31m%s\x1b[0m`, `\x1b[36m%s\x1b[0m`, `[SUBTRAIR] | Erro: ${erro}`)
    }
}

calculadora.dividir = function(div1,div2) {
    try {
    if(isNaN(div1)) return console.log("[ERRO] | div1 isNaN")
    if(isNaN(div2)) return console.log("[ERRO] | div2 isNaN")
    return(eval(div1/div2))
    //return console.log(`\x1b[36m%s\x1b[0m`, `[DIVIDIR] | Resultado: ${eval(div1/div2)}`)
    } catch(erro) {
    console.log(`\x1b[31m%s\x1b[0m`, `[DIVIDIR] | Erro: ${erro}`)
   }
}

calculadora.multiplicar = function(multi1,multi2) {
    try {
    if(isNaN(multi1)) return console.log("[ERRO] | multi1 isNaN")
    if(isNaN(multi2)) return console.log("[ERRO] | multi2 isNaN")
    return(eval(multi1*multi2))
    //return console.log(`\x1b[36m%s\x1b[0m`, `[MULTIPLICAR] | Resultado: ${eval(multi1*multi2)}`)
    } catch(erro) {
    console.log(`\x1b[31m%s\x1b[0m`, `[MULTIPLICAR] | Erro: ${erro}`)
    }
}

module.exports = calculadora