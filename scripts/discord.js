const discordLink = "https://discord.gg/pVteQaaZCV";
const discordButtons = document.querySelectorAll('.discord-button');
discordButtons.forEach(button => {
    button.href = discordLink;
});
