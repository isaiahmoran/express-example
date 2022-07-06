import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express';
import ping_routes from './src/routes/v1/ping';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const api_root = process.env.API_ROOT;
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Express Example API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Isaiah Moran",
                url: "tram.global",
                email: "isaiah@tram.global",
            },
        },
        servers: [
            {
                url: `http://localhost:${port}/`,
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {explorer: true})
);

app.use(bodyParser.json()); // for parsing application/json


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

app.use(`/${api_root}/v1`, ping_routes)