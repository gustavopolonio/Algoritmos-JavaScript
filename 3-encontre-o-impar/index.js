/*
  Crie uma função que recebe um array de números inteiros, e retorne um tipo numérico 
  com o único número do array que aparece uma quantidade ímpar de vezes.
  Sempre haverá apenas um inteiro que aparece numa quantidade ímpar de vezes.

  CASOS TESTE:
  [7] deve retornar 7, porque ele aparece 1 vez (1 é ímpar).
  [0] deve retornar 0, porque ele aparece 1 vez (1 é ímpar).
  [1,1,2] deve retornar 2, porque ele aparece 1 vez (1 é ímpar).
  [4,1,4,1,4] deve retornar 4, porque ele aparece 3 vezes (3 é ímpar).
  [1,2,2,3,3,3,4,3,3,3,2,2,1] deve retornar 4, porque ele aparece 1 vez (1 é ímpar).
*/

/*
  - Analisar cada posição do array (cada número) usando for
  - Criar um objeto, e adicionar quais números apareceram e a qtd de vezes que apareceram
  - Ver no objeto qual número que apareceu uma qtd impar de vezes
*/

function findOdd(array) {
  let obj = {}

  for (number of array) {
    // if (obj[number]) {
    //   obj[number] = obj[number] + 1
    // } else {
    //   obj[number] = 1
    // }

    obj[number] ? obj[number]++ : obj[number] = 1
  }

  return Number(Object.keys(obj).find(key => obj[key] % 2 !== 0))
  // ans = Number(ans)
  // return ans
}

const array = [1,2,2,3,3,3,4,3,3,3,2,2,1]
const result = findOdd(array)
console.log(result)