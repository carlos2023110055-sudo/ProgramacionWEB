function likes(Numero) {
 
    let R = "";

  if (Numero < 1000) 
    {R = "" + Numero;
  } 
  else if (Numero >= 1000 && Numero < 1000000) 
    {R = parseInt(Numero / 1000) + "K";
  } 
  else 
    {R = parseInt(Numero / 1000000) + "M";
  }

  return R;
}

// código de prueba
console.log(likes(983));       // "983"
console.log(likes(1900));      // "1K"
console.log(likes(54000));     // "54K"
console.log(likes(120800));    // "120K"
console.log(likes(25222444));  // "25M"
