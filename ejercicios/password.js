function password(texto) {
 
 
    let R = "";

  for (let i = 0; i < texto.length; i++) {
    let Cararcter = texto[i].toLowerCase();

    if (Cararcter === " ") {
      // no se agrega nada
    } else if (Cararcter === "a") {
      R = R + "4";
    } else if (Cararcter === "e") {
      R = R + "3";
    } else if (Cararcter === "i") {
      R = R + "1";
    } else if (Cararcter === "o") {
      R = R + "0";
    } else {
      R = R + Cararcter;
    }
  }

  return R;
}

// código de prueba
console.log(password("hola"));                // "h0l4"
console.log(password("esta es una prueba"));  // "3st43sun4pru3b4"
console.log(password(""));                    // ""
