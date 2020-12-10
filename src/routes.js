import { Router } from 'express';
import auth from './middlewares/auth';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const routes = new Router();

routes.get('/users', auth, UserController.index);
routes.post('/login', AuthController.store);
routes.post('/register', UserController.store);

export default routes;