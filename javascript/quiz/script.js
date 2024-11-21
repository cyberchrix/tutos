function repondre(choix) {
    const reponseElement = document.getElementById("reponse");
  
    if (choix === "forcer") {
      reponseElement.textContent = "La porte se casse et tu te blesses. Mauvais choix !";
    } else if (choix === "chercher") {
      reponseElement.textContent = "Bravo ! Tu trouves une clé cachée sous le tapis.";
    } else if (choix === "ignorer") {
      reponseElement.textContent = "Tu passes à côté d'une pièce secrète pleine de trésors...";
    } else {
      reponseElement.textContent = "Choix non reconnu.";
    }
  }