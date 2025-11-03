-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

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
