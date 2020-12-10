import { Router } from 'express';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const routes = new Router();

routes.post('/login', AuthController.store);
routes.post('/register', UserController.store);

export default routes;