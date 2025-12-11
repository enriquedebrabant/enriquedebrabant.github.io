// Sélection des éléments
const toggleButton = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".contenu");

// Fonction pour ouvrir/fermer la sidebar
function toggleSidebar() {
    sidebar.classList.toggle("active");
    toggleButton.classList.toggle("open");
}

// Clic sur le bouton
toggleButton.addEventListener("click", toggleSidebar);

// Clic sur le contenu principal ferme la sidebar si elle est ouverte
mainContent.addEventListener("click", () => {
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        toggleButton.classList.remove("open");
    }
});

// Optionnel : fermer la sidebar si on redimensionne l'écran >768px
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove("active");
        toggleButton.classList.remove("open");
    }
});
