import express, { Request, Response } from "express";

const app = express();

app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello, wold! Its ok!');
});

app.listen(3000, () => {
  console.log('App de pé.');
});
