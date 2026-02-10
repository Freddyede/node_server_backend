import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { serverConfig } from '../config';
import { HomeRoad } from '../routes';
import { useCors } from '../middlewares/useCors';

const runServer: () => void = (): void => {
  if (process.env.PORT) {
    const port: number | undefined = serverConfig.port;
    const app: Express = express();
    app.use(useCors);
    app.use(bodyParser.json());
    app.use(HomeRoad);
    
    app.listen(port, () => console.log(`Listening on http://localhost:${ port }`));
  }
}

export { runServer };
