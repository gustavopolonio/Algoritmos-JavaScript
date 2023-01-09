/*
  Faça uma função que recebe dois parâmetros, a e b, que são duas listas. E retorne 
  a subtração entre essas listas.
  A função deve remover todos os valores da lista a que estão presentes na lista b,
  mantendo a ordem.

  CASOS TESTE:
  arrayDiff([1,2],[1]) => deve retornar [2]
  arrayDiff([1,2,2,2,3],[2]) => deve retornar [1,3]
  arrayDiff([1,2,2],[1]) => deve retornar [2,2]
  arrayDiff([],[1,2]) => deve retornar []
  arrayDiff([-11,4,20,19,13,-7,-9,19,0,-9,-1,9,-11],[-11,4,20,19,13,-7]) => deve retornar [-9,0,-9,-1,9]
*/

/*
  - Rodar pela lista a, analisando um número de cada vez
  - Checar se esse número está lista b (método includes)
    - Se estiver: removê-lo da lista a
    - Senão: deixá-lo na lista a
*/

function arrayDiff(a, b) {
  const filtered = a.filter(number => !b.includes(number))

  return filtered
}

// Set()
function ArrayDiff2(a, b) {
  const mySet = new Set(b)
  const filtered = a.filter(number => !mySet.has(number))

  return filtered
}


console.log(ArrayDiff2([-11,4,20,19,13,-7,-9,19,0,-9,-1,9,-11],[-11,4,20,19,13,-7]))