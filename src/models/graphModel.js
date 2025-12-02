var database = require("../database/config");

function buscarUltimasPorcentagem(idUsuarioLogado) {
  var instrucaoSql = `
        SELECT 
            r.acertos,
            q.perguntas,
            r.pontuacao 
        FROM respostaQuiz AS r 
        JOIN Quiz AS q ON r.fkQuiz = q.idQuiz
        WHERE r.fkUsuario = ${idUsuarioLogado} 
        ORDER BY r.fkQuiz ASC;`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarGraficoSinal() {
  var instrucaoSql = `
    SELECT sinal as nomeSinal, COUNT(*) as quantidade
FROM sobre
GROUP BY sinal;`;

console.log("Executando a instrução SQL:  \n"+ instrucaoSql);
return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimasPorcentagem,
  buscarGraficoSinal
};
