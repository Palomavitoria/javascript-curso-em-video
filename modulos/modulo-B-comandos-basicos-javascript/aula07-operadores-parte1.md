# Aula 07 — Operadores (Parte 1)

## 📌 Introdução

Nesta aula foram apresentados os principais conceitos sobre **operadores em JavaScript**, com foco nos operadores **aritméticos**, **de atribuição** e de **incremento/decremento**.

Também foi explicada a **ordem de precedência das operações** e a organização dos operadores em diferentes grupos (famílias).

---

## 🧮 Operadores Aritméticos

Os operadores aritméticos são utilizados para realizar cálculos matemáticos.

### Tipos de operadores aritméticos:

```javascript
+   // adição
-   // subtração
*   // multiplicação
/   // divisão
%   // resto da divisão (módulo)
**  // potência
```

### Exemplos:

```javascript
5 + 2   // 7
5 - 2   // 3
5 * 2   // 10
5 / 2   // 2.5
5 % 2   // 1
5 ** 2  // 25
```

📌 O operador `%` retorna o **resto da divisão inteira**.

---

## 📊 Ordem de Precedência (Ordem das operações)

A ordem de execução das operações segue uma **hierarquia (precedência)**.

### Ordem básica:

1. `()` → parênteses
2. `**` → potência
3. `*`, `/`, `%`
4. `+`, `-`

### Exemplo:

```javascript
5 + 3 * 2   // 11
```

Multiplicação é feita primeiro.

```javascript
(5 + 3) * 2 // 16
```

📌 O uso de **parênteses altera a ordem de execução**.

---

## 📦 Operadores de Atribuição

São utilizados para **atribuir valores a variáveis**.

### Atribuição simples:

```javascript
var n = 5
```

---

### Atribuições compostas:

```javascript
n += 4   // n = n + 4
n -= 3   // n = n - 3
n *= 2   // n = n * 2
n /= 2   // n = n / 2
n %= 2   // n = n % 2
n **= 2  // n = n ** 2
```

Esses operadores tornam o código mais **curto e prático**.

---

## 🔁 Operadores de Incremento e Decremento

Servem para **aumentar ou diminuir valores automaticamente**.

### Incremento:

```javascript
n++
++n
```

### Decremento:

```javascript
n--
--n
```

---

## ⚠️ Pré-incremento vs Pós-incremento

Existe diferença entre usar o operador **antes ou depois da variável**.

### Pós-incremento:

```javascript
var n = 5
n++   // primeiro usa o valor, depois soma 1
```

---

### Pré-incremento:

```javascript
var n = 5
++n   // primeiro soma 1, depois usa o valor
```

📌 Essa diferença é importante quando o valor está sendo usado em uma expressão.

---

## 👨‍👩‍👧‍👦 Família de Operadores

Os operadores em JavaScript são organizados em diferentes grupos, como:

* Aritméticos
* Atribuição
* Relacionais
* Lógicos
* Ternário

Nesta aula o foco foi nos **aritméticos, atribuição e incremento/decremento**, enquanto os demais serão abordados na próxima aula.

---

## 💡 Observações importantes

* Operadores são fundamentais para realizar qualquer tipo de cálculo ou manipulação de dados
* A ordem de precedência influencia diretamente no resultado das expressões
* O uso de operadores compostos torna o código mais limpo e eficiente

---

## ✅ Conclusão

Nesta aula foram apresentados os operadores aritméticos, de atribuição e de incremento/decremento, além da ordem de precedência das operações, conceitos essenciais para a construção de expressões em JavaScript.
