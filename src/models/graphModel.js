var database = require("../database/config");


function buscarUltimasPorcentagem(idUsuarioLogado, limite_linhas) {
    var instrucaoSql = `
        SELECT 
            r.acertos,
            q.perguntas,
            r.pontuacao 
        FROM RespostaQuiz AS r 
        JOIN Quiz AS q ON r.fkQuiz = q.idQuiz
        WHERE r.fkUsuario = ${idUsuarioLogado} 
        ORDER BY r.fkQuiz DESC 
        LIMIT ${limite_linhas};`; // Mantenha o limite se for pegar apenas o último quiz

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasPorcentagem
}