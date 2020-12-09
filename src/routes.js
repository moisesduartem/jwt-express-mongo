import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) => res.json("hello world!"));

export default routes;