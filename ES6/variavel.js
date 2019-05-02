/**
 * @var = escopo global ou de função sempre. Mesmo que seja declarado em um bloco (for, if, etc) passará pelo processo chamado hosting
 * e irá subir até o escopo da função ou global (caso não esteja dentro de uma função)
 * 
 * @let = escopo de bloco. As variáveis só podem ser acessadas no próprio escopo ou escopos filhos
 * 
 * @const = variável constante, não pode ser alterada e tem escopo igual o do @let
 */

var nome = "Ricardo Matias";
let hostingError = "Error";

if(true) {
    //nome = "Update Ricardo";
    //var nome = "Update Ricardo";
    let nome2 = "Update Ricardo";
    //var hostingError = "Error2"; Identifier 'hostingError' has already been declared
    console.log(nome2);
}

console.log(nome);

function escopoTest() {
    for(let i = 0; i < 5; i++) {
        if (i == 3) {
            var teste = "Escopo";
            console.log(teste + " primeiro bloco"); 
        }
       
        if(i == 4) {
            console.log(teste + " segundo bloco");
        }
        
    }

    console.log(teste + " da função");
}

escopoTest();

