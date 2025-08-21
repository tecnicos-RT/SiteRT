let slideIndex = 0;
let slideInterval;

// Função do slideshow
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
}

// Função que inicia o loop do slideshow
function startSlideshow() {
  document.getElementById("slideshow").style.display = "block";
  showSlides();
  slideInterval = setInterval(showSlides, 3000); // troca a cada 3s
}

// Detecta quando o vídeo acaba
const introVideo = document.getElementById("introVideo");
introVideo.addEventListener("ended", () => {
  introVideo.parentElement.style.display = "none"; // esconde vídeo
  startSlideshow(); // inicia slides
});


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