function min(Arreglo) {

    
  let M = Arreglo[0];

  for (let i = 1; i < Arreglo.length; i++) {
    if (Arreglo[i] < M) {
    M= Arreglo[i];
    }
  }

  return M;
}

// código de prueba
console.log(min([3, 9, 6]));           // 3
console.log(min([67, 35, 54, 26]));     // 26
console.log(min([5, 9, 2, 4, 5, 7]));   // 2
