# Exercícios JavaScript (Parte 5)

## 🔢 Projeto — Super Contador

### 📌 Descrição

Projeto desenvolvido em JavaScript que realiza contagens automáticas utilizando estruturas de repetição.

O sistema permite definir:

* número inicial
* número final
* passo da contagem

O contador é capaz de realizar:

* contagem crescente
* contagem regressiva
* validação dos dados informados

---

## 🧠 Conceitos utilizados

* DOM
* estruturas de repetição
* `for`
* condições
* validação de dados
* `innerHTML`
* operadores relacionais
* operadores lógicos
* incremento
* decremento
* template strings
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
    <title>Super Contador</title>
    <link rel="stylesheet" href="estilo.css">
</head>

<body>
    <header>
        <h1>Vamos contar</h1>
    </header>

    <section>
        <div id="dados">

            <p>
                Início:
                <input type="number" name="inicio" id="txti">
            </p>

            <p>
                Fim:
                <input type="number" name="fim" id="txtf">
            </p>

            <p>
                Passo:
                <input type="number" name="passo" id="txtp">
            </p>

            <p>
                <input type="button" value="Contar" onclick="contar()">
            </p>

        </div>

        <div id="res">
            Preparando a contagem...
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
    text-align:center;
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
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        res.innerHTML = 'Impossível contar!'
        // window.alert('[ERRO] Faltam dados!')

    } else {

        res.innerHTML = 'Contando: <br>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {

            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉 `
            }

        } else {

            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉 `
            }
        }

        res.innerHTML += `🏁`
    }
}
```

---

## 💻 Funcionalidades

* realiza contagem crescente
* realiza contagem regressiva
* valida campos vazios
* valida passo inválido
* mostra resultados dinamicamente
* utiliza estrutura `for`
* altera o conteúdo da página em tempo real

---

## 🎥 Preview do Projeto

<img width="700" height="394" alt="super-contador-preview" src="https://github.com/user-attachments/assets/53e328dd-0ebb-4dca-bd85-35f6cd03b575" />

---

## 🚀 Aprendizados

Neste exercício foram praticados:

* estruturas de repetição
* `for`
* manipulação do DOM
* validações
* condições
* incremento e decremento
* concatenação com `innerHTML`
* interação com usuário
* lógica de programação
