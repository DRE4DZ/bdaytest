// Gallery Modal
const mediaItems = document.querySelectorAll('.media-item');
const imageModal = document.getElementById('image-modal');
const modalContent = document.getElementById('modal-image');
const closeButton = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

mediaItems.forEach(item => {
item.addEventListener('click', () => {
const imgSrc = item.querySelector('.blur-layer img').src;

// Simpan state sidebar sebelumnya
const isSidebarCollapsed = sidebar.classList.contains('collapsed');
sidebar.dataset.wasCollapsed = isSidebarCollapsed;

// Sembunyikan sidebar sepenuhnya saat modal terbuka
sidebar.style.display = 'none';
content.classList.add('preview-mode');

// Tampilkan modal
imageModal.classList.add('active');
modalContent.src = imgSrc;
});
});

// Fungsi untuk mengembalikan sidebar ke keadaan semula
function restoreSidebar() {
imageModal.classList.remove('active');
content.classList.remove('preview-mode');
sidebar.style.display = 'block';
}

// Tutup modal dengan tombol close
closeButton.addEventListener('click', restoreSidebar);

// Tutup modal saat klik luar gambar
imageModal.addEventListener('click', (event) => {
if (event.target === imageModal) {
restoreSidebar();
}
});

// Tutup modal dengan tombol ESC
document.addEventListener('keydown', function(e) {
if (e.key === 'Escape' && imageModal.classList.contains('active')) {
restoreSidebar();
}
});

// indo toggle functions
const infoToggle = document.getElementById('info-toggle');
const infoPopup = document.getElementById('info-popup');
const infoClose = document.getElementById('info-close');


// buka info grup
infoToggle.addEventListener('click', (e) => {
e.stopPropagation();
infoPopup.classList.add('active');
});

// klos info grup (tombol)
infoClose.addEventListener('click', () => {
infoPopup.classList.remove('active');
});

// klos info grup (klik di luar kotak)
infoPopup.addEventListener('cklick', (e) => {
if (e.target === infoPopup) {
infoPopup.classList.remove('active');
}
});

// Tutup info popup dengan tombol ESC
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && infoPopup.classList.contains('active')) {
infoPopup.classList.remove('active');
}
});
