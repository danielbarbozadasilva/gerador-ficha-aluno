/* Puxa com a constante require (função do javascript, 
vou ao 'npm' buscar uma biblioteca) ('nome_da_biblioteca'); */



// GET /


// Query string

// GET /curriculo?teste1=fdsfdsfsfsdfdsfsd&teste2=ffsgghgfgfhgfhfgfhgfhf

// GET /curriculo/:id

// POST /curriculo





// cliente -> handler -> retorna o valor  


// cliente -> middleware -> handler -> retorna o valor  




/* request - req (pega os parametros que o 'front-end' está passando) 
res - resposta, a resposta pode ser 'sincrona' ou 'assincrona'
next - 
ROXO - MÉTODO -AZUL - FUNÇÃO
Nota: O middleware pode executar qualquer operação,
executar qualquer código, fazer alterações no objeto
de solicitação e resposta, e também pode encerrar o
ciclo de solicitação-resposta. Se não terminar o 
ciclo, ele deve chamar o next() para passar o 
controle para a próxima função de middleware (ou a
solicitação ficará pendurada).

// next() Chama o próximo middleware ou função de rotas
Funções de Middleware são funções que tem acesso ao objeto
de solicitação (req), o objeto de resposta (res), e a próxima
função de middleware no ciclo solicitação-resposta do aplicativo.
A próxima função middleware é comumente denotada por uma variável chamada next.

/* app.get('/', (req, res, next) => {
    console.log('Olá pessoal!');
    res.send({
        message: 'Olá mundo!'
    });
});

 (??????) precisamos colocar outro nome, e parametos diferentes
 app.get('/curriculo', (req, res, next) => {
    
     console.log('Olá pessoal!');
    
     res.send({
         message: 'Olá mundo!'
     });
    });
*/

/* Puxa com a constante require (função do javascript, 
vou ao 'npm' buscar uma biblioteca) ('nome_da_biblioteca'); */
/* path - módulo do node */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// crio uma constante e atribuo a função
const app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const curriculoController = require('./controllers/curriculo-controller');

/* tenho 'ejs' como view engine, ele vai no 'node_modules' pegar o 'ejs' */
app.set('view engine', 'ejs');
// Pega o __dirname(diretório atua) e junta com /public
// R: ~/Área de Trabalho/BOOTCAMP/PROJETOS/gerador-de-curriculo/public$ 
app.use(express.static(path.join(__dirname, '/public')));

const handlerRaiz = (req, res, next) => {
    //  res.send("<h1>TESTE HTML</h1>");
    res.render('index', {
        nome: "TESTE EJS"
    });
    // next(); // chama o próximo 'midleware'
}

app.get('/', handlerRaiz);

// chamo o 'midleware' que exportei no controller
app.get('/curriculo-form', curriculoController.CurriculoGet);
app.post('/curriculo-form', curriculoController.CurriculoPost);

/* Podemos http(80), https(443) posso colocar qualquer porta */
app.listen(3001, () => {
    console.log('O servidor está rodando');
});
