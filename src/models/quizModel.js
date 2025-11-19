var database = require("../database/config");

function cadastrarQuest(fkQuiz,idUsuario, pontuacao, acertos){
    var instrucaoSql = `
        INSERT INTO respostaQuiz (fkQuiz, fkUsuario, acertos, pontuacao) VALUES ('${fkQuiz}', '${fkUsuario}', '${acertos}', '${pontuacao}')
    `;

    console.log("ACESSEI O CADASTRAR QUIZ MODEL");
    console.log("cadastranh usuario:", fkQuiz, idUsuario, acertos, pontuacao)
    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrarQuest
}