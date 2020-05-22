import express from 'express';
const func1 = require('./funcaoteste');

export default {
  index: (_req: express.Request, res: express.Response) => {
    func1.handler(_req.body, (err: any, result: any) => {
      if (err) {
        res.status(result.statusCode).send(result);
        return;
      }
      res.status(result.statusCode).send(result);
    })
  },
  index2: (_req: express.Request, res: express.Response) => {
    func1.teste(_req.body, (err: any, result: any) => {
      if (err) {
        res.status(result.statusCode).send(result);
        return;
      }
      res.status(result.statusCode).send(result);
    })
  },
};