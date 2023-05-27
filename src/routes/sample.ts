import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('sample', { title: 'Sample Page' });
});

export default router;
