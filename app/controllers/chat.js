const { emit } = require("../../config/server");

module.exports.iniciaChat = function(application, req, res){
    var dadosForm = req.body;
    
    req.assert('apelido', 'Nome ou Apelido é obrigatorio').notEmpty();
    req.assert('apelido', 'Nome ou Apelido dev ter entre 3 e 17 caracteres').len(3, 17);


     var erros = req.validationErrors();

     if(erros){
         res.render('index', {validacao : erros})
         return;
     }

     application.get('io').emit(
         'msgParaCliente',
         {apelido: dadosForm.apelido, mensagem: ' Acabou de Entrar'}
         )


    res.render('chat.ejs', {dadosForm: dadosForm});
}