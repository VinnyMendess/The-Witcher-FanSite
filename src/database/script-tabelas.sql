CREATE DATABASE TheWitcher;
USE TheWitcher;


CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(45),
emailUsuario VARCHAR(45),
senhaUsuario VARCHAR(45)
);

SELECT * FROM usuario;

CREATE TABLE sobre(
idSobre INT PRIMARY KEY AUTO_INCREMENT,
porOndeConheceu VARCHAR(45),
personagemFavorito VARCHAR(45),
interessePrincipalSite VARCHAR(45),
fkUsuario INT,
CONSTRAINT fkUsuarioSobre
FOREIGN KEY (fkUsuario)
REFERENCES usuario (idUsuario)
);

CREATE TABLE Estatisticas (
idEstatistica INT PRIMARY KEY,
vitalidade INT,
pontos INT,
fkUsuario INT,
FOREIGN KEY (fkUsuario)
REFERENCES usuario (idUsuario)
);

INSERT INTO Estatisticas VALUES
(1, 2000, 10, 1),
(2, 2000, 10, 2),
(3, 2000, 10, 3);

UPDATE Estatisticas SET vitalidade = 10
WHERE idEstatistica = 1;
SELECT * FROM usuario;





