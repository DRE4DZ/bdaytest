document.addEventListener('DOMContentLoaded', function() {
const loaderWrapper = document.getElementById('loaderWrapper');
const mainContent = document.getElementById('mainContent');

// Function to hide the loader after a delay
const hideLoader = () => {
loaderWrapper.classList.add('fade-out');
loaderWrapper.addEventListener('animationend', function() {
loaderWrapper.style.display = 'none';
mainContent.classList.remove('hidden');
mainContent.style.opacity = 1;
});
};
setTimeout(hideLoader, 1000);

// Sidebar Toggle
document.getElementById('toggleBtn').addEventListener('click', function () {
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
sidebar.classList.toggle('collapsed');
if (sidebar.classList.contains('collapsed')) {
content.style.marginLeft = '80px'
} else {
content.style.marginLeft = '250px';
}
});

// Menu Navigation
document.querySelectorAll('.menu-item').forEach(item => {
item.addEventListener('click', function () {
document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
document.querySelectorAll('.content-section').forEach(s => {
s.classList.remove('active');
s.style.opacity = 0;
});
this.classList.add('active');
const sectionId = this.dataset.section;
const target = document.getElementById(sectionId);
target.classList.add('active');
target.animate([{opacity: 0}, {opacity: 1}], {duration: 400, fill: 'forwards'});
});
});

// Fireworks on double-click cake
let clicks = 0;
document.querySelector('.cake-icon').addEventListener('click', ()=>{
clicks++;
if (clicks === 2){
fireworks();
clicks = 0;
}
});

function fireworks(){
for (let i = 0; i < 30; i++){
const heart = document.createElement('span');
heart.innerHTML = '💙';
heart.style.position = 'fixed';
heart.style.left = Math.random()*100+'vw';
heart.style.top = '100vh';
heart.style.fontSize = (Math.random()*20+15)+'px';
heart.style.pointerEvents = 'none';
heart.style.zIndex = '9999';
document.body.appendChild(heart);
heart.animate([
{transform: 'translateY(0) scale(1)', opacity: 1},
{transform: `translateY(-${Math.random()*300+200}px) scale(0)`, opacity: 0}
], {duration: 3000, easing: 'ease-out'}).onfinish = ()=>heart.remove();
}
}





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


//promisee
//promise box? letter idk



// Countdown
function updateCountdown() {
const targetDate = new Date("2035-01-01T00:00:00");
const now = new Date();
const difference = targetDate - now;
if (difference <= 0) {
document.getElementById("countdown").innerHTML = "💍 The Promise Day Has Arrived.";
return;
}
const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 365.25);
const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((difference / (1000 * 60)) % 60);
const seconds = Math.floor((difference / 1000) % 60);
document.getElementById("countdown").innerHTML = `
${years}y ${days}d ${hours}h ${minutes}m ${seconds}s left
`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

//letter surat akh

}); // dom iki cikwkwkwkwkwk