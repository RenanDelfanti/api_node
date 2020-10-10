import express from 'express';
const imageUtil = require('./imageFunctions');

export default {
  index: (_req: express.Request, res: express.Response) => {
    imageUtil.handler(_req.body, (err: any, result: any) => {
      if (err) {
        res.status(result.statusCode).header(result.headers).send(result.body);
        return;
      }
      res.status(result.statusCode).header(result.headers).send(result.body);
    })
  },
  imageBlurFunc: (_req: express.Request, res: express.Response) => {
    imageUtil.blurImage(_req.body, (err: any, result: any) => {
      //console.log(result)
      if (err) {
        res.status(result.statusCode).header(result.headers).send(result.body);
        return;
      }
      res.status(result.statusCode).header(result.headers).send(result.body);
    })
  },
};