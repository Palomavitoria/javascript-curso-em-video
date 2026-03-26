# Aula 08 — Operadores (Parte 2)

## 📌 Introdução

Nesta aula foram apresentados os operadores **relacionais**, **lógicos** e **ternário** em JavaScript. Esses operadores são fundamentais para realizar comparações e tomar decisões dentro de um programa.

---

## 🔍 Operadores Relacionais

Os operadores relacionais são utilizados para **comparar valores**.

Eles sempre retornam um valor do tipo **boolean**:

* `true` → verdadeiro
* `false` → falso

### Tipos de operadores relacionais:

```javascript
>   // maior que
<   // menor que
>=  // maior ou igual
<=  // menor ou igual
==  // igual (valor)
=== // igual (valor e tipo)
!=  // diferente
!== // diferente (valor e tipo)
```

---

### Exemplos:

```javascript
5 > 2    // true
7 < 4    // false
8 >= 8   // true
9 <= 7   // false
5 == 5   // true
5 == '5' // true (compara apenas o valor)
5 === '5' // false (compara valor e tipo)
```

📌 Diferença importante:

* `==` → compara apenas o valor
* `===` → compara valor **e tipo** (mais seguro)

---

## 🧠 Operadores Lógicos

Os operadores lógicos são usados para **combinar condições**.

### Tipos:

```javascript
!  // negação (NOT)
&& // conjunção (AND)
|| // disjunção (OR)
```

---

### 🔴 NOT (negação)

Inverte o valor lógico:

```javascript
!true  // false
!false // true
```

---

### 🟢 AND (&&)

Retorna verdadeiro **somente se todas as condições forem verdadeiras**:

```javascript
true && true   // true
true && false  // false
false && false // false
```

---

### 🔵 OR (||)

Retorna verdadeiro **se pelo menos uma condição for verdadeira**:

```javascript
true || false  // true
false || false // false
```

---

## 📊 Ordem de precedência (lógicos)

A ordem de execução dos operadores lógicos é:

1. `!` → NOT
2. `&&` → AND
3. `||` → OR

---

### Exemplo:

```javascript
true || false && false
```

Resultado:

```javascript
true || (false && false)
true || false
true
```

📌 O `&&` é executado antes do `||`.

---

## ⚠️ Uso de parênteses

Assim como nos operadores aritméticos, os parênteses podem alterar a ordem:

```javascript
(true || false) && false
```

Resultado:

```javascript
true && false
false
```

---

## 🔺 Operador Ternário

O operador ternário é uma forma simplificada de fazer uma **estrutura condicional (if/else)**.

### Estrutura:

```javascript
condicao ? valor1 : valor2
```

---

### Funcionamento:

* Se a condição for **true** → retorna `valor1`
* Se for **false** → retorna `valor2`

---

### Exemplo:

```javascript
var idade = 18
idade >= 18 ? "Maior de idade" : "Menor de idade"
```

---

### Comparação com if/else:

```javascript
// if/else
if (idade >= 18) {
    "Maior de idade"
} else {
    "Menor de idade"
}
```

```javascript
// ternário
idade >= 18 ? "Maior de idade" : "Menor de idade"
```

📌 O operador ternário deixa o código mais **curto e direto**.

---

## 👨‍👩‍👧‍👦 Família de operadores

Com essa aula, você completa os principais grupos de operadores:

* Aritméticos
* Atribuição
* Relacionais
* Lógicos
* Ternário

---

## 💡 Observações importantes

* Operadores relacionais sempre retornam **boolean**
* O uso de `===` é recomendado ao invés de `==`
* Operadores lógicos são muito utilizados em estruturas condicionais
* O operador ternário é útil para decisões simples
* A ordem de precedência pode alterar completamente o resultado

---

## 🧠 Exemplos combinando tudo

```javascript
var idade = 20
var temCarteira = true

idade >= 18 && temCarteira
// true
```

```javascript
var nota = 7

nota >= 6 ? "Aprovado" : "Reprovado"
```

---

## ✅ Conclusão

Nesta aula foram apresentados os operadores relacionais, lógicos e ternário, completando o conjunto de operadores fundamentais do JavaScript, essenciais para comparações e tomada de decisões em programas.
