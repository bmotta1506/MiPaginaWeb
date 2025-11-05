const enviar = () => {
  let terminos = document.querySelector('input[name="terminos"]');
  let cel = document.querySelector('input[name="celular"');
  if (!terminos.checked) {
    alert("Debes aceptar los terminos");
  } else {
    if (!/^\+?\d+$/.test(cel.value)) {
      alert("numero no valido");
    } else {
      alert("Listo");
    }
  }
};
