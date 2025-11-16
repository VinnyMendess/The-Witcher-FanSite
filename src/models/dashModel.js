var database = require("../database/config");

function kpiVitalidade(idUsuario) {
  var instrucao = `
        SELECT vitalidade FROM Estatisticas WHERE fkUsuario = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function kpiCombate(idUsuario) {
  var instrucao = `
        SELECT combateClasse
FROM Estatisticas 
JOIN classeQuiz ON idClasse = fkClasse
WHERE fkUsuario = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function kpiInfluencia(idUsuario) {
  var instrucao = `
        SELECT influenciaClasse
FROM Estatisticas 
JOIN classeQuiz ON idClasse = fkClasse
WHERE fkUsuario = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function kpiConhecimento(idUsuario) {
  var instrucao = `
        SELECT conhecimentoClasse
FROM Estatisticas 
JOIN classeQuiz ON idClasse = fkClasse
WHERE fkUsuario = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function kpiDiscricao(idUsuario) {
  var instrucao = `
        SELECT discricaoClasse
FROM Estatisticas 
JOIN classeQuiz ON idClasse = fkClasse
WHERE fkUsuario = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function imgClasseUsuario(idUsuario) {
  var instrucao = `
        SELECT urlClasse
FROM Estatisticas 
JOIN classeQuiz ON idClasse = fkClasse
WHERE fkUsuario = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function sobreClasse(idUsuario) {
  var instrucao = `
        SELECT descricaoClasse
FROM Estatisticas 
JOIN classeQuiz ON idClasse = fkClasse
WHERE fkUsuario = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  kpiVitalidade,
  kpiCombate,
  kpiInfluencia,
  kpiConhecimento,
  kpiDiscricao,
  imgClasseUsuario,
  sobreClasse
};
