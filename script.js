let slideIndex = 0;
showSlides();

// Slideshow automático
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// Menu hambúrguer
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Troca de imagens desktop/mobile
function updateImages() {
  const isMobile = window.matchMedia("(max-width: 868px)").matches;
  document.querySelectorAll(".slide img").forEach(img => {
    img.src = isMobile ? img.dataset.mobile : img.dataset.desktop;
  });
}

// Executa na carga e no resize
updateImages();
window.addEventListener("resize", updateImages);