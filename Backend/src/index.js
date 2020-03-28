const express = require('express');
const cors = require ('cors');
// aqui se usa ./ para mostrar que é um arquivo que estamos busacando
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
