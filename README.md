Gulp - Utilizando gulp para sass

Construindo um projeto em gulp

## Passo 1

Para instalar o gulp: globalmente

npm install gulp-cli --global

--

## Passo 2

Crie a pasta do projeto e rode o comando: npm init

--

## Passo 3

Agora vamos criar 2 diretorios: 

**dist**: arquivos de destino

**src**: arquivos de origem

--

## Passo 4 

Intalar o gulp no projeto

npm install gulp --save-dev

(--save-dev: tem objetivo de adicionar o gulp como uma dependência de desenvolvimento (dev dependency) Todas as dependencias do projeto estao no arquivo package.json)

--

## Passo 5 

Verifique se esta tudo funcionado corretamente, para isso: gulp --version

deve aparecer as versoes da CLI e Local

Ex:

CLI version 2.0.1
Local version 4.0.0

--

## Passo 6 

Criando o arquivo de configuracao do Gulp

dentro da pasta do projeto crie um arquivo chamado: **gulpfile.js**
--

## Observacao

O gulp eh divido por tarefas, ex: 

- tarefa responsavel pelo css
- tarefa responsavel pelo javascript
- tarefa responsavel pela otmizacao das imagens
--





https://medium.com/jaguaribetech/tutorial-usando-gulp-e-sass-daa3ec068846
https://medium.com/gummaoficial/compilando-sass-com-gulp-ed1e5f9ed417