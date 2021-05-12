var biciclette = [
    {
        nome: 'super02',
        peso: 11,
    },
    {
        nome: 'super01',
        peso: 7,
    },
    {
        nome: 'super03',
        peso: 15,
    },
    {
        nome: 'super04',
        peso: 9,
    },
];
console.log(biciclette)
var biciLeggera = biciclette[0];

for (var i = 1; i < biciclette.length; i++) {
    var biciCorrente = biciclette[i];

    if (biciCorrente.peso < biciLeggera.peso) {
        biciLeggera = biciCorrente;
    }
}

console.log(biciLeggera)
var { nome, peso } = biciLeggera;
document.getElementById("bicicletta").innerHTML = `${nome} con peso ${peso} kg`;