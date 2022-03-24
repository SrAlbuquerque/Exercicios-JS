# Exercícios em JS :book:

**Para utilizar o js no terminal, basta ter o framework node.js instalado, ir no terminal e usar o comando "node nomeDoArquivo.js :blush:"**

**Exercícios voltados para fixação :bookmark:**

## Exercícios Coleções:

#### Atividade 1: Maps :one:

1. **Crie uma função que retorna o nome dos membros de um Map que tem o papel de 'ADMIN' no sistema.**   
*   Crie uma função getAdmins que recebe um Map;

* Crie um Map e popule-o com nomes de usuários e seus papéis no sistema (Ex: 'Luiz' => 'Admin');

* Dentro de getAdmins, utilize o loop **for...of** para retornar uma lista com os nomes dos usuários que são administradores;

#### Atividade 2: Sets :two:

2. **Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.**

## Exercícios Coleções: Debbung e Error Handling

#### Atividade 3: Validação de erros por tipo :three:

1. **O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário um erro será lançado.**
* Crie uma função que recebe um array e um número;

* Realize as seguintes validações;
  
  * Se os parâmetros não forem enviados, lance um erro do tipo **ReferenceError**;
  
  * Se o array não for do tipo 'objetct', lance um erro do tipo **TypeError**;
  
  * Se um número não for do tipo 'number', lance um erro do tipo **TypeError**;
  
  * Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo **RangeError**;

* Utilize a declaração **Try...Catch**;

* Filtre as chamadas de catch por cada tipo de erro utilizando o operador;

**Links Auxiliares**

* [Objeto Error](Error - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

* [instaceof](instanceof - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)

* [typeof](typeof - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)

* [try...catch](try...catch - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)


