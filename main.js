const menu = document.querySelector(".mobile-menu")
const icon = document.querySelector(".mobile-menu-icon")

icon.addEventListener('click', e => {
    menu.classList.toggle("hidden");
})