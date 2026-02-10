import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { serverConfig } from '../config';
import { HomeRoad } from '../routes';
import cors from 'cors';

const runServer: () => void = (): void => {
  if (process.env.PORT) {
    const port: number | undefined = serverConfig.port;
    const app: Express = express();
    app.use(cors({
      origin: '*',
      credentials: true,
    }));
    app.use(bodyParser.json());
    app.use(HomeRoad);
    
    app.listen(port, () => console.log(`Listening on http://localhost:${ port }`));
  }
}

export { runServer };
