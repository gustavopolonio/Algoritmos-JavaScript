/*
  Criar uma função que recebe uma string e que retorna 
  a quantidade de vogais que essa string possui.
  As vogais são as letras a, e, i, o, u.
  A string fornecida consistirá apenas de letras minúsculas e/ou espaços. 
  A string não terá letras com acentos

  Casos teste:
  'abracadabra' deve retornar 5
  'schtrp mlqp' deve retornar 0
  'arroz e feijao' deve retornar 7
  ' ' deve retornar 0
*/

const str = "abracadabra"

function countVowels1(str) {
  // for (str e pega um caracter de cada vez)
    //   for (vogais e pega uma vogal de cada vez)
      //     if (caracter = vogal) => count++

  const vowels = ["a", "e", "i", "o", "u"]
  let count = 0
  
  for (var caracter = 0; caracter < str.length; caracter++) {
    for (var vowel = 0; vowel < vowels.length; vowel++) {
      if (str[caracter] === vowels[vowel]) {
        count++
      }
    }
  }
  
  return count
}

console.log(countVowels1(str))

function countVowels2(str) {
  return (str.match(/[aeiou]/g)||[]).length
}

console.log(countVowels2(str))
