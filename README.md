### O que é Gulp?

É uma ferramenta de automação de tarefas em JavaScript. Tarefas como **minificar**, **otimizar** e **compilar** arquivos, tão repetitivas e necessárias ao desenvolvimento, podem ser automatizadas com o **Gulp**.

Começo Rápido 

- 1 - Instalar NodeJs
- 2 - Instalar Gulp Cli globalmente
- 3 - Criando o arquivo package.json no diretório do seu projeto
- 4 - Instalar o Gulp no diretório
- 5 - Instalar plugins do Gulp
- 6 - Criando o arquivo **gulpfile.js** e configurando as tarefas.

### 1 - Instalar NodeJs

Acesse [https://nodejs.org/en/](https://nodejs.org/en/) e procure a melhor forma de instalar o Node para você.

Ao instalar o NodeJs, o gerenciador de pacotes **NPM** vem junto. Para checar a versão do Node e do NPM, abra o git bash e digite:

```bash
node --version
```

```bash
npm --version
```

*Se estiver tudo correto, esse comando mostrará a versão do Node e do npm instalado.*

### 2 - Instalar Gulp CLI globalmente

Abra o git bash e digite o comando abaixo:

```bash
npm install -g gulp-cli
```

### 3 - Criando o arquivo package.json no diretório do seu projeto

```bash
npm init
```

*Isso dará ao seu projeto um nome, versão, descrição, etc. É bastante direto, mas simplesmente pressione enter se você não tiver certeza ou não quiser preencher algo.*

### 4 - Instalar o Gulp no diretório

```bash
npm install --save-dev gulp
```

*( **--save-dev**: tem objetivo de adicionar o **gulp** como uma dependência de desenvolvimento (dev dependency) Todas as dependências do projeto estão no arquivo **package.json** )*

### 4.1 - Verifique se esta tudo funcionado corretamente, para isso:

```bash
gulp --version
```

Deve aparecer as versões do Gulp CLI e do Gulp instalado localmente. Ex:

```bash
CLI version 2.0.1
Local version 4.0.0
```

### 5 - Instalando os Plugins do Gulp

Instalaremos os plugins como Dependência de Desenvolvimento **—save-dev**

```bash
npm install --save-dev gulp-sass gulp-concat gulp-uglifycss
```

Se você verificar o seu **package.json**, você notará que uma nova seção foi adicionada.

```json
"devDependencies": {
    "gulp": "^4.0.2",
    "gulp-concat": "^2.6.1",
    "gulp-sass": "^4.1.0",
    "gulp-uglifycss": "^1.1.0"
 }
```

### 6 - Criando o arquivo **gulpfile.js** e configurando as tarefas.

Dentro da pasta do projeto crie um arquivo de configuração chamado **gulpfile.js** Neste arquivos iremos definir variáveis para cada plugin e configurar a tarefa.

```jsx
const gulp = require('gulp')
const { watch } = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function compilaSass(){
    return gulp.src('src/scss/**/*.scss')//filtrando os arquivos que vamos precisar
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "ugliComments": true }))//pega todo o codigo para ser minificado
        .pipe(concat('styles.min.css'))//pega todos os arquivos que ja foram compilados e concatena e gera um arquivo no final
        .pipe(gulp.dest('src/css'))//esse pipe vamos dizer qual destino iremos querer que o codigo fique
}

exports.default = function(){
    watch('src/scss/**/*.scss', compilaSass)
}
```

Agora basta abrir o **gitbash** e digitar o comando: **gulp** 

Pronto agora toda modificação feita em algum arquivo do Sass o gulp vai ficar assistindo e vai converter para CSS.