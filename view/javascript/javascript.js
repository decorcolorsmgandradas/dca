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