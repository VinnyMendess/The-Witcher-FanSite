var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nomeUsuario, emailUsuario FROM usuario WHERE emailUsuario = '${email}' AND senhaUsuario = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, fkClasse) {
    console.log("ACESSEI O USUARIO MODEL");
    console.log("Cadastrando usuário:", nome, email, senha);
    
    var instrucaoSql1 = `
        INSERT INTO usuario (nomeUsuario, emailUsuario, senhaUsuario) VALUES ('${nome}', '${email}', '${senha}');
    `;

    console.log("Executando a instrução SQL 1 (Usuário): \n" + instrucaoSql1);
    
    return database.executar(instrucaoSql1)
        .then(function(resultado) {
            // Ele pega o id da primeira instrução que foi criada e usa nesse novo insert
            var novoIdUsuario = resultado.insertId; 
            
            console.log("ID do Usuário recém-cadastrado (insertId):", novoIdUsuario);
        
            var vitalidadeInicial = 200;
            var pontosIniciais = 100;
            var instrucaoSql2 = `
                INSERT INTO Estatisticas (vitalidade, pontos, fkUsuario, fkClasse) 
                VALUES (${vitalidadeInicial}, ${pontosIniciais}, ${novoIdUsuario}, ${fkClasse});
            `;
            console.log("Executando a instrução SQL 2 (Estatísticas): \n" + instrucaoSql2);
            
            // Retorna a Promise da segunda execução. 
            // O controlador (controller) receberá o resultado desta segunda Promise.
            return database.executar(instrucaoSql2);
        })
        .catch(function(erro) {
            console.error("Houve um erro no cadastro do usuário ou das estatísticas: ", erro);
            // Lança o erro para que o Controller possa notificar o cliente
            throw erro; 
        });
}

module.exports = {
    autenticar,
    cadastrar
}