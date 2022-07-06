import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import installRoutes from "./src/utils/installRoutes";
import setupSwagger from "./src/utils/setupSwagger";


dotenv.config();

const app: Express = express();
const port = process.env.PORT!;
const api_root: String = process.env.API_ROOT!;

app.use(bodyParser.json()); // for parsing application/json

setupSwagger(app, port)
installRoutes(app, api_root, "v1");

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});