function empiezanConA(arreglo) {
  let resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    let palabra = arreglo[i];

    if (palabra.length > 0) {
      let primeraLetra = palabra[0].toLowerCase();

      if (primeraLetra === "a") {
        resultado.push(palabra);
      }
    }
  }

  return resultado;
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"]));
// ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])); // []
console.log(empiezanConA([])); // []
