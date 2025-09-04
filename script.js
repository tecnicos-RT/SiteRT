let slideIndex = 0;
let slideInterval;

// Popup de contatos
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const contactPopup = document.getElementById("contactPopup");
const topicPopup = document.getElementById("topicPopup");
const closeTopicPopup = document.getElementById("closeTopicPopup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const topicDescriptions = {
  "Soluções Corporativas": "Oferecemos infraestrutura completa de TI para empresas, com redes, servidores e suporte dedicado.",
  "Setups Gamers": "Montamos PCs gamers de alta performance, com as melhores peças e personalização completa.",
  "Montagem & Manutenção": "Serviços de upgrade, manutenção preventiva e corretiva em computadores e notebooks.",
  "Certificado Digital": "Emissão e renovação de certificados digitais para empresas e pessoas físicas.",
  "Manutenção de impressoras": "Conserto e manutenção de impressoras laser, jato de tinta e multifuncionais.",
  "Câmeras de Segurança": "Instalação e configuração de sistemas de monitoramento com câmeras de segurança."
};

openPopup.addEventListener("click", () => {
  contactPopup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  contactPopup.style.display = "none";
});
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
  document.getElementById("Slideshow").style.display = "block";
  showSlides();
  slideInterval = setInterval(showSlides, 3000); // troca a cada 3s
}

// Detecta quando o vídeo acaba
const introVideo = document.getElementById("introVideo");
introVideo.addEventListener("ended", () => {
  introVideo.parentElement.style.display = "none"; // esconde vídeo
  startSlideshow(); // inicia slides
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});
document.querySelectorAll(".topic").forEach(topic => {
  topic.addEventListener("click", () => {
    const img = topic.querySelector("img");
    const title = topic.innerText.trim();

    popupImage.src = img.src;
    popupTitle.textContent = title;
    popupDescription.textContent = topicDescriptions[title] || "Descrição em breve...";

    topicPopup.style.display = "flex";
  });
});
// Fechar popup
closeTopicPopup.addEventListener("click", () => {
  topicPopup.style.display = "none";
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
window.addEventListener("resize", updateImages, "click", (e) => {
  if (e.target === contactPopup) {
    contactPopup.style.display = "none";
  }
});
window.addEventListener("click", (e) => {
  if (e.target === topicPopup) {
    topicPopup.style.display = "none";
  }
});