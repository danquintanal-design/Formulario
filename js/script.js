const formulario = document.querySelector('form');
const mensaje = document.querySelector('#mensaje');
console.log(formulario, mensaje);

const listacorreoelectronico = ["duoc.cl", "gmail.com", "outlook.com"];

/**
 * @param {string} correo
 * @return {boolean}
 */
function validarCorreoElectronico(correo) {
    const correopartido = correo.split('@');
    console.log(correopartido);
  }

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
   console.log('Formulario valido y enviado');
   //debugger;
});