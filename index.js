/* Puxa com a constante require (função do javascript, 
vou ao 'npm' buscar uma biblioteca) ('nome_da_biblioteca'); 
 GET /
 Query string
 GET /curriculo?teste1=fdsfdsfsfsdfdsfsd&teste2=ffsgghgfgfhgfhfgfhgfhf
 GET /curriculo/:id
 POST /curriculo

cliente -> handler -> retorna o valor  
cliente -> middleware -> handler -> retorna o valor  
request - req (pega os parametros que o 'front-end' está passando) 
res - resposta, a resposta pode ser 'sincrona' ou 'assincrona'

ROXO - MÉTODO -AZUL - FUNÇÃO

Nota: O middleware pode executar qualquer operação,
executar qualquer código, fazer alterações no objeto
de solicitação e resposta, e também pode encerrar o
ciclo de solicitação-resposta. Se não terminar o 
ciclo, ele deve chamar o next() para passar o 
controle para a próxima função de middleware (ou a
solicitação ficará pendurada).

next() Chama o próximo middleware ou função de rotas
Funções de Middleware são funções que tem acesso ao objeto
de solicitação (req), o objeto de resposta (res), e a próxima
função de middleware no ciclo solicitação-resposta do aplicativo.

A próxima função middleware é comumente denotada por uma variável chamada next.

 app.get('/', (req, res, next) => {
    console.log('Olá pessoal!');
    res.send({
        message: 'Olá mundo!'
    });
});

 precisamos colocar outro nome, e parametos diferentes
 app.get('/curriculo', (req, res, next) => {
    
     console.log(req.body);
    
     res.send({
         message: 'Olá mundo!'
     });
    });


BODY-PARSER - serve para trabalhar com os dados vindo do seu cliente.
Quando o cliente manda dados via form payload, esse pacote ele formata
e transforma os dados para o formato de objeto javascript e joga tudo
isso em um objeto dentro do objeto de requisição (req): req. body. 
----------------------------------------------------------------------------------

Puxa com a constante require (função do javascript, 
vou ao 'npm' buscar uma biblioteca) ('nome_da_biblioteca'); */
const express = require('express');

/* path - módulo do node */
const path = require('path');
const bodyParser = require('body-parser');

// crio uma constante e atribuo a função
const app = express();

// prepara a rota para tratar 'json'
app.use(bodyParser.json());

// prepara a rota para tratar 'urlencoded'
app.use(bodyParser.urlencoded({ extended: true }));

// chama o controller
const fichaController = require('./controllers/ficha-controller');

/* tenho 'ejs' como view engine, ele vai no 'node_modules' pegar o 'ejs' */
app.set('view engine', 'ejs');

/* Deixa 'VISIVEL' o conteúdo da pasta 'PUBLIC'
Pega o '__dirname' (diretório atua) e junta com '/public'
~/Área de Trabalho/BOOTCAMP/PROJETOS/gerador-de-curriculo/public$ */
app.use(express.static(path.join(__dirname, '/public')));
const handlerRaiz = (req, res, next) => {
    res.render('index', {
        nome: "TESTE EJS"
    });
}
app.use(express.static(path.join(__dirname, '/views')));
const handlerIndex = (req, res, next) => {
    res.render('index', {

    });
}

app.use(express.static(path.join(__dirname, '/views')));
const handlerSobre = (req, res, next) => {
    res.render('sobre', {

    });
}
app.use(express.static(path.join(__dirname, '/views')));
const handlerFichaAluno = (req, res, next) => {
    res.render('ficha-form-aluno', {

    });
}
app.use(express.static(path.join(__dirname, '/views')));
const handlerFichaContratante = (req, res, next) => {
    res.render('ficha-form-contratante', {

    });
}
app.use(express.static(path.join(__dirname, '/views')));
const hendlerFichaPagamento = (req, res, next) => {
    res.render('ficha-form-pagamento', {

    });
}



app.get('/', handlerRaiz);
app.get('/index', handlerIndex);
app.get('/sobre', handlerSobre);
app.get('/ficha-form-aluno', handlerFichaAluno);
app.get('/ficha-form-contratante', handlerFichaContratante);
app.get('/ficha-form-pagamento', hendlerFichaPagamento);


/*-------------------------------------------------------
app.get('/curriculo-form', (req, res, next) => {
console.log('olá mundo!!');
    req.body = {
        teste: "testestestse"
    };

    var flag = false;

    if (flag)
        next() // chama o próximo 'midleware'
    else
        res.send('usuario invalido')

} 
},curriculoController.CurriculoGet);
-------------------------------------------------------*/

/*  chamo o 'midleware' que exportei no controller */
app.get('/ficha-form-aluno', fichaController.FichaGet);
app.post('/ficha-form-aluno', fichaController.FichaPost);

/* Podemos http(80), https(443) posso colocar qualquer porta */
app.listen(3001, () => {
    console.log('O servidor está rodando');
});
