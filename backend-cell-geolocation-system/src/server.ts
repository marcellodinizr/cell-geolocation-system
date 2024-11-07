import express from 'express';
import path from 'path';

import errorHandler from './errors/handler';
import routes from './routes';

import './database/connection';
import 'express-async-errors';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333);
