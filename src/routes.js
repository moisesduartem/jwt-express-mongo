import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = new Router();

routes.post('/register', UserController.store);

export default routes;