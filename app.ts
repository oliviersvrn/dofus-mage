import express, { Request, Response } from 'express';
import BossRouter from './app/boss/boss';
import LockRouter from './app/lock/lock';
import MageRouter from './app/mage/mage';
import TrapRouter from './app/trap/trap';
const app = express();
const port = 3000;

app.all('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(express.static('./public'));

app.use('/boss', BossRouter);
app.use('/lock', LockRouter);
app.use('/mage', MageRouter);
app.use('/trap', TrapRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
