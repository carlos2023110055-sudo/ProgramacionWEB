function numAsteriscos(Arreglo) {
  let C = 0;

  for (let i = 0; i < Arreglo.length; i++) {
    if (Arreglo[i] === "*") {
      C++;
    }
  }

  return C;
}

// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*']))    // 3
console.log(numAsteriscos([]))                 // 0
