// Shared enhancement hook for pages that load the external script.
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const header = document.querySelector(".site-header");

    if (!menuToggle || !header) return;

    menuToggle.addEventListener("click", () => {
        const isOpen = header.classList.toggle("menu-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
});
