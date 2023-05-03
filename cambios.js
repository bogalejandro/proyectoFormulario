function validarFormulario() {
  var nombre = document.forms["formulario"]["nombre"].value;
  var correo = document.forms["formulario"]["correo"].value;
  var mensaje = document.forms["formulario"]["mensaje"].value;
  if (nombre == "" || correo == "" || mensaje == "") {
    alert("Por favor complete todos los campos.");
    return false;
  }
}

function confirmarEnvio() {
  var respuesta = confirm("¿Está seguro de que desea enviar el formulario?");
  if (respuesta == true) {
    return true;
  } else {
    return false;
  }
}