function pesquisaBinaria(lista, item) {
    var baixo = 0;
    var alto = lista.length -1;
    while (baixo <= alto) {
        var meio = Math.ceil((baixo + alto)/2);
        var chute = lista[meio];
        if (chute == item) {
            console.log("O index de " + item + " é " + meio);
            return meio;
        }else if (chute > item) {
            alto = meio - 1;
        }else{
            baixo = meio + 1;
        }
    }  
    console.log(meio)
  }
  
//Gerando vetor para testes
let meuArray = new Array();
for (let index = 0; index < 1000 ; index++) {
    meuArray[index] = index*3;
}

//Testes
let teste = pesquisaBinaria(meuArray, 267);
console.log(meuArray[teste]);
