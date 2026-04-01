# Aula 09 — Introdução ao DOM

## 📌 Introdução

Nesta aula foi apresentado o **DOM (Document Object Model)**, que é a forma como o JavaScript acessa e manipula os elementos de uma página HTML.

Também foram mostradas ferramentas para facilitar o desenvolvimento, como extensões para atualização automática da página.

---

## 🛠️ Ferramentas utilizadas

Durante a aula foi mostrado o uso de ferramentas para visualizar alterações em tempo real:

* **Live Server (VS Code)** → atualiza automaticamente a página no navegador
* Alternativa mencionada: **extensão do navegador (ex: Watch in Chrome)**

Também foi utilizado o **Node.js** para testes rápidos de comandos.

---

## 🌐 O que é o DOM

DOM significa:

👉 **Document Object Model**

É uma representação da página HTML em forma de **objetos**, que podem ser acessados e manipulados pelo JavaScript.

---

## 🌳 Árvore DOM

O DOM é organizado em forma de **árvore**, onde cada elemento é um nó.

Exemplo de estrutura:

```html
<html>
  <body>
    <h1>Título</h1>
    <p>Parágrafo</p>
  </body>
</html>
```

Representação em árvore:

* `html`

  * `body`

    * `h1`
    * `p`

---

## 🌍 Objeto window

O objeto principal do navegador é:

```javascript
window
```

📌 Importante:

* Deve ser escrito em **letra minúscula**
* Representa tudo que está aberto no navegador

Dentro do `window` existem vários objetos, como:

* `document`
* `location`
* `history`

---

## 📄 Objeto document

O objeto mais importante para o DOM é:

```javascript
document
```

👉 Ele representa o **conteúdo da página HTML**

É através dele que acessamos os elementos.

---

## 🔎 Selecionando elementos no DOM

JavaScript permite selecionar elementos de várias formas.

### 1. Por marca (tag)

```javascript
document.getElementsByTagName('p')
```

---

### 2. Por ID

```javascript
document.getElementById('nomeDoId')
```

---

### 3. Por nome

```javascript
document.getElementsByName('nome')
```

---

### 4. Por classe

```javascript
document.getElementsByClassName('classe')
```

---

### 5. Por seletor (CSS)

```javascript
document.querySelector('div#id')
document.querySelectorAll('p')
```

---

## 📌 Importante sobre coleções

Alguns métodos retornam **mais de um elemento**, como:

* `getElementsByTagName`
* `getElementsByClassName`

Nesses casos, usamos colchetes para acessar um elemento específico:

```javascript
document.getElementsByTagName('p')[0]
```

👉 Isso significa: pegar o primeiro elemento.

---

## 🌳 Parent e Child

Na árvore DOM, os elementos possuem relações:

* **Parent (pai)** → elemento acima
* **Child (filho)** → elemento dentro

Exemplo:

```html
<body>
  <p>Texto</p>
</body>
```

* `body` → parent
* `p` → child

---

## 🔗 Navegação na árvore DOM

Podemos acessar elementos relacionados:

```javascript
element.parentNode
element.children
element.firstChild
element.lastChild
```

---

## 🧠 Observações importantes

* O DOM permite **interação com a página em tempo real**
* Tudo no HTML pode ser acessado via JavaScript
* O `document` é o principal ponto de acesso
* Nem todos os métodos retornam um único elemento
* É importante entender a estrutura em árvore

---

## 💡 Dicas extras (importantes)

* `querySelector` é muito usado atualmente por ser mais flexível
* Sempre verifique se o elemento existe antes de manipulá-lo
* O DOM é a base para eventos, animações e interatividade

---

## ✅ Conclusão

Nesta aula foi apresentado o conceito de DOM, sua estrutura em árvore, os objetos principais do navegador e as diferentes formas de selecionar elementos dentro de uma página HTML utilizando JavaScript.
