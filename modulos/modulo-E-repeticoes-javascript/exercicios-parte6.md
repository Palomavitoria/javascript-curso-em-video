# Exercícios JavaScript (Parte 6)

## ✖️ Projeto — Tabuada

### 📌 Descrição

Projeto desenvolvido em JavaScript que gera automaticamente a tabuada de um número informado pelo usuário.

O sistema:
- recebe um número
- gera a tabuada de 1 até 10
- mostra os resultados dinamicamente na tela

---

## 🧠 Conceitos utilizados

* DOM
* estruturas de repetição
* `while`
* validação de dados
* `createElement()`
* `appendChild()`
* `option`
* `select`
* `innerHTML`
* conversão de dados
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
    <title>Tabuada</title>
    <link rel="stylesheet" href="estilo.css">
</head>

<body>

    <header>
        <h1>Tabuada</h1>
    </header>

    <section>

        <div>
            <p>
                Número:
                <input type="number" name="num" id="txtn">

                <input type="button" value="Gerar Tabuada" onclick="tabuada()">
            </p>
        </div>

        <div>
            <select name="tabuada" id="seltab" size="10">
                <option>Digite um número acima</option>
            </select>
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

div {
    text-align: center;
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
function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {

        window.alert('Por favor, digite um número!')

    } else {

        let n = Number(num.value)
        let c = 1

        tab.innerHTML = ''

        while (c <= 10) {

            let item = document.createElement('option')

            item.text = `${n} x ${c} = ${n * c}`

            item.value = `tab${c}`

            tab.appendChild(item)

            c++
        }
    }
}
```

---

## 💻 Funcionalidades

* gera tabuadas automaticamente
* utiliza estrutura `while`
* valida campos vazios
* cria elementos dinamicamente
* adiciona resultados na tela
* mostra multiplicações de 1 até 10
* altera o conteúdo em tempo real

---

## 🎥 Preview do Projeto



<img width="853" height="480" alt="tabuada-preview" src="https://github.com/user-attachments/assets/0072f1d5-872f-454c-972a-93a9003b5696" />


---

## 🚀 Aprendizados

Neste exercício foram praticados:

* estruturas de repetição
* `while`
* manipulação do DOM
* criação dinâmica de elementos
* `createElement()`
* `appendChild()`
* lógica de programação
* validação de dados
* interação com usuário
