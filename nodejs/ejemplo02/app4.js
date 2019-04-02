var express = require('express');
var app = express();

app.get('/', function (req, res) {
  
  tiempo = [
    {dia:"Miércoles", cielo:"lluvia", temperatura:12},
    {dia:"Jueves", cielo:"Nublado", temperatura:20},
    {dia:"Viernes", cielo:"lluvia", temperatura:23},
    {dia:"Sábado", cielo:"sol", temperatura:10},
    {dia:"Domingo", cielo:"sol", temperatura:5},
    {dia:"Lunes", cielo:"Nublado", temperatura:0},
  ]
  
  res.send('tiempo');
});




app.get('/web', function (req, res) {
    res.send(tiempo[1]);
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});