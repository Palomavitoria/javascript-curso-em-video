# Exercícios JavaScript (Parte 8)

## 📊 Projeto — Analisador de Números

### 📌 Descrição

Nesta segunda parte foi concluído o projeto **Analisador de Números**.

O sistema permite adicionar números entre **1 e 100**, impedindo valores duplicados e inválidos. Após o cadastro dos números, é possível realizar uma análise completa dos dados informados, exibindo a quantidade de elementos cadastrados, o maior e o menor valor, a soma de todos os números e a média aritmética.

---

## 🧠 Conceitos utilizados

* DOM
* arrays
* funções
* validação de dados
* `querySelector()`
* `createElement()`
* `appendChild()`
* `push()`
* `indexOf()`
* estruturas condicionais
* estruturas de repetição (`for...in`)
* operadores aritméticos
* manipulação dinâmica do HTML

---

## 📂 Estrutura do projeto

📄 index.html → estrutura da página

🎨 estilo.css → estilização da interface

⚙️ script.js → lógica JavaScript

---

## 📄 index.html

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analisador de Números</title>
    <link rel="stylesheet" href="estilo.css">
</head>

<body>

    <header>
        <h1>Analisador de Números</h1>
    </header>

    <section>

        <div>
            Número (entre 1 e 100):
            <input type="number" name="fnum" id="fnum">

            <input type="button" value="Adicionar" onclick="adicionar()">

            <br><br>

            <select name="flista" id="flista" size="6"></select>

            <br>

            <input type="button" value="Finalizar" onclick="finalizar()">

        </div>

        <div id="res">

        </div>

    </section>

    <footer>
        <p>&copy; Curso em Vídeo</p>
    </footer>

<script src="script.js"></script>

</body>
</html>
```

---

## 🎨 estilo.css

```css
body {
    background: rgb(70, 142, 236);
    font: normal 15pt Arial;
}

header {
    color: white;
    text-align: center;
}

section {
    background: white;
    border-radius: 10px;
    padding: 15px;
    width: 500px;
    margin: auto;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.363);
}

select#flista {
    width: 150px;
}

footer {
    color: white;
    text-align: center;
    font-style: italic;
}
```

---

## ⚙️ script.js

```javascript
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {

        valores.push(Number(num.value))

        let item = document.createElement('option')

        item.text = `Valor ${num.value} adicionado.`

        lista.appendChild(item)

        res.innerHTML = ''

    } else {

        window.alert('Valor inválido ou já encontrado na lista.')

    }

    num.value = ''
    num.focus()

}

function finalizar() {

    if (valores.length == 0) {

        window.alert('Adicione valores antes de finalizar!')

    } else {

        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {

            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]

            if (valores[pos] < menor)
                menor = valores[pos]

        }

        media = soma / tot

        res.innerHTML = ''

        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
```

---

## 💻 Funcionalidades

* adiciona números entre **1 e 100**
* impede valores duplicados
* valida entradas inválidas
* armazena os números em um array
* exibe os valores adicionados em uma lista
* calcula a quantidade de números cadastrados
* identifica o maior valor informado
* identifica o menor valor informado
* calcula a soma de todos os valores
* calcula a média dos números digitados

---

## 🎥 Preview do Projeto



<img width="800" height="437" alt="ezgif com-video-to-gif-converter" src="https://github.com/user-attachments/assets/31375843-9d08-44e5-a173-e0598b49f21a" />


---

## 🚀 Aprendizados

Neste exercício foi concluído um projeto completo utilizando os principais conceitos estudados ao longo do curso. Foram aplicados conhecimentos sobre manipulação do DOM, criação e utilização de arrays, validação de dados, funções, estruturas condicionais e estruturas de repetição para desenvolver uma aplicação capaz de armazenar números, impedir valores duplicados e realizar cálculos estatísticos, como quantidade de elementos, maior valor, menor valor, soma e média. Esse projeto consolidou diversos conceitos fundamentais do JavaScript em uma única aplicação prática.
