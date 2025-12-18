const btn = document.getElementById('btnProjet');
const liste = document.getElementById('listeProjet');

btn.addEventListener('click', () => {
    liste.style.display = (liste.style.display === 'none' || liste.style.display === '')
        ? 'block'
        : 'none';
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".changementducssmn");
    const cssClair = document.getElementById("mc");
    const cssSombre = document.getElementById("mn");

    btn.addEventListener("click", () => {
        const sombreActif = !cssSombre.disabled;

        cssSombre.disabled = sombreActif;
        cssClair.disabled = !sombreActif;
    });
});