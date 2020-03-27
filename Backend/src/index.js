const express = require('express');
// aqui se usa ./ para mostrar que é um arquivo que estamos busacando
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
