// Dark mode
const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

// Verifica o tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    icon.className = savedTheme === "dark"
        ? "fa-solid fa-moon"
        : "fa-solid fa-sun";
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
}

// Alternando tema
toggle.addEventListener("click", () => {

    let theme = document.documentElement.getAttribute("data-theme");

    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        icon.className = "fa-solid fa-sun";
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        icon.className = "fa-solid fa-moon";
        localStorage.setItem("theme", "dark");
    }

});

// Atualiza o ano no footer automaticamente
const year = new Date().getFullYear();
document.querySelector('.footer-year').textContent = year;
