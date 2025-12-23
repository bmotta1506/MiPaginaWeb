const enviar = () => {
  const motivo = document.querySelector('select[name="form-opciones"]');
  const nombre = document.querySelector('input[name="Nombres"]');
  const tipoDoc = document.querySelectorAll('select[name="form-opciones"]')[1];
  const numDoc = document.querySelector('input[name="tipodocumento"]');
  const celular = document.querySelector('input[name="celular"]');
  const email = document.querySelector('input[name="email"]');
  const ciudad = document.querySelector('select[name="Ciudad"]');
  const distrito = document.querySelector('select[name="Distrito"]');
  const terminos = document.querySelector('input[name="terminos"]');
  if (motivo.value === "") {
    alert("Seleccione un motivo");
    return;
  }
  if (nombre.value.trim() === "") {
    alert("Ingrese su nombre y apellido");
    return;
  }
  if (tipoDoc.value === "") {
    alert("Seleccione un tipo de documento");
    return;
  }
  if (numDoc.value.trim() === "") {
    alert("Ingrese el número de documento");
    return;
  }
  if (!/^\d+$/.test(numDoc.value)) {
    alert("El número de documento solo debe contener números");
    return;
  }
  if (celular.value.trim() === "") {
    alert("Ingrese su número de celular");
    return;
  }
  if (!/^\d{9}$/.test(celular.value)) {
    alert("El celular debe tener 9 dígitos");
    return;
  }
  if (email.value.trim() === "") {
    alert("Ingrese su correo electrónico");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    alert("Correo electrónico no válido");
    return;
  }
  if (ciudad.value === "") {
    alert("Seleccione una ciudad");
    return;
  }
  if (distrito.value === "") {
    alert("Seleccione un distrito");
    return;
  }
  if (!terminos.checked) {
    alert("Debes aceptar los términos y condiciones");
    return;
  }
  alert("Formulario enviado correctamente");
};
