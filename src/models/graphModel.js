var database = require("../database/config");


function buscarUltimasPorcentagem(idUsuarioLogado) {
    var instrucaoSql = `
        SELECT 
            r.acertos,
            q.perguntas,
            r.pontuacao 
        FROM RespostaQuiz AS r 
        JOIN Quiz AS q ON r.fkQuiz = q.idQuiz
        WHERE r.fkUsuario = ${idUsuarioLogado} 
        ORDER BY r.fkQuiz DESC;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasPorcentagem
}