/*
ejemplo 01(if): http server. read x and y and return sum
*/


// https://www.npmjs.com/package/http

/*
x = 5
y = 6

z = x + y
*/

z = Math.floor(Math.random() * 51);

// si la suma es > 10. Print "es mayor que 10"
// si no: "es menor que 10"
// si = 10: "es igual a 10"
// pista: usa "if / else"

// console.log(z)

console.log("el valor de z es: " + z)

// https://www.w3schools.com/js/js_if_else.asp
if (z > 10) {
    //true
    console.log("es mayor que 10")
} else if (z < 10) {
    //true
    console.log("es menor que 10")
} else {
    console.log("es igual a 10")
}

