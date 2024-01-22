// Quando o usuário rolar 20px a partir do topo da página, mostra o botão
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// Quando o usuário clica no botão, rola suavemente para o topo da página
function topFunction() {
    document.body.scrollTop = 0; // Para browsers da Safari
    document.documentElement.scrollTop = 0; // Para outros browsers
}