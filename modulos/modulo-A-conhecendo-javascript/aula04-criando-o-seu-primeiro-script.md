# Aula 04 — Criando o seu primeiro script

## 📌 Introdução

Nesta aula foi criado o primeiro programa utilizando JavaScript dentro de uma página HTML. Também foi apresentada a estrutura básica de um documento HTML e como inserir um script para executar comandos no navegador.

---

## 🧩 Estrutura básica do HTML

Uma página web é formada por algumas partes principais:

* **`<html>`** → representa todo o documento
* **`<head>`** → contém informações sobre a página
* **`<body>`** → contém o conteúdo que aparece para o usuário

O professor comparou essa estrutura com o corpo humano:

* **HTML** → corpo inteiro
* **HEAD** → cabeça (configurações da página)
* **BODY** → corpo (conteúdo visível)

---

## 💻 Código criado na aula

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu primeiro programa...</title>
    <style>
        body {
            background-color: rgba(29, 29, 131, 0.855);
            color: white;
            font: normal 20pt Arial;
        }
        h1 {
            color: aqua;
        }
    </style>
</head>
<body>
    <h1>Olá, mundo!</h1>
    <p>Já me livrei da maldição</p>

    <script>
        window.alert('Minha primeira mensagem')
        window.confirm('Está gostando de JS?')
        window.prompt('Qual é seu nome?')
    </script>

</body>
</html>
```

---

## ⚙️ Comandos JavaScript utilizados

### `window.alert()`

Mostra uma **mensagem de alerta** na tela.

### `window.confirm()`

Mostra uma **caixa de confirmação**, onde o usuário pode escolher **OK ou Cancelar**.

### `window.prompt()`

Mostra uma **caixa de entrada**, permitindo que o usuário digite alguma informação.

---

## ✅ Conclusão

Nesta aula foi criado o primeiro script em JavaScript dentro de uma página HTML e apresentados alguns comandos básicos de interação com o usuário.
