y = 50;

function numero(){
    y=200;
    console.log(y);
}
numero();
//console.log(y); // nao imprimi o 200

//atribuir funcao a uma variavel
quadrado = function(x){
    console.log(x * x);
}
quadrado(5);
quadrado(1);
quadrado(10);
console.log(typeof(quadrado));