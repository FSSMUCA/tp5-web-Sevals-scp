let n = Number(prompt("Donne un nombre entier positif"));
while(n<0){
    alert("Le nombre doit etre un entier positif")
    n = Number(prompt("Donne un nombre"));
}

function Factoriel(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * Factoriel(n - 1);
}


alert("Factorielle("+n+") = " + Factoriel(n));