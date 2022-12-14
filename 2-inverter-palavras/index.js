/* 
  Faça uma função que recebe uma string como parâmetro. Essa string terá uma ou mais palavras.
  A função deve retornar a mesma string, mas com todas as palavras que tenham 5 ou mais 
  letras invertidas.
  As strings fornecidas consistirão apenas de letras e espaços. Os espaçoes serão
  incluídos apenas entre duas palavras.

  Casos teste:
  "Entre" deve retornar "ertnE"
  "Casa Branca e verde" deve retornar "Casa acnarB e edrev"
  "Este é um teste" deve retornar "Este é um etset"
  "Este é o último teste" deve retornar "Este é o omitlú etset"
  "Eu estava brincando ainda tem mais um" deve retornar "Eu avatse odnacnirb adnia tem mais um"
  "Prometo que esse é o último" deve retornar "otemorP que esse é o omitlú"
*/

/*
 - Tranfomar string num Array => split()
 - for pelo para analisar cada uma das posições (palavras)
 - if else => palavra tem 5 ou mais letras
 - Se tiver => inverter a palavra. como?
   - transformar a palvra (string) num array => split()
   - inverter o array => reverse()
   - juntar as letras desse array => join()
 - Juntar as palavras do array => join()
*/

function spinWord(string) {
  const words = string.split(" ")
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      words[i] = words[i].split("").reverse().join("")
    }
  }

  return words.join(" ")
}

function spinWord2(string) {
  return string.split(" ").map(word => 
    (word.length > 4) ? word.split("").reverse().join("") : word
  ).join(" ")
}



const str = "Casa Branca e verde"
const ans = spinWord2(str)
console.log(ans)