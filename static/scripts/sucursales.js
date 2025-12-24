const regionSelect = document.getElementById("filtro-region");
const checkboxes = document.querySelectorAll(
  '.sidebar input[type="checkbox"]'
);
const cards = document.querySelectorAll(".card");
function filtrarSucursales() {
  const region = regionSelect.value;
  const serviciosSeleccionados = [];
  checkboxes.forEach((cb) => {
    if (cb.checked && cb.value !== "Todos") {
      serviciosSeleccionados.push(cb.value);
    }
  });
  cards.forEach((card) => {
    const cardRegion = card.dataset.region;
    const cardServicios = card.dataset.servicios.split(" ");
    let mostrar = true;
    if (region !== "Región" && region !== cardRegion) {
      mostrar = false;
    }
    if (serviciosSeleccionados.length > 0) {
      const coincide = serviciosSeleccionados.some((s) =>
        cardServicios.includes(s)
      );
      if (!coincide) mostrar = false;
    }
    if (mostrar) {
        card.classList.remove("oculto");
    } else {
        card.classList.add("oculto");
    }
  });
}
regionSelect.addEventListener("change", filtrarSucursales);
checkboxes.forEach((cb) => {
  cb.addEventListener("change", () => {
    if (cb.value === "Todos") {
      checkboxes.forEach((c) => (c.checked = false));
      cb.checked = true;
    } else {
      checkboxes.forEach((c) => {
        if (c.value === "Todos") c.checked = false;
      });
    }
    filtrarSucursales();
  });
});