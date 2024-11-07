import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import CelulasController from './controllers/CelulasController';

const routes = Router();
const upload = multer(uploadConfig)

routes.get('/celulas', CelulasController.index)
routes.get('/celulas/:id', CelulasController.show)
routes.post('/celulas', upload.array('images'), CelulasController.create)

export default routes;