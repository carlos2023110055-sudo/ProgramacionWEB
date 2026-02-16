function contarRango(I, F) {
  let Contador = 0;

  for (let i = I + 1; i < F; i++) {
    Contador++;
  }

  return Contador;
}

// código de prueba
console.log(contarRango(1, 9));       // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6));       // 0
