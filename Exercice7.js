let MDP = prompt("Veuillez entrer votre mot de passe :");

function VerifierMDP(MDP) {
    if (MDP.length < 8) {
        console.log("Le mot de passe doit contenir au moins 8 caractères.");
        return false;
    }
    else{
        if (MDP.includes("@")) {
            console.log("Mot de passe valide.");
            return true;
        } else {
            console.log("Le mot de passe doit contenir le caractère '@'.");
            return false;
        }
    }
}

VerifierMDP(MDP);


