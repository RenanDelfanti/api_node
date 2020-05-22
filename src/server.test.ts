import req from 'supertest';

import server from './server';

test('[GET] /func1/teste', async () => {
  const res = await req(server).get('/func1/teste');
  expect(typeof res.body.statusCode).toBe('number');
});