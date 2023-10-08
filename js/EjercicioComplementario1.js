function aquiEmpiezaElCodigo() {
  //Identifico a los elementos que les dare funcionalidad
  var tema1 = document.getElementById("tema");
  var ejer1 = document.getElementById("ejercicio1");
  var ejer2 = document.getElementById("ejercicio2");
  var ejer3 = document.getElementById("ejercicio3");
  mensajeDeAlerta(tema1);
  mensajeDeAlerta(ejer1);
  mensajeDeAlerta(ejer2);
  mensajeDeAlerta(ejer3);
}

function mensajeDeAlerta(enlaceQuePresione) {
  enlaceQuePresione.addEventListener("click", function (nohref) {
    nohref.preventDefault();
    let booleano = window.confirm(
      "¿Está usted seguro que quiere ir al enlace del " +
        enlaceQuePresione.textContent +
        "?"
    );
    if (booleano) {
      window.location.href = enlaceQuePresione.href;
    }
  });
}

window.onload = aquiEmpiezaElCodigo;
