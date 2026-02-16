function numAsteriscos(M) {


  let C = 0;

  for (let i = 0; i< M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
      if (M[i][j] === '*') {
        C++;
      }
    }
  }

  return C;
}

// código de prueba
console.log(numAsteriscos([
  ['*', '', '*'],
  ['', '*', ''],
  ['*', '', '*']
]));
// 5
