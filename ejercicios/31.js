function distancia(string1,string2){ 

let C= 0;

    for (let i= 0; i < string1.length; i++){

        if (string1[i] !== string2[i]){
            C++

       
        }
    }
     return C;
}

// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3