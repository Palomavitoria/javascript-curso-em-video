# Aula 11 — Condições (Parte 1)

## 📌 Introdução

Nesta aula foram apresentados os conceitos iniciais de **condições em JavaScript**, mostrando como o programa pode tomar decisões de acordo com determinadas situações.

Também foram reforçadas ferramentas e práticas utilizadas durante o desenvolvimento.

---

## 🧠 O que são condições

Condições permitem que o programa execute diferentes ações dependendo do resultado de um teste lógico.

👉 Em outras palavras:
o código pode seguir caminhos diferentes dependendo da situação.

Exemplo:

```javascript id="81qoj1"
if (idade >= 18) {
    console.log('Maior de idade')
}
```

---

## 🔀 Estrutura sequencial e condicional

### 📌 Sequência

Na estrutura sequencial, os comandos são executados em ordem, um após o outro.

Exemplo:

```javascript id="ul9g6t"
console.log('Passo 1')
console.log('Passo 2')
console.log('Passo 3')
```

---

### 📌 Condição

Na estrutura condicional, o programa verifica uma condição antes de executar um bloco de código.

---

## ⚙️ Como criar uma condição

A estrutura básica é:

```javascript id="mykg2d"
if (condicao) {
    // bloco executado se for verdadeiro
}
```

📌 O bloco só será executado se a condição retornar `true`.

---

## ✅ Condição simples

Executa algo apenas se a condição for verdadeira.

### Estrutura:

```javascript id="j1u9qe"
if (condicao) {
    // ação
}
```

### Exemplo:

```javascript id="wmp9s8"
var velocidade = 80

if (velocidade > 60) {
    console.log('Multado!')
}
```

---

## 🔄 Condição composta

Permite executar uma ação se a condição for verdadeira e outra se for falsa.

### Estrutura:

```javascript id="s8rbz9"
if (condicao) {
    // verdadeiro
} else {
    // falso
}
```

---

### Exemplo:

```javascript id="o77bdb"
var idade = 16

if (idade >= 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}
```

---

## 🧩 Representação das condições

Durante a aula foi mostrado como as condições funcionam em forma de fluxo:

* teste lógico
* caminho verdadeiro
* caminho falso

👉 Isso ajuda a visualizar como o programa toma decisões.

---

## 🛠️ Node.js e Node Exec

Foi reforçado o uso do **Node.js** para executar JavaScript fora do navegador.

Também foi utilizado o **Node Exec**, permitindo testar comandos e executar arquivos JavaScript.

---

## ⌨️ Tecla F8 no Node Exec

A tecla **F8** foi utilizada para executar o código no ambiente Node Exec.

👉 Isso facilita os testes rápidos durante o desenvolvimento.

---

## 🌐 Go Live

Foi utilizado o recurso **Go Live** (Live Server) no VS Code.

👉 Ele atualiza automaticamente a página no navegador sempre que o código é salvo.

---

## 💡 Observações importantes

* Condições são fundamentais na programação
* O resultado da condição deve ser `true` ou `false`
* Estruturas condicionais permitem criar programas mais inteligentes
* Operadores relacionais e lógicos são muito utilizados nas condições

---

## 🧠 Conceitos importantes relacionados

As condições normalmente utilizam:

### Operadores relacionais:

```javascript id="n5jg2r"
>
<
>=
<=
==
===
!=
```

---

### Operadores lógicos:

```javascript id="93d2cx"
&&
||
!
```

👉 Esses operadores foram estudados anteriormente e são essenciais para criar testes lógicos.

---

## ✅ Conclusão

Nesta aula foram apresentados os conceitos iniciais de condições em JavaScript, incluindo condições simples e compostas, permitindo que os programas tomem decisões de acordo com diferentes situações.
