# Aula 14 — Repetições (Parte 2)

## 📖 Introdução

Nesta aula foi apresentada a estrutura de repetição:

```javascript
for
```

Ela é conhecida como:

- Estrutura de repetição com variável de controle
- Laço controlado
- Loop com contador

O `for` é muito utilizado quando sabemos:
- onde a repetição começa
- até onde ela vai
- e qual será o incremento

---

# 🔁 Estrutura `for`

## 📌 Sintaxe

```javascript
for (inicio; teste; incremento) {
    bloco
}
```

---

# 🧠 Explicação da estrutura

## ✅ Início

Executado apenas uma vez.

Normalmente cria a variável de controle.

Exemplo:

```javascript
var c = 1
```

---

## ✅ Teste

Verifica se a repetição continuará.

Exemplo:

```javascript
c <= 10
```

Enquanto for verdadeiro:
- o laço continua

---

## ✅ Incremento

Atualiza a variável a cada repetição.

Exemplo:

```javascript
c++
```

---

# 🧱 Estrutura completa

```javascript
for (var c = 1; c <= 10; c++) {
    console.log(c)
}
```

---

# 📌 Funcionamento

## 1️⃣ Início

```javascript
var c = 1
```

---

## 2️⃣ Teste

```javascript
c <= 10
```

Se for verdadeiro:
- executa o bloco

---

## 3️⃣ Bloco

```javascript
console.log(c)
```

---

## 4️⃣ Incremento

```javascript
c++
```

Aumenta 1 no contador.

---

## 🔁 Repete tudo novamente

Até o teste ficar falso.

---

# 🔄 Comparação com `while`

## ✅ Utilizando `while`

```javascript
var c = 1

while (c <= 5) {
    console.log(c)
    c++
}
```

---

## ✅ Utilizando `for`

```javascript
for (var c = 1; c <= 5; c++) {
    console.log(c)
}
```

---

# 📌 Vantagem do `for`

O `for` deixa:
- o código menor
- mais organizado
- mais profissional
- mais fácil de entender

Porque:
- início
- teste
- incremento

ficam todos na mesma linha.

---

# 🧪 Exemplos vistos na aula

## 📌 Estrutura comentada

```javascript
/*var c = 1 

while {
    console.log(c)
    c++
} */
```

O professor mostrou como uma repetição feita com `while` pode ser convertida para `for`.

---

# 🚀 Exemplo utilizando `for`

```javascript
for(var c =1;c <= 1000000000; c++) {

}
```

---

# 📌 Explicação

## `var c = 1`
Início da variável.

---

## `c <= 1000000000`
Teste lógico.

---

## `c++`
Incremento.

---

# ⚠️ Observação importante

Mesmo sem mostrar nada no console:

```javascript
for(var c =1;c <= 1000000000; c++) {

}
```

o computador continua executando:
- bilhões de repetições

Isso pode:
- deixar o programa lento
- consumir processamento

---

# 🐞 Modo Depuração

Foi mostrado também o:

```text
Modo depuração
```

Utilizado para:
- acompanhar o código passo a passo
- identificar erros
- observar variáveis
- entender o fluxo do programa

---

# 🧪 Exemplo visto na aula

```javascript
console.log('Vai começar...')

for (var c = 1; c <= 4; c++) {
    console.log(c)
}

console.log('FIM!')
```

---

# 📌 Resultado

```text
Vai começar...
1
2
3
4
FIM!
```

---

# 🧠 Explicação passo a passo

## 1️⃣

```javascript
console.log('Vai começar...')
```

Mostra a mensagem inicial.

---

## 2️⃣

```javascript
for (var c = 1; c <= 4; c++)
```

Cria o laço:
- começa em 1
- vai até 4
- incrementa de 1 em 1

---

## 3️⃣

```javascript
console.log(c)
```

Mostra o valor atual.

---

## 4️⃣

```javascript
console.log('FIM!')
```

Executa após o término do laço.

---

# 🛠️ Modo Depuração no VS Code

O professor também mostrou o modo de depuração no VS Code.

## 📌 Funções principais

- executar linha por linha
- observar variáveis
- encontrar erros
- entender o comportamento do código

---

# ▶️ Como iniciar depuração

## Tecla:

```text
F5
```

---

# ⏸️ Breakpoints

São pontos de parada no código.

Criados clicando ao lado do número da linha.

Permitem:
- pausar a execução
- analisar o programa

---

# 🔍 O que pode ser observado

- valor das variáveis
- fluxo do laço
- quantidade de repetições
- erros lógicos

---

# ⚠️ Cuidados importantes

## Evitar loops infinitos

Exemplo errado:

```javascript
for (var c = 1; c <= 10;) {
    console.log(c)
}
```

Problema:
- não existe incremento
- o laço nunca termina

---

# ✨ Incremento

O incremento pode ser:

## ➕ Crescente

```javascript
c++
```

---

## ➖ Decrescente

```javascript
c--
```

---

# 🔄 Exemplo decrescente

```javascript
for (var c = 10; c >= 1; c--) {
    console.log(c)
}
```

---

# 🧠 Conceitos importantes da aula

- O `for` é uma repetição com variável de controle
- Possui:
  - início
  - teste
  - incremento
- Deixa o código mais organizado
- Pode substituir muitos `while`
- É muito utilizado em programação
- O modo depuração ajuda a entender erros
- Breakpoints pausam o código
- Loops infinitos devem ser evitados

---

# ✅ Resumo Final

Nesta aula aprendemos:
- estrutura `for`
- variável de controle
- início, teste e incremento
- diferenças entre `while` e `for`
- modo depuração
- breakpoints
- funcionamento dos laços
- riscos de loops infinitos
- repetições crescentes e decrescentes
