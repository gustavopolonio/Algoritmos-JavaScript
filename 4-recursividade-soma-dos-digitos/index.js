/*
  Crie uma função que recebe como parâmetro um número n e que retorna a soma dos
  dígitos de n.
  Se a soma dos dígitos tem mais do que um dígito, continue fazendo esse processo até
  que seja retornado um número com apenas um dígito.
  n é um número inteiro e positivo.

  CASOS TESTE:
  n = 0 --> 0
  n = 16  -->  1 + 6 = 7
  n = 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  n = 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  n = 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

/*
  - Checar se n > 9
  - True: Fazer a soma os digitos de n
  - Checar se o número resultante da soma é maior do que 9
    True: fazer a soma desses digitos

  RECURSIVIDADE: função que invoca ela mesma
*/

function recursiveSum(n) {
  if (n > 9) {
    let sum = 0

    while(n) {
      sum = sum + (n % 10)
      n = Math.floor(n / 10)
    }

    return recursiveSum(sum)
  }

  return n
}

const result = recursiveSum(493193)
console.log(result)