// sessão
function validarSessao() {
    // Agora valida pelo ID que você está usando
    var idUsuario = sessionStorage.ID_USUARIO;
    
    // Você precisa de b_usuario no dash.html, senão dará erro
    // var b_usuario = document.getElementById("b_usuario");

    if (idUsuario != null) {
        // Se houver um elemento com id 'b_usuario' na dash, descomente:
        // b_usuario.innerHTML = sessionStorage.NOME_USUARIO; 
    } else {
        window.location = "../login.html"; 
    }
}

function limparSessao() {
    // sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

