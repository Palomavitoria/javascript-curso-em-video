# Aula 12 — Condições (Parte 2)

## 📌 Introdução

Nesta aula foram aprofundados os conceitos de condições em JavaScript, apresentando as condições aninhadas e as condições múltiplas com `switch`.

Também foi mostrado como obter informações do sistema, como a hora atual, e como utilizar o inspetor do navegador para identificar erros no código.

---

## 🌿 Condições Aninhadas

Condições aninhadas acontecem quando existe uma condição dentro de outra.

👉 Isso permite criar verificações mais detalhadas.

---

## 🧠 Estrutura básica

```javascript id="u9o7wv"
if (condicao1) {
    // bloco
} else {
    if (condicao2) {
        // bloco
    } else {
        // bloco
    }
}
```

---

## ✨ Forma mais utilizada (`else if`)

JavaScript permite simplificar condições aninhadas usando:

```javascript id="g2m2q7"
if (condicao1) {
    
} else if (condicao2) {

} else {

}
```

---

## 📌 Exemplo

```javascript id="fmn7dx"
var hora = 14

if (hora < 12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}
```

---

## 🕒 Pegando a hora atual do sistema

Foi mostrado como obter informações do sistema usando o objeto `Date`.

### Criando um objeto Date:

```javascript id="zef1na"
var agora = new Date()
```

---

### Obtendo a hora atual:

```javascript id="68q7dr"
var hora = agora.getHours()
```

📌 O método `getHours()` retorna a hora atual do sistema.

---

## 🧩 Condição Múltipla

A condição múltipla é utilizada quando existem vários valores fixos possíveis.

Ela é feita usando:

```javascript id="sb4jqn"
switch
```

---

## ⚙️ Estrutura do switch

```javascript id="p8cctj"
switch (expressao) {
    case valor1:
        // bloco
        break

    case valor2:
        // bloco
        break

    default:
        // bloco padrão
}
```

---

## 🧠 Funcionamento

* `switch` → avalia a expressão
* `case` → verifica os possíveis valores
* `break` → interrompe a execução
* `default` → executa caso nenhum valor seja encontrado

---

## 📌 Exemplo

```javascript id="f7ofn2"
var dia = 3

switch (dia) {
    case 1:
        console.log('Domingo')
        break

    case 2:
        console.log('Segunda')
        break

    case 3:
        console.log('Terça')
        break

    default:
        console.log('Dia inválido')
}
```

---

## ⚠️ Importância do break

O `break` impede que os próximos blocos sejam executados.

Sem ele, o programa continuará executando os próximos `case`.

---

## 🔍 Identificando erros com o Inspetor

Foi mostrado como utilizar o inspetor do navegador (DevTools) para encontrar falhas no código.

### Ferramentas utilizadas:

* Console
* Inspect / Inspecionar elemento
* DevTools

---

## 🧪 Console

O console ajuda a:

* visualizar erros
* testar comandos
* acompanhar variáveis

---

## 💡 Observações importantes

* Condições aninhadas tornam decisões mais específicas
* `else if` deixa o código mais organizado
* `switch` é recomendado para valores fixos
* `break` é essencial no `switch`
* O objeto `Date` permite acessar informações do sistema

---

## 🧠 Diferença entre if e switch

### `if`

Mais flexível para comparações:

```javascript id="b9a1df"
if (idade >= 18)
```

---

### `switch`

Melhor para valores fixos:

```javascript id="bg76r5"
switch (dia)
```

---

## 🚀 Boas práticas

* Evitar excesso de condições aninhadas
* Manter o código organizado e indentado
* Utilizar nomes claros para variáveis
* Sempre testar o código no console

---

## ✅ Conclusão

Nesta aula foram apresentados os conceitos de condições aninhadas e condições múltiplas em JavaScript, além do uso do `switch`, `case`, `break` e do objeto `Date`, permitindo criar decisões mais avançadas nos programas.
