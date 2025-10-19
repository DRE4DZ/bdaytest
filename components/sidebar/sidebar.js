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
