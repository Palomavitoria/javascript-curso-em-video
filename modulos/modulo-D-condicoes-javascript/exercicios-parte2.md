# Exercícios JavaScript (Parte 2)

## 🌅 Projeto — Hora do Dia (Finalização)

### 📌 Descrição

Continuação e finalização do projeto "Hora do Dia", desenvolvido em JavaScript para alterar dinamicamente a interface da página de acordo com o horário atual do sistema.

O projeto modifica:

* a mensagem exibida
* a imagem da página
* a cor de fundo

conforme o horário identificado pelo sistema.

---

## 🧠 Conceitos utilizados

* DOM
* condições aninhadas
* objeto `Date`
* `getHours()`
* manipulação de imagens
* alteração de estilos
* `innerHTML`
* funções
* `onload`

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
    <title>Hora do Dia</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body onload="carregar()">
    <header>
        <h1>Hora do Dia</h1>
    </header>

    <section>
        <div id="msg">
            Aqui vai aparecer a mensagem...
        </div>

        <div id="foto">
            <img id="imagem" src="fotomanha.png" alt="Foto do dia">
        </div>
    </section>

    <footer>
        <p>&copy; CursoemVídeo</p>
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
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data =  new Date()
    var hora = data.getHours()

    msg.innerHTML = "Agora são " + hora + " horas."

    if (hora >= 9 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}
```

---

## 💻 Funcionalidades

* identifica a hora atual do sistema
* altera a mensagem exibida
* modifica a imagem conforme o horário
* muda a cor de fundo dinamicamente

---

## 🌇 Preview — Tarde

<img width="1918" height="907" alt="preview-tarde png" src="https://github.com/user-attachments/assets/cff1adf0-0fe8-48c5-974e-f7c311f821b5" />


---

## 🌙 Preview — Noite

<img width="1913" height="897" alt="preview-noite png" src="https://github.com/user-attachments/assets/a20e7c55-89a9-48e0-9c37-8a3a6d1c524b" />


---

## 🚀 Aprendizados

Neste exercício foram praticados conceitos importantes de manipulação do DOM, utilização de condições e interação dinâmica com a interface utilizando JavaScript.
