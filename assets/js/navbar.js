// Detecta o caminho correto da navbar
const path = window.location.pathname.includes("/pages/") ? "../assets/html/navbar.html" : "assets/html/navbar.html";

// Carrega o conteúdo da navbar e insere no local apropriado
fetch(path)
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar a navbar:", error));