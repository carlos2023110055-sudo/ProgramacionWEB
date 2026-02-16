function bmi(peso, altura) {
  let indice = peso / (altura * altura);

  if (indice < 18.5) {
        return "PESO BAJO";


  } else if (indice >= 18.5 && indice <= 24.9) {
        return "PESO NORMAL";


  } else if (indice >= 25 && indice <= 29.9) {
        return "SOBRE PESO";


  } else {
        return "OBESIDAD";
  }
}


// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) // "Bajo de peso"