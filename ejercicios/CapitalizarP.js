function capitalizar(Texto) {

  if (Texto === "") {
    return "";
  }

  let P = Texto.split(" ");
  let R = "";

  for (let i = 0; i < Palabras.length; i++) {
    let P = Palabras[i];

    if (P.length > 0) {
      
        let PL = P[0].toUpperCase();
          let resto = P.slice(1);
        R = R + PL + resto;
        
    }


    if (i < Palabras.length - 1) {
      R=R + " ";
    }
  }

  return R;
}

// código de prueba
console.log(capitalizar("hola mundo"));   // "Hola Mundo"
console.log(capitalizar("make it real")); // "Make It Real"
console.log(capitalizar(""));             // ""
