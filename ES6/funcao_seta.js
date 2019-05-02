/**
 * @arrow_function : possibilita o uso de funções eliminando a palavra reservada @function
 * - caso a função só tenha um parametro não é necessário utilizar os parenteses, commo observado na linha 14
 * - quando a função é simples que recebe um parametro e dá um retorno simples, pode omitir até as chaves e o @return,
 * como na linha 24
 */

var dobro_do_valor = function(valor) {
    return valor * 2;
}

var triplo_do_valor = (valor) => {
    return valor * 3;
}

var quadruplo_do_valor = valor => {
    return valor * 4;
}

teste = (valor) => {
    console.log(valor);
}

var quintuplo_do_valor = valor => valor * 5;


console.log(dobro_do_valor(2));
console.log(triplo_do_valor(2));
console.log(quadruplo_do_valor(2));
teste(2);
console.log(quintuplo_do_valor(2));
