# Aula 10 — Eventos DOM

## 📌 Introdução

Nesta aula foram apresentados os **eventos no DOM**, que permitem ao JavaScript responder a ações do usuário, tornando as páginas interativas.

Eventos são fundamentais para qualquer tipo de interação, como cliques, movimentos do mouse e entrada de dados.

---

## ⚡ O que são eventos

Eventos são **tudo o que pode acontecer na página**, como:

* clique do mouse
* movimento do mouse
* teclado sendo pressionado
* carregamento da página

👉 Ou seja, qualquer interação do usuário ou do navegador.

---

## 🧱 Elemento DIV e interação

Foi utilizado o elemento `<div>` para criar uma área interativa na página.

Exemplo de eventos aplicados:

* `onclick` → quando clica
* `onmouseenter` → quando o mouse entra
* `onmouseout` → quando o mouse sai

---

## 🧠 Funções em JavaScript

Para cada evento, foi criada uma **função**, que define o que deve acontecer.

Exemplo:

```javascript
function clicar() {
    // ação ao clicar
}
```

👉 As funções são executadas quando o evento acontece.

---

## 🔗 Formas de usar eventos

### 1. Diretamente no HTML

```html
<div onclick="clicar()"></div>
```

---

### 2. Usando JavaScript (forma mais recomendada)

```javascript
var a = document.getElementById('area')

a.addEventListener('click', clicar)
```

📌 Essa forma é mais organizada e profissional.

---

## 🎯 Principais eventos utilizados

* `click` → clique
* `mouseenter` → mouse entra
* `mouseout` → mouse sai

📌 Existem muitos outros eventos (JavaScript DOM Events List).

---

## 🎨 Manipulando elementos

Durante os eventos, foi mostrado como alterar:

### Texto:

```javascript
a.innerText = 'Clicou!'
```

---

### Estilo:

```javascript
a.style.background = 'red'
```

---

## 🔢 Interação com inputs

Também foi criado um exemplo de soma utilizando inputs.

### Capturando valores:

```javascript
var n1 = Number(tn1.value)
var n2 = Number(tn2.value)
```

📌 O valor do input sempre vem como **string**, por isso é necessário converter.

---

### Exibindo resultado:

```javascript
res.innerHTML = `Resultado: ${s}`
```

👉 `innerHTML` permite usar HTML dentro do conteúdo.

---

## ⚠️ Diferença entre innerText e innerHTML

* `innerText` → apenas texto
* `innerHTML` → aceita HTML (ex: `<strong>`)

---

## 🛠️ Debugando (encontrando erros)

Foi mostrado como identificar erros usando:

### 🔍 Inspect (DevTools)

* clicar com botão direito → “Inspecionar”
* ver erros no console

---

### 🧪 Console

Permite testar comandos JavaScript diretamente no navegador.

---

## 🌐 window.document

Foi reforçado o uso de:

```javascript
window.document
```

ou simplesmente:

```javascript
document
```

👉 Ambos funcionam, pois `document` está dentro de `window`.

---

## 💡 Boas práticas (extra)

* Preferir `addEventListener` ao invés de usar eventos direto no HTML
* Sempre converter valores de input quando necessário
* Usar `querySelector` quando quiser mais flexibilidade
* Separar lógica (JS) da estrutura (HTML)

---

## 🧠 Observações importantes

* Eventos são a base da interatividade
* Funções são essenciais para responder eventos
* DOM permite alterar conteúdo e estilo em tempo real
* Debug é uma habilidade essencial no desenvolvimento

---

## ✅ Conclusão

Nesta aula foram apresentados os eventos DOM, mostrando como capturar ações do usuário, executar funções e manipular elementos da página, tornando o site interativo.
