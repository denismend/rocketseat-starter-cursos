# Rocketseat cursos (Starter)

## Javascript Starter
Para execução dos exemplos basta abrir os arquivos .html no navegador de preferência e clicar em F12 para acompanhar a aba 'Console'.


## Javascript ES6 Starter
No terminal, digite o seguinte comando: <br />
 - ``yarn dev``  

OBS: Necessário ter o `yarn` instalado.

<h5> Para modificar o arquivo .js que está em execução no bundle vá no arquivo package.json e na seguinte linha faça a alteração: </h5>
<p>
   "scripts": { <br/> 
       &ensp;  "dev": "babel ./desafio1.js -o bundle.js -w" <br/> 
   }
</p>
  
``No lugar de ./desafio1.js (troque para o arquivo .js da raiz do projeto que deseja executar)``

Para execução do webpack dev server, digite o seguinte comando: 
 - ``yarn devwp``  

O sistema irá executar no endereço <a href="http://localhost:8080">http://localhost:8080</a>
 
<h5> Para modificar o arquivo .js que está em execução, vá no arquivo webpack.config.js na raiz do projeto na linha 2 modifique o arquivo de entrada de dados:
 
 `` entry: ['@babel/polyfill', './src/mainwp.js'], `` 
