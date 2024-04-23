/* Crie uma variável para armazenar o nome e a quantidade de XP (experiência) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata 
Se XP for entre 5.001 e 7.000 = Ouro 
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/
const nomeHeroi = "Bruno"
let nivel = "Iniciante"
const xp = 9001

if (xp < 1001) {
  nivel = "Ferro"
} else if (xp < 2001) {
  nivel = "Bronze"
} else if (xp < 5001) {
  nivel = "Prata"
} else if (xp < 7001) {
  nivel = "Ouro"
} else if (xp < 8001) {
  nivel = "Platina"
} else if (xp < 9001) {
  nivel = "Ascendente"
} else if (xp < 10001) {
  nivel = "Imortal"
} else {
  nivel = "Radiante"
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)