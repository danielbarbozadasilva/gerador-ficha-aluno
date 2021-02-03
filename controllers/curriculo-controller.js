// 'middleware' dentro do controllers !!!
const handlerGetCurriculo = (req, res, next) => {
    res.render('curriculo-form', {
        nome: "TESTE EJS"
    });
}
const handlerPostCurriculo = (req, res, next) => {
    res.send({
        menssagem: "TESTE POST CURRICULO",
        nome: req.body.nome,
        endereco: req.body.endereco,
        complemento: req.body.complemento,
        // bairro: req.body.bairro,
        // municipio: req.body.municipio,
        // uf: req.body.uf,
        // cep: req.body.cep,
        // email: req.body.email,
        // telefone: req.body.telefone,
        // identidade: req.body.identidade,
        // orgaoExpedicao: req.body.orgaoExpedicao,
        // dataExpedicao: req.body.dataExpedicao,
        // fax: req.body.fax,
        // nomecontratante: req.body.nomecontratante,
        // enderecoContratante: req.body.enderecoContratante,
        // complementoContratante: req.body.complementoContratante,
        // bairroContratante: req.body.bairroContratante,
        // municipioContratante: req.body.municipioContratante,
        // ufContratante: req.body.ufContratante,
        // cepContratante: req.body.cepContratante,
        // emailContratante: req.body.emailContratante,
        // telefoneContratante: req.body.telefoneContratante,
        // cnpjCpfContratante: req.body.cnpjCpfContratante,
        // inscMunEstContratante: req.body.inscMunEstContratante,
        // faxContratante: req.body.faxContratante,
        // responsavelContratante: req.body.responsavelContratante
    });
}

// Exporto o 'middleware'
module.exports = {
    CurriculoGet: handlerGetCurriculo,
    CurriculoPost: handlerPostCurriculo
}