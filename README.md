# 🏅 Projeto de Certificação 1 — Pontuação dos Atletas

🎓 Este projeto foi desenvolvido como parte da **Trilha 1: Lógica de Programação**,
na **Fase 8 — Projetos Avançados**, do curso **Jornada DEVstart CE** do **SENAI/SC**.

O desafio integra o módulo **“Projetos de Certificação”** e tem como objetivo aplicar conceitos de lógica de programação e manipulação de dados em **JavaScript**, desenvolvendo uma aplicação capaz de calcular a **média válida** das notas de atletas em uma competição de ginástica artística.

Cada atleta recebe **cinco notas** de jurados, e a média é calculada **desconsiderando a maior e a menor nota**.

---

## 🧮 Funcionalidades

* Recebe o nome e as cinco notas de cada atleta;
* Calcula a média das três notas intermediárias;
* Exibe no console o nome do atleta, suas notas e a média calculada.

---

## 💻 Exemplo de Entrada

```javascript
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];
```

---

## 🧾 Exemplo de Saída

```
Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 9,253333

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 10,7,8,9.5,9.5
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.83333333333
```

---

## 🚀 Como executar

1. Clone o repositório:

   ```
   git clone https://github.com/kairondutra/notas-atletas
   ```

2. Abra o arquivo `notas-atletas.js` no seu editor (VS Code, por exemplo);

3. Execute o código em um ambiente JavaScript (como o console do navegador ou Node.js);

4. Veja o resultado no console.

---

## 🧠 Tecnologias utilizadas

* JavaScript (ES6)

---

## ✍️ Autor

Projeto desenvolvido por **Kairon Dutra** como parte de um desafio do **Jornada DEVstart CE — SENAI/SC**.
