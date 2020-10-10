import express from 'express';
// import * as socketIo from 'socket.io';
import image from './domains/image/routes';

const server = express();

// const io = socketIo.listen(server);

server.use(express.json()) 

server.use('/imageUtil', image);

// io.on('connection', (socket: any) => {
//     socket.on('teste', (teste: any) => {
//         console.log(teste);
//     })
// })

export default server;