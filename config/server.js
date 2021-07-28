/* importar express */

var express = require('express');

/* importar consign */

var consign = require('consign');

/* importar body parser */

var bodyParser = require('body-parser');

/* express validator */

var expressValidator = require('express-validator');

/* objeto express */

var app = express();



/* setar variaveis  */
app.set('view engine', 'ejs');
app.set('views', './app/views');


/* config midd express.static */


app.use(express.static('./app/public'));


/* config midd body-parser */
app.use(bodyParser.urlencoded({ extended: true }));

/*midd express validator */
app.use(expressValidator());

/* autoload das rotas */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);




/* exportar objeto */
module.exports = app;