const ejs = require('ejs');
const html_to_pdf = require('html-pdf-node');
const fs = require('fs');

/*----------------------------------MIDDLEWARES------------------------------------*/
const handlerGetFicha = (req, res, next) => {
    res.render('ficha-form-aluno', {
        nome: "TESTE EJS"
    });
}
const handlerPostFicha = (req, res, next) => {
    console.log(req.body);
    const body = req.body;

    /* cria view model para render curriculo */
    const viewModel = {
        menssagem: "TESTE POST FICHA",
        nome: req.body.nome,
        endereco: req.body.endereco,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        municipio: req.body.municipio,
        uf: req.body.uf,
        cep: req.body.cep,
        email: req.body.email,
        telefone: req.body.telefone,
        identidade: req.body.identidade,
        orgaoExpedicao: req.body.orgaoExpedicao,
        dataExpedicao: req.body.dataExpedicao,
        fax: req.body.fax,
        nomecontratante: req.body.nomecontratante,
        enderecoContratante: req.body.enderecoContratante,
        complementoContratante: req.body.complementoContratante,
        bairroContratante: req.body.bairroContratante,
        municipioContratante: req.body.municipioContratante,
        ufContratante: req.body.ufContratante,
        cepContratante: req.body.cepContratante,
        emailContratante: req.body.emailContratante,
        telefoneContratante: req.body.telefoneContratante,
        cnpjCpfContratante: req.body.cnpjCpfContratante,
        inscMunEstContratante: req.body.inscMunEstContratante,
        faxContratante: req.body.faxContratante,
        responsavelContratante: req.body.responsavelContratante
    };

    /* criar html - carregou o 'html' para a memória, 'filesystem' trabalha
    na raiz, utf8 (método fillesync para escrever em caractéres alfanuméricos) */
    var htmlText = fs.readFileSync('./views/ficha-pdf.ejs', 'utf8');
    var htmlPronto = ejs.render(htmlText, viewModel);

// TRANSFORMAR EM PDF

let file = { content: htmlPronto };
    let options = { format: 'A4' };
  
    html_to_pdf.generatePdf(file, options)
      .then(pdfBuffer => {
            res.contentType("application/pdf");
            res.send(pdfBuffer);
      });
  
}

// EXPORTO OS MIDDLEWARES
module.exports = {
    FichaGet: handlerGetFicha,
    FichaPost: handlerPostFicha
}