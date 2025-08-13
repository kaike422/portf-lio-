function abrirWhatsApp() {
  const numero = '5514998301718';
  const mensagem = 'Olá Kaike, vi seu portfólio e quero falar com você!';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

document.getElementById('btn-whatsapp').addEventListener('click', abrirWhatsApp);
document.getElementById('btn-whatsapp-hero').addEventListener('click', abrirWhatsApp);
