/**
 * Repare na conversão de dados abaixo
 */

let usuario = "10.5";

console.log(parseInt(usuario)); //10

console.log(parseFLoat(usuario)); //10.5

/**
 * Invertendo a conversão
 */

usuario = number.toString();

/**
 * Reconhecendo tipo de array
 */

let dados = [1, "João",{nome: "João"}];

console.log(typeof(dados)); //Object

/**
 * Acessar último item de um array
 */

console.log(dados[dados.length - 1]);

/**
 * Exemplos de ações com arrays
 */

dados.shift(); // Remove o primeiro item do array
dados.unshift("Isso"); //Adiciona um item a primeira posição do array

// O splice recebe a posição e quantos itens a partir da posição serão removidos array.splice(0,1)

// indexOf, a partir do elemento presente da array, utilizando a seguinte sintaxe: array.indexOf(elemento), retorna a posição do elemento

// slice copia um array

// o método de filter tem a seguinte sintaxe para filtrar informações de um array array.filter((item)=>item == 10)

// método find encontra uma informação do array, possui sintaxe muito parecida com o filter

// map é o cara