function inicializar() {
  var botonesNumericos = document.querySelectorAll(".btn-primary");
  var botonesOperadores = document.querySelectorAll(".btn-success");
  var resultadoBtn = document.querySelector(".btn-success#igual");
var reiniciarBtn = document.querySelector(".btn-danger#borrar");

  var resultadoInput = document.getElementById("display");

  botonesNumericos.forEach(function (boton) {
    calcular(boton, resultadoInput);
  });

  botonesOperadores.forEach(function (boton) {
    calcular(boton, resultadoInput);
  });

  calcular(resultadoBtn, resultadoInput);
  calcular(reiniciarBtn, resultadoInput);
}

function calcular(botonquePuche, resultadoInput) {
  botonquePuche.addEventListener(
    "click",
    function () {
      switch (botonquePuche.textContent) {
        case "C":
          resultadoInput.value = "";
          break;
        case "=":
          try {
            resultadoInput.value = eval(resultadoInput.value);
          } catch (error) {
            resultadoInput.value = "Error";
          }
          break;
        default:
          resultadoInput.value += botonquePuche.textContent;
          break;
      }
    },
    false
  );
}

window.onload = inicializar;
