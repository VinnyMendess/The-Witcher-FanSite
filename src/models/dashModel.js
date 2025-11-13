

var database = require("../database/config");

function kpiVitalidade(idUsuario) {
    var instrucao = `
        SELECT vitalidade FROM Estatisticas WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao); 
}

module.exports = {
    kpiVitalidade 
};