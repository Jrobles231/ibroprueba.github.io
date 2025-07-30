
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
        });

const cambioColor = document.getElementById("boton_wsp");

cambioColor.addEventListener("mouseover", function() {
    cambioColor.style.backgroundColor = "#62adeb";

});



window.addEventListener("scroll", function() {
    const nosotros = document.getElementById("nosotros_id");
    const posicion = nosotros.getBoundingClientRect();

    if (posicion.top < window.innerHeight - 100) {
        nosotros.classList.add("visible");
  } else {
        nosotros.classList.remove("visible");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const preguntas = document.querySelectorAll(".pregunta h4");

  preguntas.forEach(function (h4) {
    h4.addEventListener("click", function () {
      // Alternar clase "activo" solo en el h4 clickeado
      h4.classList.toggle("activo");
    });
  });
});

  const slides = document.querySelectorAll(".slide");
  let indice = 0;

  function mostrarSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.remove("activo");
      if (idx === i) {
        slide.classList.add("activo");
      }
    });
  }

  document.querySelector(".next").addEventListener("click", () => {
    indice = (indice + 1) % slides.length;
    mostrarSlide(indice);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    indice = (indice - 1 + slides.length) % slides.length;
    mostrarSlide(indice);
  });

  setInterval(() => {
    indice = (indice + 1) % slides.length;
    mostrarSlide(indice);
  }, 2000);