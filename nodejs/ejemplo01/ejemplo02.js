/*
ejemplo 02(while)
*/


//ahora, repetir hasta que z ==10
z = 0;
while (z != 10) {
    z = Math.floor(Math.random() * 51);
    console.log("el valor de z es: " + z)

    // https://www.w3schools.com/js/js_if_else.asp
    if (z > 10) {
        console.log("z es > 10")
    } else if (z < 10) {
        console.log("z es < 10")
    } else if (z == 10) {
        console.log("z es igual a 10")
    }
}


// otro modo

seguir = true;

while (seguir) {

    z = Math.floor(Math.random() * 51);
    console.log("El valor de z es: " + z)

    // https://www.w3schools.com/js/js_if_else.asp
    if (z > 10) {
        console.log("z es > 10") 
    } else if (z < 10) {
        console.log("z es < 10")     
    } else if (z == 10) {
        console.log("z es igual a 10") 
    } 

    if (z == 10) {
        seguir = false;
    }
}




