let sumimpaire = 0
let sumpaire = 0

for(let i =1; i<=50; i++){
   

    if(i % 2 === 0){
        sumpaire += i
    }
    else if (i % 2 !== 0){
        sumimpaire += i
    }

}


console.log("La somme des nombres pairs est de : " + sumpaire)
console.log("La somme des nombres impairs est de : " + sumimpaire)
