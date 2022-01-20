import express, { Request, Response } from 'express';
const router = express.Router();

// TODO: use vueJS and redo this whole file

router.get('/', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/index.html');
});

router.get('/script.js', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/script.js');
});

router.get('/style.css', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/style.css');
});

export default router;