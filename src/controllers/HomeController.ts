import { Request, Response } from 'express';
import { jsonResponse } from '../utils/response';

const index: (_req: Request, res: Response) => void = (_req: Request, res: Response) => {
  jsonResponse({controller_name: 'HomeController', status: res.statusCode}, res);
};

export { index };