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
