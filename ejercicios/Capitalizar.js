function capitalizar(Texto) {

  if (Texto === "") {
    return "";
  }

  let   PL = Texto[0].toUpperCase();
  let TextoC = Texto.slice(1);

  return PL + TextoC;
}

// código de prueba
console.log(capitalizar("pedro"));      // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar(""));           // ""
