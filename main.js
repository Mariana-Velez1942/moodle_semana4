const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const datosGuardados = document.getElementById("datosGuardados");
const contadorSpan = document.getElementById("contador");
const btnLimpiar = document.getElementById("limpiar");

window.addEventListener("load", () => {
  mostrarDatos();
  actualizarContador();
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = nombreInput.value.trim();
  const edad = edadInput.value.trim();

  if (nombre === "" || edad === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("edad", edad);

  let interacciones = sessionStorage.getItem("contador");
  interacciones = interacciones ? Number(interacciones) + 1 : 1;
  sessionStorage.setItem("contador", interacciones);

  mostrarDatos();
  actualizarContador();
  formulario.reset();
});

function mostrarDatos() {
  const nombre = localStorage.getItem("nombre");
  const edad = localStorage.getItem("edad");

  if (nombre && edad) {
    datosGuardados.textContent = `Nombre: ${nombre}, Edad: ${edad}`;
  } else {
    datosGuardados.textContent = "No hay datos guardados.";
  }
}

function actualizarContador() {
  const contador = sessionStorage.getItem("contador") || 0;
  contadorSpan.textContent = contador;
}

btnLimpiar.addEventListener("click", () => {
  localStorage.clear();
  datosGuardados.textContent = "Datos eliminados.";
});
