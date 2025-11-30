

let totalHT = Number(prompt("Veuillez entrer le montant total de la facture :"));
let remise = -1;

while (remise < 0 || remise > 100){
    remise = Number(prompt("Veuillez entrer le pourcentage de remise (sans le signe %) :"));
    if (remise < 0 || remise > 100){
        alert("Le pourcentage de remise doit être compris entre 0 et 100.");
    }
}

function TotalApresRemise(totalHT, remise) {
    return totalHT - (totalHT * (remise / 100));;
}

alert("Le total après remise est : " + TotalApresRemise(totalHT, remise));