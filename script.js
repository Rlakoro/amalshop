const responses = {
  "hi": "Halo juga! Ada yang bisa PetBot bantu hari ini?",
  "produk kucing": "Kami menyediakan makanan, vitamin, dan mainan khusus kucing 🐱.",
  "produk anjing": "Kami jual makanan, shampoo, dan kalung untuk anjing 🐶.",
  "jam buka": "Toko kami buka setiap hari pukul 08.00–21.00.",
  "alamat": "Kami berlokasi di Jl. PawPet No. 5, Jakarta.",
  "cara pesan": "Kamu bisa pesan langsung di website ini atau lewat WhatsApp kami 💬.",
  "terima kasih": "sama-sama kakak",
  "chat admin": "Kamu bisa langsung hubungi admin kami di WhatsApp: <a href='https://wa.me/6281234567890' target='_blank'>klik di sini</a> 📞"
};

// toggle open/close chat
function toggleChat() {
  const chatContainer = document.getElementById('chatContainer');
  chatContainer.style.display = (chatContainer.style.display === 'flex') ? 'none' : 'flex';
}

// kirim pesan
function sendMessage() {
  const input = document.getElementById('userInput');
  const messages = document.getElementById('chatMessages');
  const userText = input.value.trim();

  if (!userText) return;

  // tampilkan pesan user
  messages.innerHTML += `<div class="message user">${userText}</div>`;

  // cari jawaban
  const lowerText = userText.toLowerCase();
  const botReply = responses[lowerText] || "Maaf, saya belum paham pertanyaan itu 😅";

  // tampilkan jawaban bot (dengan jeda kecil biar terasa natural)
  setTimeout(() => {
    messages.innerHTML += `<div class="message bot">${botReply}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }, 400);

  input.value = '';
  messages.scrollTop = messages.scrollHeight;
}
