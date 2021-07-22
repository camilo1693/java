/*-------------ejercicio 1-----------------------*/
var edad = 59;
var simon = 59;

if (edad > simon) {
  console.log("mayor");
}

if (edad == simon) {
  console.log("igual");
}
if (edad < simon) {
  console.log("menor");
}

/*-----------------------ejercicio 2-----------------------------*/

function par() {
  let numero2 = document.getElementById("numero1");
  let numero = parseFloat(numero2.value);

  if (numero % 2 == 0) {
    document.getElementById("area").value = "el numero es par";
  } else {
    document.getElementById("area").value = "el numero es impar";
  }
}

/*--------------------ejercico 3--------------------------------*/

let numeros = [
  45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28,
  51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43,
];

let resultado = [];

for (i = 0; i < numeros.length; i++) {
  var num = numeros[i];
  if (num % 3 == 0) {
    resultado.push(num);
  }
}

console.log(resultado);

/*-------------------------------ejercicio 4----------------------------*/

let menor = numeros[0];

for (i = 0; i < numeros.length; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

console.log(menor);

/*--------------------------------ejecicio 5---------------------------------------*/

let mayor = numeros[0];

for (i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

console.log(mayor);

/*-----------------------------------ejercicio 7-----------------------------------*/
let pares = [
    45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28,
    51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43,
  ];

  let impar=[]

for (i = 0; i < pares.length; i++) {
    var num = pares[i];
    if (num % 2 == 0) {
      pares.splice(i, 1);
      i=i-1;
    }
  }
  
  console.log(pares);

/*----------------------------------ejercicio 8--------------------------------------- */

var n1;
var n2;
var suma;
var suma2;
var contador=0;
let fin = [];


  n1= Math.floor(Math.random()*6)+1;
  n2= Math.floor(Math.random()*6)+1;
  suma2=n1+n2;

for (i = 0; i < 36000; i++) {
    n1= Math.floor(Math.random()*6)+1;
    n2= Math.floor(Math.random()*6)+1;
    suma=n1+n2;
    if (suma == suma2) {
      contador=contador+ 1;
      fin.push(contador);
    }
}

console.log(fin);
console.log(suma2);
console.log(contador);

/*--------------------------ejercicio 9----------------------------------*/

