import req from 'supertest';

import server from './server';

test('[POST] /imageUtil/executar', async () => {
  const res = await req(server).post('/imageUtil/executar');
  //console.log(res.body);
  expect(typeof res.body.message).toBe('string');
});


test('[GET] /imageUtil/imageBlur', async () => {
  const res = await req(server).get('/imageUtil/imageBlur');
  //console.log(res);
  expect(typeof res.text).toBe('string');
});