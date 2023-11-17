// Definindo as variáveis
var nome = "SeuHerói";
var xp = 5000; // Substitua este valor pelo nível de experiência desejado

// Utilizando uma estrutura de decisão (if-else) para determinar o nível
var nivelDoHeroi;

if (xp < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xp <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xp <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xp <= 6000) {
    nivelDoHeroi = "Ouro";
} else if (xp <= 7000) {
    nivelDoHeroi = "Platina";
} else if (xp <= 8000) {
    nivelDoHeroi = "Ascendente";
} else if (xp <= 9000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

// Exibindo a mensagem final
console.log("O Herói de nome " + nome + " está no nível " + nivelDoHeroi);