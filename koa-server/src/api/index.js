import Router from 'koa-router';
import todo from './todo';

const api = new Router();

api.use('/todo', todo.routes());

export default api;
