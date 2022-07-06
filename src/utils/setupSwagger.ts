import { Express } from 'express';
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export default function(app: Express, port: String) {
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
}

