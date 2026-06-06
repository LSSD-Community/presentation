const cfxLink = "https://cfx.re/join/pmpddm";
const serverIsInMaintenance = true; // Change to true if the server is under maintenance
const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach(button => {
    if (serverIsInMaintenance) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Le serveur est actuellement en maintenance. Veuillez réessayer plus tard.');
        });
    }
    else {
        button.href = cfxLink;
    }
});
