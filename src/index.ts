import express from 'express';

import router from '@routes/sample';
import * as path from 'path';

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
