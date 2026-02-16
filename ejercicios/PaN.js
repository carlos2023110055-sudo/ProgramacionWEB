function palabrasANumeros(Arreglo) {
  let P = [
    "cero", "uno", "dos", "tres", "cuatro",
    "cinco", "seis", "siete", "ocho", "nueve"
  ];

  let R = [];

  for (let i = 0; i < Arreglo.length; i++) {
    let palabra = Arreglo[i];
    let N = -1;

    for (let j = 0; j < P.length; j++) {
      if (palabra === P[j]) {
        N = j;
      }
    }

    R.push(N);
  }

  return R;
}

// código de prueba
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"]));
// [0, 1, 2, 3, -1, 4]

console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"]));
// [5, 6, 7, 8, 9]
