function fizzBuzz(Numero) {
  if (Numero % 3 === 0 && Numero % 5 === 0) 
    {
    return "fizzbuzz";
  } else if (Numero % 3 === 0) 
    {
    return "fizz";
  } 
  else if (Numero % 5 === 0) {
    return "buzz";

  } 
  else {

    return "" + Numero;
  }
}

// código de prueba
console.log(fizzBuzz(6));   // "fizz"
console.log(fizzBuzz(20));  // "buzz"
console.log(fizzBuzz(30));  // "fizzbuzz"
console.log(fizzBuzz(8)); // 8
