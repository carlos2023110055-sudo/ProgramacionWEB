function max(Arreglo) {
  
    let M = Arreglo[0];



  for (let i = 1;i < Arreglo.length; i++) {

    if (Arreglo[i] > M) {
      M = Arreglo[i];
    }
  }

  return M;
}

// código de prueba
console.log(max([3, 9, 6]));           // 9
console.log(max([67, 35, 54, 26]));     // 67
console.log(max([5, 9, 2, 4, 5, 7]));   // 9
