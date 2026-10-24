if (!sessionStorage.getItem("emailLogado")) {
    // Se não existir, redireciona para a página de login
    window.location.href = "./login.html";
}