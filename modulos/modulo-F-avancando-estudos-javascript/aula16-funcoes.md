# Aula 16 — Funções

## 📖 Introdução

Nesta aula foram apresentados os conceitos fundamentais de **funções** em JavaScript.

As funções permitem organizar o código em blocos reutilizáveis, facilitando a manutenção e evitando repetições.

Também foram abordados conceitos como parâmetros, retorno de valores, funções anônimas e recursividade.

---

## 🧠 Conceitos abordados

- funções
- chamada de função
- parâmetros
- retorno (`return`)
- funções sem parâmetros
- funções sem retorno
- parâmetros opcionais
- funções anônimas
- expressões de função
- recursividade

---

## 📌 O que é uma função?

Uma função é um bloco de código criado para executar uma determinada tarefa.

Ela pode ser chamada sempre que necessário, evitando a repetição de código.

Uma função pode:

- receber parâmetros;
- executar uma ação;
- retornar um resultado.

Nem toda função possui parâmetros ou retorno.

---

## 📌 Elementos de uma função

Durante a aula foram apresentados os principais elementos que compõem uma função:

- **Chamada:** execução da função.
- **Parâmetro:** valor recebido pela função.
- **Ação:** código executado pela função.
- **Retorno:** resultado devolvido através do `return`.

---

## 📌 Estrutura básica

```javascript
function nome(parametro) {

    // ação

    return resultado
}
```

---

## ⚙️ Código 1 — Verificando número par ou ímpar

```javascript
function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

console.log(parimpar(233))
```

Neste exemplo, a função verifica se um número é par ou ímpar utilizando o operador módulo (`%`).

---

## ⚙️ Código 2 — Soma com parâmetros opcionais

```javascript
function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma(7))
```

Foram utilizados parâmetros com valores padrão, evitando erros quando algum argumento não for informado.

---

## ⚙️ Código 3 — Função anônima

```javascript
let v = function(x) {
    return x * 2
}

console.log(v(5))
```

Também foi apresentada uma função anônima armazenada em uma variável.

---

## ⚙️ Código 4 — Fatorial utilizando repetição

```javascript
function fatorial(n) {
    let fat = 1

    for (let c = n; c > 1; c--) {
        fat *= c
    }

    return fat
}
```

Neste exemplo, o cálculo do fatorial foi realizado utilizando uma estrutura de repetição (`for`).

---

## ⚙️ Código 5 — Fatorial com Recursividade

```javascript
// RECURSIVIDADE

function fatorial(n) {

    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }

}

console.log(fatorial(5))

/*

5! = 5 x 4 x 3 x 2 x 1

n! = n x (n-1)!

1! = 1

*/
```

Nesta versão, o cálculo do fatorial foi realizado utilizando **recursividade**, onde a função chama a si mesma até atingir a condição de parada.

---

## 💻 Funcionalidades demonstradas

- criação de funções
- chamada de funções
- utilização de parâmetros
- retorno de valores com `return`
- parâmetros opcionais
- funções anônimas
- armazenamento de funções em variáveis
- cálculo de fatorial
- utilização de recursividade

---

## 🚀 Aprendizados

Nesta aula aprendemos um dos conceitos mais importantes do JavaScript: as funções. Foi possível compreender como organizar o código em blocos reutilizáveis, utilizar parâmetros e retornos, criar funções anônimas, definir valores padrão para parâmetros e implementar algoritmos utilizando tanto estruturas de repetição quanto recursividade. Esses conhecimentos são fundamentais para desenvolver aplicações mais organizadas, reutilizáveis e escaláveis.
