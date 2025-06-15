import { Router } from 'express';
import { stackHandler } from '../../application/basic/stackHandler.js';

const router = Router();

router.get('/stack', (req, res) => {
    const stack = stackHandler();
    stack.handle(req, res);
});

export default router; 