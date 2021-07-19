/*-------------ejercicio 1-----------------------*/
var edad = 58;

if (edad > 59) {
  console.log("mayor");
}

if (edad >= 59) {
  console.log("igual");
}
if (edad < 59) {
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
