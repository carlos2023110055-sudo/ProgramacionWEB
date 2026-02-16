function pares(Arreglo) {
  let R = [];

  for (let i = 0; i < Arreglo.length; i++) {
    if (Arreglo[i] % 2 === 0) {
      R.push(Arreglo[i]);
    }
  }

  return R;
}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(pares([]));                // []
