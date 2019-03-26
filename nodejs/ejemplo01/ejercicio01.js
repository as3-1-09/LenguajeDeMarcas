/*
ejemplo 03: for + arrays + JSON
*/


//https://www.w3schools.com/js/js_loop_for.asp
//https://www.w3schools.com/js/js_objects.asp
//https://www.w3schools.com/js/js_arrays.asp

/* 
Definir los datos meteorologicos de la tendencia de los proximos 6 dias. Con arrays y diccionarios

http://www.euskalmet.euskadi.eus
*/

tiempo = [
    {dia:"Miércoles", cielo:"lluvia", temperatura:12},
    {dia:"Jueves", cielo:"Nublado", temperatura:20},
    {dia:"Viernes", cielo:"lluvia", temperatura:23},
    {dia:"Sábado", cielo:"sol", temperatura:10},
    {dia:"Domingo", cielo:"sol", temperatura:5},
    {dia:"Lunes", cielo:"Nublado", temperatura:0},
]

/*
Imprimir los datos usando 'for' y console.log
*/



/*
console.log(tiempo[0].dia + " " + tiempo[0].cielo)
console.log(tiempo[1].dia + " " + tiempo[0].cielo)
console.log(tiempo[2].dia + " " + tiempo[0].cielo)
console.log(tiempo[3].dia + " " + tiempo[0].cielo)
console.log(tiempo[4].dia + " " + tiempo[0].cielo)
console.log(tiempo[5].dia + " " + tiempo[0].cielo)
*/


/*
var i;
for (i = 0; i < tiempo.length; i++) { 
    //console.log(i)
    console.log(tiempo[i].dia + " " + tiempo[i].cielo + " " + tiempo[i].temperatura) 
}
*/

/*
Solo imprimir los días de lluvia. Pista: Usar 'if'
*/


var i;
for (i = 0; i < tiempo.length; i++) { 
    //console.log(i)
    if (tiempo[i].cielo == 'lluvia'){
    console.log(tiempo[i].dia + " " + tiempo[i].cielo + " " + tiempo[i].temperatura) 
    }
}


/* 
Crear una página HTML con los datos anteriores usando las imagenes (sol, lluvia,...)

nube: http://www.euskalmet.euskadi.eus/appcont/meteorologia/meteodat/images/12.png
...

*/











/*
tiempo = []
miercoles = {tiempo:"lluvia",temperatura: 9}
jueves = {tiempo: "nublado",temperatura:13}
viernes = {tiempo:"soleado",temperatura:22}
sabado = {tiempo:"soleado",temperatura:20}
domingo = {tiempo:"lluvia",temperatura:7}
lunes = {tiempo:"lluvia",temperatura:5}
tiempo = [miercoles,jueves,viernes,sabado,domingo,lunes]

console.log(tiempo)

*/



