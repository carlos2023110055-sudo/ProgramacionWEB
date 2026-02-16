function terminanConS(Arreglo) {
  let R = [];

  for (let i= 0; i <Arreglo.length; i++) {

    let Palabra = Arreglo[i];

    if (Palabra.length > 0) {

      let Uletra = Palabra[Palabra.length - 1].toLowerCase();

      if (Uletra === "s") {

        R.push(Palabra);
      }
    }
  }

  return R;
}

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"]));
// ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])); // []
console.log(terminanConS([])); // []
