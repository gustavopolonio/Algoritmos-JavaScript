/*
  Escreva uma função que recebe uma string como parâmetro e reverte os caracteres 
  dessa string que estão dentro de parênteses.

  Obs: Os parênteses podem estar aninhados.

  CASOS TESTE:
  -> Entrada "(bar)" => deve retornar "rab"
  -> Entrada "foo(bar)baz" => deve retornar "foorabbaz"
  -> Entrada "()" => deve retornar ""
  -> Entrada "foo(bar)baz(blim)" => deve retornar "foorabbazmilb"
  -> Entrada "foo(bar(baz))blim" => deve retornar "foobazrabblim"
  Porque: "foo(bar(baz))blim" => "foo(barzab)blim" => "foobazrabblim"
*/

/*
  - Achar o parenteses mais interno (procurar o 1o parentese de fechamente que aparece)
  - Achar o paranteses de abertura dele (procurar o último parentese de abertura que aparece)
  - Inverter a string que está dentro desse parentese
  - Juntar a string invertida com a original
  - Repetir o processo até não ter mais parenteses

  EXEMPLOS:

  "foo(bar)baz(blim)" => "foo(bar" => "bar" inverter para "rab"
  "foo" + "rab" + "baz(blim)"

  "foo(bar(baz))blim" => "foo(bar(baz" => "baz" inverter para "zab"
  "foo(bar" + "zab" + ")blim" = "foo(barzab)blim"
*/

function reverseStr(string) {
  while(true) {
    const indexOfFirstEnd = string.indexOf(")")
    if (indexOfFirstEnd === -1) break
  
    const stringUntilFirstEnd = string.substring(0, indexOfFirstEnd)
    const indexOfLastInital = stringUntilFirstEnd.lastIndexOf("(")
    const stringToReverse = stringUntilFirstEnd.substring(indexOfLastInital + 1, stringUntilFirstEnd.length)
    const reversedString = stringToReverse.split("").reverse().join("")
  
    const initial = string.substring(0, indexOfLastInital)
    const middle = reversedString
    const end = string.substring(indexOfFirstEnd + 1, string.length)
    string = initial + middle + end
  }

  return string
}

const ans = reverseStr("foo(bar(baz))blim")
console.log(ans)