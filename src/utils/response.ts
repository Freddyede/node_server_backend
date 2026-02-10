import { Response } from 'express';

const jsonResponse: (object: any, res: Response) => void = (object: any, res: Response): void => {
  res.status(200).json(object);
};

export { jsonResponse };