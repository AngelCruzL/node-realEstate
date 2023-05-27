import express from 'express';

import router from '@routes/sample';

const app = express();

app.use('/', router);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
