import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import "./database/connection";

import routes from './routes'
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);

// Formas de trabalhar com banco de dados:
//   Driver nativo, Query builder, ORM
//   Driver nativo: permite a execução as querys para o banco de dados direto pelo node, mas sem nenhuma abstração de código, ou seja, direto na linguagem SQL um exemplo é o pacote sqlite3
//   Query builder: possibilita que sejam escritas querys com o próprio javascript(tendo assim um maior nível de abstração), e então esse código será transpilado para SQL, um exemplo é o knex
//   ORM(Object-Relational Mapping): É o maior nível de abstração possível, se trata de uma classe no javascript que simboliza uma tabela no banco de dados, então se houver uma tabela no bando de dados haverá uma classe igual no código
