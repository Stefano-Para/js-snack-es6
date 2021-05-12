const getRandomNumber =  (min, max) =>  Math.floor(Math.random() * (max - min + 1) ) + min;

const squadre = [
    {
        nome: "Paperopolese",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Hellas Neo Tokyio 3",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Amestris UNITED",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Gotham-Ese",
        punti: 0,
        falli_subiti: 0
    }
];
console.log(squadre);

var squadreFalliSubiti = [];
var finalArray = [];

for (let i = 0; i < squadre.length; i++) {
    var squadra = squadre[i];
    // compilazione array SQUADRE di oggetti SQUADRA:
    squadra.punti = getRandomNumber(40, 80);
    squadra.falli_subiti = getRandomNumber(10, 100);
    // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.    
    let { nome, falli_subiti } = squadra;
    finalArray.push({nome, falli_subiti})
}

console.log(finalArray) // perchè funziona? Perchè ho fatto un finalArray [] con dentro squadra (ciclata per ciclo for quindi 4 squadre) {} composta da nome,falli_subiti.



