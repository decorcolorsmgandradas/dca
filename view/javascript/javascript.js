const btn = document.getElementById('button');

document.getElementById('catalogForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_p58ash7';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });

document.getElementById('year').textContent = new Date().getFullYear();
function whats(prod) { const texto = encodeURIComponent(`Olá, gostaria de saber mais sobre ${prod}`); window.open(`https://wa.me/5535997313977?text=${texto}`, '_blank'); }

// Mobile sheet menu
const fab = document.getElementById('fab');
const sheet = document.getElementById('sheet');
const scrim = document.getElementById('scrim');
const openSheet = () => { sheet.style.display = 'block'; scrim.style.display = 'block'; };
const closeSheet = () => { sheet.style.display = 'none'; scrim.style.display = 'none'; };
fab.addEventListener('click', openSheet);
scrim.addEventListener('click', closeSheet);

// Catálogo PDF
const form = document.getElementById('catalogForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const tel = document.getElementById('fone').value.trim();
  if (!nome || !tel) { alert('Preencha Nome e Telefone para baixar.'); return; }
  const link = document.createElement('a');
  link.href = '/view/assets/pdf/Catalogo 2025 - Decor Colors Andradas.pdf';
  link.download = 'catalogo-decor-colors-andradas.pdf';
  document.body.appendChild(link); link.click(); link.remove();
  document.getElementById('formMsg').style.display = 'block';
});

//Pintores

function abrirModal() {
  document.getElementById("modalPintores").style.display = "flex";
}


function fecharModal() {
  document.getElementById("modalPintores").style.display = "none";
}

// carrosel
//////////////////////////////////////////////////////////////////////////////////////
const carousel = document.querySelector('.carousel');
const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);

const gap = 24;
let cardWidth = cards[0].offsetWidth + gap;
let index = 0;
let interval = 5000; // 5s parado
let speed = 600; // duração da animação

// CLONA PRIMEIRO E ÚLTIMO
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, cards[0]);

let allCards = document.querySelectorAll('.highlight-card');

// POSIÇÃO INICIAL (primeiro card real)
let position = -cardWidth;
track.style.transform = `translateX(${position}px)`;

function moveNext() {
  index++;
  position -= cardWidth;
  track.style.transition = `transform ${speed}ms ease`;
  track.style.transform = `translateX(${position}px)`;
}

track.addEventListener('transitionend', () => {
  const totalCards = allCards.length;

  // Se passou do último real → volta sem animação
  if (index >= totalCards - 2) {
    index = 0;
    position = -cardWidth;
    track.style.transition = 'none';
    track.style.transform = `translateX(${position}px)`;
  }

  // Se voltou antes do primeiro real
  if (index < 0) {
    index = totalCards - 3;
    position = -cardWidth * (index + 1);
    track.style.transition = 'none';
    track.style.transform = `translateX(${position}px)`;
  }
});

setInterval(moveNext, interval);

// Recalcula no resize
window.addEventListener('resize', () => {
  cardWidth = allCards[0].offsetWidth + gap;
  position = -cardWidth * (index + 1);
  track.style.transition = 'none';
  track.style.transform = `translateX(${position}px)`;
});
//////////////////////////////////////////////////////////////////////////////////////