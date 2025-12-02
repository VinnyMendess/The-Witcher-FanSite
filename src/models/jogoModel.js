 var database = require("../database/config");

function cadastrarGwent(vencedor,vidasJogador, vidasAdversario, idUsuario){
    var instrucaoSql = `
        INSERT INTO Gwent (vencedor, vidasJogador, vidasAdversario, fkUsuario, dtPartida) VALUES
('${vencedor}', ${vidasJogador}, ${vidasAdversario}, ${idUsuario}, current_date);
    `;

    console.log("ACESSEI O CADASTRAR GWENT MODEL");
    console.log("cadastranh usuario:", vencedor, vidasJogador, vidasAdversario, idUsuario)
    return database.executar(instrucaoSql)
}


function buscarRankGeral(){
    var instrucaoSql = `
        SELECT
    vencedor,
    COUNT(*) AS Vitorias FROM Gwent
GROUP BY vencedor
ORDER BY Vitorias DESC;
    `
    console.log("ACESSEI O CADASTRAR RANK MODEL");
    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrarGwent,
    buscarRankGeral
}