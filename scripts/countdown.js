function updateCountdownWithAnimation() {
    const openingDate = new Date('2026-07-06T00:00:00');
    const now = new Date();
    const diff = openingDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById('days-count').textContent = days;
    document.getElementById('hours-count').textContent = hours;
    document.getElementById('minutes-count').textContent = minutes;
    document.getElementById('seconds-count').textContent = seconds;
}
updateCountdownWithAnimation();
setInterval(updateCountdownWithAnimation, 1000);