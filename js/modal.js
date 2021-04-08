//Modal Template
const modalHtml = `
<div class="modal">
    <div class="modal__contenido">
        <img
            class="modal__imagen"
            src="../images/modal-img.svg"
            alt="Imagen de mensaje enviado"
        />
        <p class="modal__descripcion">
            ¡Tu Información ha sido enviada correctamente!
        </p>
    </div>
    <a class="modal__boton" href="" id="closeModal" onclick="closeModal(event, this)"> ¡Ok! </a>
</div>
 `;

//Modal Container
const modalContainer = document.getElementById("modalContainer");

//Body Element
const body = document.querySelector("body");

//Close Modal
const closeModal = (event, element) => {
  event.preventDefault();

  modalContainer.innerHTML = "";
  modalContainer.classList.toggle("invisible");
  body.style.overflow = "auto";

  document.getElementById("botonResetear").click();
};

//Insert Modal
const insertModal = () => {
  modalContainer.insertAdjacentHTML("beforeend", modalHtml);

  body.style.overflow = "hidden";

  modalContainer.classList.toggle("invisible");
};
