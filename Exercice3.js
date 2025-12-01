let n = Number (prompt("Donnez un nombre: "));

let message = "";

if (n<0){alert("Le nombre est négatif");}
else if (n>=0 && n<=10){alert("Petit");}
else if (n>10 && n<=50){alert("Moyen");}
else if (n>50 && n<100){alert("Grand");}
else if (n>=100){alert("Très grand");}
