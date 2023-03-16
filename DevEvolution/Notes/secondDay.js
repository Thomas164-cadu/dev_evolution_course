 /**
  * Observe o Object.assign()
  */

 const target = {a: 1, b:2};
 const source = {b:3, c: 4};

 const returnedTarget = Object.assign(target, source); //o source sempre irá sobreescrever o target

 console.log(returnedTarget); // {a:1,b:3,c:4}

 //Target é o destino, e o source é a entrada

 Object.keys(target) //retorna as chaves do objeto em formato de array
 Object.values(target) //retorna os valores do objeto em formato de array
 Object.freeze(target) //congela o objeto para não permitir a alteração de seus dados

 //A comparação de dois objetos sempre retornará false independente se os valores forem iguais

 //Para que a comparação seja true, o primeiro devem refenciar o segundo objeto objeto1 = objeto2

/**
 * Em relação a loops, especiais do JS, trabalham com in e of, in com índices, e of quando não há índices
 */

for(let i in frutas){
    console.log(frutas[i]);
}
  
for(let fruta of frutas){
    console.log(fruta);
}

