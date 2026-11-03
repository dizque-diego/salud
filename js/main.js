console.log(CONFIG);
const inicio = document.getElementById("inicio");
console.log(inicio);
const seccionServicios = document.getElementById("servicios");
console.log(seccionServicios);
const comoFunciona = document.getElementById("como-funciona");
console.log(comoFunciona);
const cobertura = document.getElementById("cobertura");
console.log(cobertura);
const preguntas = document.getElementById("preguntas");
console.log(preguntas);
CONFIG.servicios.forEach((servicio) => {
  if (servicio.disponible) {
    const precio = servicio.precio.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    seccionServicios.innerHTML += `<h3>${servicio.nombre}</h3><p>${precio}</p>`;
  }
});
