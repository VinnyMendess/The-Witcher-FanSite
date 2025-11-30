 var database = require("../database/config");

function cadastrarGwent(vencedor,vidasJogador, vidasAdversario, idUsuario){
    var instrucaoSql = `
        INSERT INTO respostaQuiz (vencedor, vidasJogador, vidasAdversario) VALUES (${vencedor}, ${vidasJogador}, ${vidasAdversario}, ${idUsuario})
    `;

    console.log("ACESSEI O CADASTRAR QUIZ MODEL");
    console.log("cadastranh usuario:", vencedor, vidasJogador, vidasAdversario, idUsuario)
    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrarGwent
}