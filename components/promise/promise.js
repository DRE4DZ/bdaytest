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
