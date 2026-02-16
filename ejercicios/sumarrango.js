function sumarRango(I, F) {
  let suma = 0;

  if (I === F) {
    
    return 0;
  }

  for (let i = I; i <= F; i++) {
   
    suma = suma + i;
  }

  return suma;
}

// código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0
