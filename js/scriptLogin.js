const formLogin = document.querySelector("form");

formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const emailDigitado = document.getElementById("e-mail").value;
    const senhaDigitada = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const usuarioEncontrado = users.find(user => user.email === emailDigitado && user.senha === senhaDigitada);

    if (usuarioEncontrado) {
        sessionStorage.setItem("usuarioLogado", usuarioEncontrado.usuario);
        sessionStorage.setItem("emailLogado", usuarioEncontrado.email);

        alert(`Bem-vindo de volta, ${usuarioEncontrado.usuario}!`);
        
        window.location.href = "./account.html";
    } else {
        alert("E-mail ou senha incorretos. Verifique seus dados ou crie uma conta.");
    }
});