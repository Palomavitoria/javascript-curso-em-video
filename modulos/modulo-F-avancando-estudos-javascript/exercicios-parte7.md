# Exercícios JavaScript (Parte 7)

## 📊 Projeto — Analisador de Números

### 📌 Descrição

Neste exercício foi iniciado o desenvolvimento do projeto **Analisador de Números**.

O objetivo é criar uma aplicação capaz de receber números entre **1 e 100**, armazená-los em um vetor e, posteriormente, realizar cálculos estatísticos com os valores informados.

Nesta primeira parte foi desenvolvida toda a estrutura da página e implementada a lógica responsável por validar os dados, impedir números repetidos e armazenar os valores digitados pelo usuário.

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
* eventos

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
```

---

## 💻 Funcionalidades

* adiciona números entre 1 e 100
* valida os dados informados
* impede números duplicados
* armazena os valores em um array
* atualiza a lista dinamicamente
* limpa o campo após cada inserção

---

## 🚧 Desenvolvimento

Esta é a primeira etapa do projeto **Analisador de Números**.

Até o momento, foram implementadas as funcionalidades responsáveis por receber os números informados pelo usuário, validar os dados, impedir valores repetidos e armazenar cada número em um vetor.

Na **Parte 8**, o projeto será concluído com a implementação da função **Finalizar**, responsável por calcular e exibir:

- quantidade de números cadastrados;
- maior valor informado;
- menor valor informado;
- soma de todos os valores;
- média dos números digitados.

---

## 🚀 Aprendizados

Nesta etapa foram praticados:

* manipulação do DOM
* criação e utilização de arrays
* criação de funções
* validação de dados
* utilização do método `push()`
* pesquisa de elementos com `indexOf()`
* criação dinâmica de elementos com `createElement()`
* inserção de elementos com `appendChild()`
* manipulação de listas (`<select>`)
* organização da lógica em funções reutilizáveis
