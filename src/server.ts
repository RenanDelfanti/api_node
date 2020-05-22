import express from 'express';
import func1 from './domains/func1/routes';

const server = express();

server.use(express.json()) 

server.use('/func1', func1);

export default server;