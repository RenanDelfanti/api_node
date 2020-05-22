import express from 'express';

import controllers from './controllers';

const router = express.Router();

router.post('/executar', controllers.index);
router.get('/teste', controllers.index2);

export default router;