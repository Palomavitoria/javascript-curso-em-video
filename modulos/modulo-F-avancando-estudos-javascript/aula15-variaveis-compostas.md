# Aula 15 — Variáveis Compostas

## 📖 Introdução

Nesta aula foram apresentados os conceitos de **variáveis compostas**, conhecidas em JavaScript como **arrays (vetores)**.

Diferente das variáveis simples, um array pode armazenar vários valores em uma única estrutura, facilitando a organização e manipulação de dados.

Também foram apresentados alguns dos principais métodos e propriedades dos arrays.

---

## 🧠 Conceitos abordados

- variáveis compostas
- arrays (vetores)
- elementos de um vetor
- índices (posições)
- método `push()`
- método `sort()`
- propriedade `length`
- método `indexOf()`
- estrutura de repetição `for`
- estrutura `for...in`

---

## 📌 O que é um Array?

Um **array** é uma variável capaz de armazenar vários valores ao mesmo tempo.

Exemplo:

```javascript
let num = [5, 8, 2, 9, 3]
```

Cada valor ocupa uma posição, iniciando sempre no índice **0**.

---

## 📌 Métodos apresentados

### `push()`

Adiciona um novo elemento ao final do vetor.

```javascript
num.push(1)
```

---

### `sort()`

Organiza os elementos em ordem crescente.

```javascript
num.sort()
```

---

### `length`

Retorna a quantidade de elementos do vetor.

```javascript
num.length
```

---

### `indexOf()`

Procura um valor dentro do vetor e retorna sua posição.

```javascript
num.indexOf(8)
```

Caso o valor não exista, retorna:

```javascript
-1
```

---

## ⚙️ Código 1

```javascript
let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
```

---

## ⚙️ Código 2

```javascript
let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/*
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
```

---

## 💻 Funcionalidades demonstradas

- criação de arrays
- acesso aos elementos pelo índice
- adicionar novos elementos
- ordenar um vetor
- descobrir o tamanho do vetor
- localizar um elemento
- percorrer arrays utilizando `for`
- percorrer arrays utilizando `for...in`

---

## 🚀 Aprendizados

Nesta aula foram apresentados os fundamentos das variáveis compostas em JavaScript. Aprendemos como criar arrays, acessar seus elementos, utilizar métodos como `push()`, `sort()` e `indexOf()`, consultar o tamanho do vetor com `length` e percorrer seus valores utilizando as estruturas de repetição `for` e `for...in`. Esses conceitos são essenciais para manipular coleções de dados e serão utilizados nos próximos exercícios e projetos do curso.
