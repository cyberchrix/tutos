let display = document.getElementById("display");

// Ajouter un nombre au champ d'affichage
function appendNumber(number) {
  if (display.value === "0" || display.value === "Erreur") {
    display.value = number;
  } else {
    display.value += number;
  }
}

// Ajouter un opérateur au champ d'affichage
function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if (["+","-","*","/"].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

// Calculer l'expression
function calculate() {
  try {
    display.value = eval(display.value); // Évaluer l'expression (Attention, à utiliser avec précaution !)
  } catch (error) {
    display.value = "Erreur";
  }
}

// Réinitialiser le champ d'affichage
function clearDisplay() {
  display.value = "";
}