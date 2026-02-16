function multiplicarArreglo(ARREGLO) {
 
 
    let R = 1;

  for (let i = 0; i < ARREGLO.length; i++) {
    R=R * ARREGLO[i];
    
  }


  return R;

}

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3]));      // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([]));               // 1
