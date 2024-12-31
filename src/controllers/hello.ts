import { RequestHandler, Response, Request } from 'express';


export const getName : RequestHandler = (req: Request, res: Response) => {
  if (!req.query.name) {
    res.status(400).json({ error: 'Name is required' });
  }

  if (!/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/.test(req.query.name as string)) {
    res.status(400).json({ error: 'Invalid name' });
  }

  res.json({ message: `Hello ${req.query.name} !` });
}
