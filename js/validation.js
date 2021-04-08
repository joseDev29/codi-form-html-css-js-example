let formError = false;

//Insert Error
const insertError = (id, message, position) => {
  formError = true;
  const element = document.getElementById(id);

  element.insertAdjacentHTML(
    `${position || "afterend"}`,
    `
      <p class="formulario__error">${message}</p>
    `
  );
};

//Reset Errors
const resetErrors = () => {
  formError = false;
  const errors = [...document.getElementsByClassName("formulario__error")];

  errors.map((error) => error.remove());
};

//Validate Field
const validateField = (element, errorId, errorMessage, errorPosition, type) => {
  if (type === "text" || type === "radio" || type === "select" || !type) {
    const elementValue = element.value.trim();
    if (!elementValue || !elementValue.length)
      insertError(errorId, errorMessage, errorPosition);
    return;
  }

  if (type === "checkbox") {
    const elementValue = element.checked;
    if (!elementValue) insertError(errorId, errorMessage, errorPosition);
    return;
  }
};

//Submit Handler
const submitHandler = (e) => {
  e.preventDefault();

  resetErrors();

  const name = e.target.nombre;
  validateField(name, "nombre", "Nombre es requerido");

  const lastname = e.target.apellido;
  validateField(lastname, "apellido", "Apellido es requerido");

  const email = e.target.email;
  validateField(email, "email", "Email es requerido");

  const phone = e.target.telefono;
  validateField(phone, "telefono", "Telefono es requerido");

  const country = e.target.pais;
  validateField(country, "pais", "Seleccione un pais");
  if (country.value.trim() === "Pais")
    insertError("pais", "Seleccione un pais");

  const city = e.target.ciudad;
  validateField(city, "ciudad", "Seleccione una Ciudad", null, "");
  if (city.value.trim() === "Ciudad")
    insertError("ciudad", "Seleccione una Ciudad");

  const project = e.target.proyecto;
  validateField(
    project,
    "proyecto",
    "Seleccione un tipo de poryecto",
    "beforeend"
  );

  const contract = e.target.contrato;
  validateField(
    contract,
    "contrato",
    "Seleccione un tipo de contrato",
    "beforeend"
  );

  const terminos = e.target.terminos;
  validateField(
    terminos,
    "checkboxTerminos",
    "Debe aceptar los terminos y condiciones",
    null,
    "checkbox"
  );

  if (!formError) {
    insertModal();
    return;
  }
};

//Form Element
const form = document.getElementById("formulario");

//Form Submit Listenner
form.addEventListener("submit", submitHandler);
