import express from 'express';
import * as path from 'path';

import authRouter from '@routes/auth.router';

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
