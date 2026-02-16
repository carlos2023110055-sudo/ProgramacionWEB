function numerosAPalabras(arreglo) {
  let palabras = [
    "cero","uno","dos","tres", "cuatro","cinco", "seis", "siete", "ocho", "nueve"
  ];

  let resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    resultado.push(palabras[arreglo[i]]);
  }

  return resultado;
}

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4]));
// ["cero", "uno", "dos", "tres", "cuatro"]

console.log(numerosAPalabras([5, 6, 7, 8, 9]));
// ["cinco", "seis", "siete", "ocho", "nueve"]
