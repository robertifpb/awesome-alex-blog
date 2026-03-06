const schemeSelect = document.getElementById ("dark-mode-toggle");
const themeIcon = document.getElementById("theme-icon");

// Função para mudar esquema da cor Dark/Light
schemeSelect.addEventListener("change", function() {

    themeIcon.className = "fas";
    
    if (schemeSelect.value == "light") { 
        document.documentElement.setAttribute("light-dark-mode", "light"); //Claro
        themeIcon.classList.add("fa-sun");
    } else if (schemeSelect.value == "dark") {
        document.documentElement.setAttribute("light-dark-mode", "dark"); //Escuro
        themeIcon.classList.add("fa-moon");
    } else {
        document.documentElement.removeAttribute("light-dark-mode"); //Cor do sistema
        themeIcon.classList.add("fa-desktop");
    }
    //Depurando o modo no console
    console.log("Modoa alteredo para:" , schemeSelect.value);
});

// Atualiza o ano no footer automaticamente
const year = new Date().getFullYear();
document.querySelector('.footer-year').textContent = year;
