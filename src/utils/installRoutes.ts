import { Express } from 'express';
import ping_routes from "../routes/v1/ping";

export default function(app: Express, apiRoot: String, routeVersion: String) {
    app.use(`/${apiRoot}/${routeVersion}`, ping_routes)
}

