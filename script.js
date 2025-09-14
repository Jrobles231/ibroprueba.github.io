










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
  }, 5500);










//este código permite hacer funcionar el formulario, donde con fetch se conecta y se comunica con azure logic apps para mandar un correo


document.getElementById("form-contact").addEventListener("submit", async function (e) {
  e.preventDefault();

  const status = document.getElementById("status-msg");
  status.textContent = "Enviando...";

  const data = {
    nombre: document.getElementById("nombre").value,
    telefono: document.getElementById("telefono").value,
    email: document.getElementById("email").value,
    empresa: document.getElementById("empresa").value,
    comentario: document.getElementById("comentario").value
  };

  try {
    const res = await fetch("https://prod-19.brazilsouth.logic.azure.com:443/workflows/037e8069ce9942d490b5a7749b0260a4/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=Wxv6jCMMzKbAd1h6pfJZirnBC-LgncSHk9Pd3Mt0Rw0", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      status.textContent = "✅ Enviado correctamente.";
      this.reset();
    } else {
      const error = await res.text();
      status.textContent = "❌ Error: " + error;
    }
  } catch (err) {
    status.textContent = "❌ Error de red: " + err.message;
  }
});