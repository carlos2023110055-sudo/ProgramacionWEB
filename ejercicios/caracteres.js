function numeroDeCaracteres(TEXTO, CARACTER) {
  let c = 0;

  for (let i = 0; i < TEXTO.length; i++) {
    if (TEXTO[i] === CARACTER) {
      c++;
    }
  }

  return c;
}


// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2

console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4