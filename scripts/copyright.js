/**
 * Manage the copyright information for the presentation.
 */

const copyrightElement = document.getElementById('copyright');
if (copyrightElement) {
    const oldYear = "2025";
    const currentYear = new Date().getFullYear();
    copyrightElement.innerHTML = `
        © ${oldYear} - ${currentYear} LSSD Community. Tous droits réservés.
    `;
}