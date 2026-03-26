# Aula 06 — Tratamento de Dados

## 📌 Introdução

Nesta aula foram apresentados conceitos relacionados à **manipulação e tratamento de dados em JavaScript**, incluindo tipos de dados, conversões e formatação de valores.

---

## 🧠 Tipos de dados (Data Types)

Os principais tipos de dados utilizados foram:

* **Number** → valores numéricos
* **String** → textos

Esses tipos são fundamentais para trabalhar com informações dentro do programa.

---

## 🔗 Concatenação

Concatenação é o processo de **juntar valores**, geralmente strings.

Exemplo:

```javascript id="dghp2n"
var nome = "Paloma"
var mensagem = "Olá, " + nome
```

Resultado:

```id="ijvnp3"
Olá, Paloma
```

---

## 🧾 Template Strings

As **template strings** permitem criar textos de forma mais simples e organizada utilizando crase ( ` ).

Exemplo:

```javascript id="d7q9v8"
var nome = "Paloma"
var mensagem = `Olá, ${nome}`
```

---

## 🔤 Formas de delimitar strings

Em JavaScript, podemos usar três formas para criar strings:

```javascript
"texto"
'texto'
`texto`
```

### Aspas duplas (" ") e aspas simples (' ')

São utilizadas para criar strings simples.

Exemplo:

```javascript
var nome = "Paloma"
var cidade = 'Fortaleza'
```

Não há diferença de funcionamento entre elas, sendo mais uma questão de preferência.

---

### Crase (` `) — Template Strings

As crases permitem criar **template strings**, que possuem algumas vantagens:

* Permitem **quebrar linha** no texto
* Permitem **inserir variáveis diretamente** usando `${}`

Exemplo:

```javascript
var nome = "Paloma"
var mensagem = `Olá, ${nome}`
```

---

### 📌 Quando usar cada uma

* `" "` ou `' '` → para textos simples
* `` ` ` `` → quando precisar:

  * inserir variáveis
  * criar textos dinâmicos
  * trabalhar com múltiplas linhas


## 🔄 Conversão de dados

### String → Number

Para converter uma string em número:

```javascript id="p03hg9"
Number("10")
parseInt("10")
parseFloat("10.5")
```

---

### Number → String

Para converter número em string:

```javascript id="cw0o2r"
String(10)
10 .toString()
```

---

## ⌨️ Entrada de dados com prompt

O comando **`window.prompt()`** permite receber dados do usuário.

Exemplo:

```javascript id="u8l6sy"
var nome = window.prompt("Qual é seu nome?")
```

⚠️ O valor recebido pelo prompt é sempre do tipo **string**.

---

## 🔢 Formatação de números

JavaScript permite formatar números de diferentes formas.

Exemplo:

```javascript id="j29e3h"
var n = 1545.5

n.toFixed(2)        // 1545.50
n.toFixed(2).replace('.', ',')  // 1545,50
```

---

## 🔤 Formatação de strings

Alguns métodos para trabalhar com strings:

```javascript id="91ojs9"
var nome = "Paloma"

nome.length        // quantidade de caracteres
nome.toUpperCase() // letras maiúsculas
nome.toLowerCase() // letras minúsculas
```

---

## ✅ Conclusão

Nesta aula foram apresentados conceitos importantes de manipulação de dados, como concatenação, template strings, conversão entre tipos e formatação de valores, fundamentais para o desenvolvimento em JavaScript.
