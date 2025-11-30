let n = Number(prompt("Donner un entier relatif: "))
let sum = 0

function sommeIterative(n){
    for(let i=1; i <= n; i++){
        sum += i;
    }
    return sum;
}

function sommeRecursive(n){
    if (n === 1){
        return 1;
    }
    return n + sommeRecursive(n-1);
}

alert("La somme par iterativite: " +sommeIterative(n));

alert("La somme par recursivite: " + sommeRecursive(n));

//1- Le code le plus lisible est celui par iterativite
//2- Le code le plus performant est par iterativite car ce code ne consome pas beacoup de memoire
//3- Oui, on peut avoir un probleme au niveau du max stack size car la fonction appelle elle meme infiniment
//4- Dans le cas on le nombre "n" est tres grand, si c'est le cas on tombe dans l'erreur du max stack size