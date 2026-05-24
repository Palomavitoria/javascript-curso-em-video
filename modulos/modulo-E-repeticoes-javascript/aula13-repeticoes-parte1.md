# Aula 13 — Repetições (Parte 1)

## 📖 Introdução

Nesta aula foram apresentados os conceitos iniciais de **repetições em JavaScript**, também conhecidas como:

- Laços
- Loops
- Iterações

As estruturas de repetição são utilizadas para executar uma mesma ação várias vezes automaticamente, evitando repetir código manualmente.

---

# 🍕 Exemplo da função `comerPizza()`

O professor utilizou o exemplo de uma pessoa comendo pizza para explicar o funcionamento de uma repetição.

## ❌ Sem repetição

```javascript
comerFatia()
comerFatia()
comerFatia()
comerFatia()
comerFatia()
```

Problemas:
- código grande
- repetitivo
- difícil de manter
- pouco profissional

---

## ✅ Com repetição

```javascript
while (temFatia()) {
    comerFatia()
}
```

O laço continuará executando enquanto existir pizza.

---

# 🧠 Estruturas de Controle

O JavaScript possui 3 principais estruturas de controle:

## 📌 Sequência

Executa as instruções em ordem.

```javascript
console.log('Passo 1')
console.log('Passo 2')
console.log('Passo 3')
```

---

## 📌 Condições

Executa ações diferentes dependendo de um teste lógico.

```javascript
if (idade >= 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}
```

---

## 📌 Repetições

Executa um bloco várias vezes.

```javascript
while (c <= 5) {
    console.log(c)
    c++
}
```

---

# 🔁 Estrutura `while`

O `while` significa:

```text
enquanto
```

Ele executa um bloco enquanto a condição for verdadeira.

---

## 🧱 Estrutura

```javascript
while (condição) {
    bloco
}
```

---

# 🧱 O que são blocos?

Blocos são os códigos que ficam entre:

```javascript
{
}
```

As chaves delimitam o conjunto de instruções que pertencem à estrutura.

Exemplo:

```javascript
while (c <= 5) {
    console.log(c)
    c++
}
```

Tudo que estiver dentro das chaves será repetido.

---

# 🧪 Exemplos vistos na aula

## ❌ Sem repetição

```javascript
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
```

Problema:
- repetitivo
- código desnecessariamente grande

---

# ✅ Utilizando `while`

```javascript
var c = 1

while (c < 6) {
    console.log('Tudo bem?')
    c++
}
```

---

## 📌 Explicação

### `var c = 1`
Cria uma variável de controle.

---

### `while (c < 6)`
Enquanto `c` for menor que 6:
- execute o bloco

---

### `console.log('Tudo bem?')`
Mensagem exibida no console.

---

### `c++`
Incrementa 1 na variável.

Equivale a:

```javascript
c = c + 1
```

---

# 🔢 Exemplo mostrando os passos

```javascript
var c = 1

while (c <= 6) {
    console.log(`Passo ${c}`)
    c++
}
```

---

# 📌 Resultado

```text
Passo 1
Passo 2
Passo 3
Passo 4
Passo 5
Passo 6
```

---

# ✨ Template String

Foi utilizado:

```javascript
`Passo ${c}`
```

Isso é uma **Template String**.

Permite:
- interpolação de variáveis
- escrita mais moderna
- concatenação mais simples

---

# 🔄 Incremento

```javascript
c++
```

Incrementa:
+1 na variável.

---

## Equivale a:

```javascript
c = c + 1
```

---

# ⚠️ Cuidado com Loop Infinito

Se esquecer o incremento:

```javascript
while (c <= 6) {
    console.log(c)
}
```

o programa nunca termina.

Isso cria um:

```text
Loop infinito
```

---

# 🔁 Diferença entre `while` e `do while`

## ✅ `while`

Primeiro faz o teste lógico.

Depois executa.

```javascript
while (condição) {
    bloco
}
```

---

## ✅ `do while`

Primeiro executa.

Depois testa.

```javascript
do {
    bloco
} while (condição)
```

---

# 📌 Diferença principal

## `while`
- teste no início

## `do while`
- teste no final

---

# 🧠 Conceitos importantes da aula

- Repetições também podem ser chamadas de laços ou iterações
- Estruturas de repetição automatizam tarefas
- `while` significa “enquanto”
- Blocos são delimitados por chaves
- Incremento evita loops infinitos
- `while` testa antes
- `do while` testa depois
- Repetições deixam o código menor e mais profissional

---

# ✅ Resumo Final

Nesta aula aprendemos:
- o conceito de repetições
- estrutura `while`
- funcionamento de loops
- incremento
- blocos de código
- diferença entre `while` e `do while`
- como evitar código repetitivo
- riscos de loop infinito
