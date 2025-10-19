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
