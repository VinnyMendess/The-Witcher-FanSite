CREATE DATABASE TheWitcher;
USE TheWitcher;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(45),
    emailUsuario VARCHAR(45),
    senhaUsuario VARCHAR(45)
);

CREATE TABLE sobre (
    idSobre INT PRIMARY KEY AUTO_INCREMENT,
    porOndeConheceu VARCHAR(45),
    personagemFavorito VARCHAR(45),
    interessePrincipalSite VARCHAR(45),
    fkUsuario INT,
    CONSTRAINT fkUsuarioSobre
        FOREIGN KEY (fkUsuario)
        REFERENCES usuario (idUsuario)
);

CREATE TABLE classeQuiz (
    idClasse INT PRIMARY KEY AUTO_INCREMENT,
    nomeClasse VARCHAR(45),
    descricaoClasse VARCHAR(300),
    urlClasse VARCHAR(50),
    combateClasse INT,
    influenciaClasse INT,
    conhecimentoClasse INT,
    discricaoClasse INT
);

CREATE TABLE Estatisticas (
    idEstatistica INT PRIMARY KEY AUTO_INCREMENT,
    vitalidade INT,
    pontos INT,
    fkUsuario INT,
    fkClasse INT,
    Acertos INT, -- Coluna 'Acertos' adicionada diretamente
    CONSTRAINT fkUsuarioEstatistcas
        FOREIGN KEY (fkUsuario)
        REFERENCES usuario (idUsuario),
    CONSTRAINT fkClasseEstatisticas
        FOREIGN KEY (fkClasse)
        REFERENCES classeQuiz (idClasse)
);


CREATE TABLE Quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    perguntas INT
);
-- ADICINADO COLUNA PERGUNTAS
SELECT * FROM Quiz;


CREATE TABLE respostaQuiz (
    fkQuiz INT,
    fkUsuario INT,
    acertos INT,
    pontuacao DECIMAL(2,2), -- Coluna 'pontuacao' definida como DECIMAL(2,2) diretamente
    CONSTRAINT pkQuiz
        PRIMARY KEY (fkQuiz, fkUsuario)
);
ALTER TABLE respostaQuiz MODIFY COLUMN pontuacao DECIMAL(3,2);

INSERT INTO classeQuiz 
(nomeClasse, descricaoClasse, urlClasse, combateClasse, influenciaClasse, conhecimentoClasse, discricaoClasse) 
VALUES
-- 1. BRUXO --
('Bruxo', 'Mutante caçador de monstros. Treinado em esgrima, alquimia e sinais. Focado em sobrevivência e combate contra feras.', 
'../assets/imgs/bruxo.png', 9, 3, 7, 8),

-- 2. BARDO --
('Bardo', 'Artista viajante e mestre da persuasão. É o rosto do grupo, usado para negociar, buscar informações e entreter multidões.', 
'../assets/imgs/bardo.png', 4, 10, 5, 6),

-- 3. FEITICEIRA --
('Feiticeira', 'Conjuradora poderosa, focada em magia caótica e arcana. Geralmente envolvida em política e conspirações de poder.', 
'', 3, 8, 10, 5),

-- 4. NOBRE --
('Nobre', 'Nascido na corte, focado em liderança, estratégia militar e etiqueta. Tem vasto acesso a recursos e conexões sociais.', 
'../assets/imgs/nobre.png', 6, 9, 7, 5), 

-- 5. CRIMINOSO--
('Criminoso', 'Especialista em furtividade, arrombamento, emboscadas e detecção de armadilhas. Sobrevivente das ruas e mestre da paranoia.', 
'../assets/imgs/criminoso.png', 7, 4, 4, 10);



UPDATE Estatisticas SET vitalidade = 10
WHERE idEstatistica = 1;

UPDATE Estatisticas SET fkClasse = (
    SELECT idClasse FROM classeQuiz WHERE nomeClasse = 'Bardo'
) WHERE fkUsuario = 1;

    SELECT * FROM usuario;
    SELECT vitalidade FROM Estatisticas WHERE fkUsuario = 1;
    SELECT * FROM Estatisticas;
    SELECT * FROM ClasseQuiz;

    SELECT *
    FROM Estatisticas 
    JOIN classeQuiz ON idClasse = fkClasse
    WHERE fkUsuario = 1;

    SELECT influenciaClasse
    FROM Estatisticas 
    JOIN classeQuiz ON idClasse = fkClasse
    WHERE fkUsuario = 1;



    SELECT * FROM RespostaQuiz;
    SELECT * FROM Usuario;

    SELECT r.pontuacao, q.perguntas 
    FROM RespostaQuiz AS r 
    JOIN Quiz AS q ON q.idQuiz = r.fkQuiz
    WHERE r.fkUsuario = 1;

    SELECT r.pontuacao, r.acertos, r.fkQuiz 
    FROM RespostaQuiz r
    WHERE r.fkUsuario = 1;

    SELECT * FROM Quiz;

    DESC Quiz;