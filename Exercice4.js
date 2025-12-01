let min = Number(prompt("Entrez la valeur minimale :"));
let max = Number(prompt("Entrez la valeur maximale :"));

for(let i = min; i <= max; i++) {
    console.log(i);
    if (i % 3 ===0) {
        if (i % 5 ===0) {
            console.log(i + " est un multiple de 3 et 5");
            continue;
        }
        console.log(i + " est un multiple de 3");
    }

    else if(i % 5 ===0) {
        if (i % 3 ===0) {
            console.log(i + " est un multiple de 3 et 5");
            continue;
        }
        console.log(i + " est un multiple de 5");
    }
    
}