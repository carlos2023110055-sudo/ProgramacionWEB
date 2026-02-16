function removerCeros(Arreglo) {


  let NArreglo = [];

         for (let i = 0; i < Arreglo.length; i++) {
   
        if (Arreglo [i] !== 0) {
        NArreglo.push(Arreglo[i]);
    }
  }

  return NArreglo;
}

// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])); // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4]));      // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0]));         // []
