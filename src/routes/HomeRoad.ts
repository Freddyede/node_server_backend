import { Router } from 'express';
import { HomeController } from '../controllers';

const homeRoad: Router = Router();

homeRoad.get('/', HomeController.index);

export default homeRoad;