# Aula 05 — Variáveis e Tipos Primitivos

## 📌 Introdução

Nesta aula foram apresentados conceitos fundamentais da linguagem JavaScript, como **variáveis, tipos de dados, comentários e identificadores**. Esses elementos são essenciais para armazenar informações e construir programas.

---

## 💬 Comentários no código

Comentários são utilizados para **explicar o código** ou fazer anotações para quem está lendo o programa.

Eles não são executados pelo JavaScript.

### Comentário de uma linha

```javascript
// Este é um comentário
```

### Comentário de várias linhas

```javascript
/*
Este é um comentário
de várias linhas
*/
```

---

## 📦 Variáveis

Variáveis são utilizadas para **armazenar dados na memória**.

Em JavaScript podemos declarar variáveis utilizando:

```javascript
var
let
```

Exemplo:

```javascript
var nome = "Maria"
let idade = 20
```

---

## 🏷️ Identificadores

O nome de uma variável é chamado de **identificador**.

Existem algumas regras para criar identificadores em JavaScript:

* Não podem começar com números
* Não podem conter espaços
* Não podem usar palavras reservadas da linguagem
* Podem conter letras, números, `$` e `_`

Exemplo:

```javascript
var nome
var idade
var salario
```

---

## 🔤 Strings

**Strings** são valores de texto.

Em JavaScript podemos delimitar uma string de três formas:

```javascript
"texto"
'texto'
`texto`
```

Exemplo:

```javascript
var nome = "João"
var cidade = 'Fortaleza'
var mensagem = `Olá`
```

---

## 🔢 Tipos de dados (Data Types)

JavaScript possui alguns tipos básicos de dados.

### Number

Representa números.

Exemplo:

```javascript
var idade = 20
```

Dentro do tipo **Number** também existem:

* **Infinity** → número infinito
* **NaN (Not a Number)** → valor que não é um número válido

---

### String

Representa textos.

Exemplo:

```javascript
var nome = "Ana"
```

---

### Boolean

Representa valores lógicos:

* **true** → verdadeiro
* **false** → falso

Exemplo:

```javascript
var aprovado = true
```

---

## 🔍 typeof

O comando **`typeof`** é utilizado para identificar o tipo de um valor ou variável.

Exemplo:

```javascript
typeof nome
typeof idade
```

---

## 💻 Executando JavaScript com Node.js no VS Code

Durante a aula também foi demonstrado como testar comandos JavaScript utilizando o Node.js no terminal do Visual Studio Code.

## Abrindo o terminal

Atalho:

Ctrl + '

ou pelo menu:

Terminal → New Terminal

## Iniciando o Node.js

No terminal digite:

node

Após isso será aberto o ambiente interativo do Node.js.

Exemplo:

> 2 + 2
4

Também é possível testar variáveis e comandos da linguagem:

> var nome = "Paloma"
> nome
'Paloma'
> typeof nome
'string'

## Saindo do Node.js

Para sair do ambiente interativo digite:

.exit


---

## ⚠️ Sensibilidade a maiúsculas e minúsculas

JavaScript é uma linguagem **case sensitive**, ou seja, **diferencia letras maiúsculas e minúsculas**.

Exemplo:

```
nome
Nome
NOME
```

São considerados **identificadores diferentes**.

---

## ✅ Conclusão

Nesta aula foram apresentados conceitos essenciais da linguagem JavaScript, como variáveis, tipos de dados, comentários e identificadores, além de mostrar como executar comandos utilizando o Node.js.
