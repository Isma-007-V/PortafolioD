const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    
    btn.value = 'Sending...';
    
    const serviceID = 'default_service';
    const templateID = 'template_h1pnq5p';
    
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        
        Swal.fire({
          icon: 'success',
          title: 'Bien hecho!',
          html: '<p style="font-size: 18px; color: #ffffff;">Tu mensaje se envio correctamente!</p>',
          iconColor: '#B9FF3F',
          background: '#212121', // Fondo gris oscuro suave para la notificación
          color: '#E0E0E0',
          confirmButtonColor: '#B9FF3F',
          confirmButtonText: 'OK',
          buttonsStyling: true,
          backdrop: 'rgba(0, 0, 0, 0.8)',
          customClass: {
            popup: 'custom-popup-class',
            title: 'custom-title-class',
            htmlContainer: 'custom-html-container-class',
            icon: 'custom-icon-class',
            confirmButton: 'custom-confirm-button-class',
            popup: 'swal-custom-popup'
          }
        }).then((result) => {
            if (result.isConfirmed) {
              form.reset(); // Limpia todos los campos del formulario
            }
          });
      }, (err) => {
        btn.value = 'Send Email';
        Swal.fire({
          icon: 'error',
          title: 'Ay caramba...',
          text: 'Algo salió mal!',
          footer: JSON.stringify(err),
          iconColor: '#FF5252',
          background: '#212121',
          color: '#E0E0E0',
          confirmButtonColor: '#FF5252',
        });
      });
  });
  
//**************************************************************************** */
  // estructura para el modal 
// Obtener los modales
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");




// Obtener los botones que abren los modales
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");



// Obtener los elementos <span> que cierran los modales
var spans = document.getElementsByClassName("close");

// Función para abrir modal
function openModal(modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Función para cerrar modal
function closeModal(modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Cuando el usuario hace clic en el botón, abre el modal correspondiente
btn1.onclick = function(event) {
    event.preventDefault();
    openModal(modal1);
}

btn2.onclick = function(event) {
    event.preventDefault();
    openModal(modal2);
}
btn3.onclick = function(event){
  event.preventDefault();
  openModal(modal3)
}
btn4.onclick = function(event){
  event.preventDefault();
  openModal(modal4) 
}
btn5.onclick = function(event){
  event.preventDefault();
  openModal(modal5) 
}
btn6.onclick = function(event){
  event.preventDefault();
  openModal(modal6)
}
btn7.onclick = function(event){
  event.preventDefault();
  openModal(modal7)
}

// Cuando el usuario hace clic en <span> (x), cierra el modal correspondiente
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        closeModal(this.closest('.modal'));
    }
}

/** Cuando el usuario hace clic fuera del modal, lo cierra
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
}*/
//*************************************************************************** */
// modal para contenedor de todo el contenido de video
var modalV = document.getElementById("myModalv");

//id de modal 
var link = document.getElementById("myBtnv");

// id clase span 
var span = document.getElementsByClassName("closev")[0];

// abrir cuando se da click 
link.onclick = function(event) {
  modalV.style.display = "block";
  document.body.style.overflow = "hidden";
  
}

// cerrar cuando se da click en (x) modal
span.onclick = function() {
  modalV.style.display = "none";
  document.body.style.overflow = "auto";
}


//modal para video parte dos, reproduccion
// id de video
var video = document.getElementById("myVideo");

// BOTON REPRODUCIR
var btnV = document.getElementById("myBtnVid");

// DETENER/AVANZAR el video, se asigna un cambio en el texto
function myFunction() {
  if (video.paused) {
    video.play();
    btnV.innerHTML = "Pause";
  } else {
    video.pause();
    btnV.innerHTML = "Play";
  }
}