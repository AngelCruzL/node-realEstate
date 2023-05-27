import express from 'express';
import * as path from 'path';

import authRouter from '@routes/auth.router';
import { databaseConfig } from '@config/database';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function initDatabase() {
  try {
    await databaseConfig.authenticate();
    await databaseConfig.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

initDatabase();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/auth', authRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
