# Exercícios JavaScript (Parte 3)

## 👤 Projeto — Verificador de Idade

### 📌 Descrição

Projeto desenvolvido em JavaScript que identifica a idade e o gênero do usuário a partir do ano de nascimento informado.

O sistema realiza cálculos automaticamente e exibe:

* idade detectada
* gênero selecionado
* imagem correspondente à faixa etária

---

## 🧠 Conceitos utilizados

* DOM
* condições aninhadas
* `Date`
* `getFullYear()`
* validação de dados
* `radio button`
* `createElement()`
* `appendChild()`
* manipulação de imagens
* template strings
* eventos

---

## 📂 Estrutura do projeto

📄 index.html → estrutura da página
🎨 style.css → estilização da interface
⚙️ script.js → lógica JavaScript

---

## 📄 index.html

```html id="8gm1qk"
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificador de Idade</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>Verificador de Idade</h1>
    </header>

    <section>
        <div>
            <p>
                Ano de Nascimento:
                <input type="number" name="txtano" id="txtano" min="1900">
            </p>

            <p>
                Sexo:
                <input type="radio" name="radsex" id="masc" checked>
                <label for="masc">Masculino</label>

                <input type="radio" name="radsex" id="fem">
                <label for="fem">Feminino</label>
            </p>

            <p>
                <input type="button" value="Verificar" onclick="verificar()">
            </p>
        </div>

        <div id="res">
            Preencha os dados acima para ver o resultado!
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

## 🎨 style.css

```css id="f3sl0z"
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
    box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
}

footer {
    color: white;
    text-align: center;
    font-style: italic;
}

#res {
    text-align: center;
    margin-top: 20px;
}

#foto {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-top: 20px;
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
```

---

## ⚙️ script.js

```javascript id="g9m4vh"
function verificar() {

    let data = new Date()
    let ano = data.getFullYear()

    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {

        alert('[ERRO] Verifique os dados e tente novamente!')

    } else {

        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)

        let genero = ''
        let img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {

            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-m.png')

            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.png')

            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.png')

            } else {
                img.setAttribute('src', 'idoso-m.png')
            }

        } else {

            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-f.png')

            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.png')

            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-f.png')

            } else {
                img.setAttribute('src', 'idoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
```

---

## 💻 Funcionalidades

* calcula a idade automaticamente
* identifica o gênero selecionado
* exibe imagens conforme faixa etária
* valida os dados informados
* altera dinamicamente o conteúdo da página

---

## 🎥 Preview do Projeto

<img width="720" height="405" alt="verificador-de-idade-preview" src="https://github.com/user-attachments/assets/5124b4bf-8f89-4ea6-986d-0d09f232cf18" />

---

## 🚀 Aprendizados

Neste exercício foram praticados conceitos importantes de validação de dados, manipulação do DOM, condições aninhadas e criação dinâmica de elementos utilizando JavaScript.
