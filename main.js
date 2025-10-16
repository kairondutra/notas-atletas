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

for (let i = 0; i < atletas.length; i++){
    // Armazena o nome e as notas do atleta atual
    let atleta = atletas[i].nome;
    let notas = atletas[i].notas;

    // Ordena as notas em ordem crescente
    notas.sort((a, b) => a - b)

    // Remove a menor e a maior nota (ficando com as três do meio)
    let notasComputadas = notas.slice(1,4)

    // Calcula a soma das notas válidas
    let soma = notasComputadas.reduce((soma, numero) => soma + numero, 0)

    // Calcula a média das três notas intermediárias
    let media = soma / notasComputadas.length

    // Exibe o resultado formatado no console
    console.log(`Atleta: ${atleta}\nNotas Obtidas: ${notas.join(", ")}\nMédia Válida: ${media}\n`)
}