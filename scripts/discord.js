const discordLink = "https://discord.gg/r8mg9KCmde";
const discordButtons = document.querySelectorAll('.discord-button');
discordButtons.forEach(button => {
    button.href = discordLink;
});
