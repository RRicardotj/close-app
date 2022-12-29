import { Router as ExpressRouter, Application } from 'express';
import RouteCreator from './routes/RouteCreator';
import express from 'express';
import glob from 'glob';
import { Endpoints } from '../constants';

class BaseImplementationRoutes extends RouteCreator {
  public serviceName: Endpoints;
  defineRoutes(route: ExpressRouter): ExpressRouter {
    return route;
  }
}

export default class Router {
  private router: ExpressRouter;

  constructor() {
    this.router = express.Router();
  }

  generateRoutes(app: Application) {
    this.attachRoutes();
    app.use(this.router);
  }

  private attachRoutes(): void {
    const routes = this.getDirectoryRoutes();
    routes.forEach(Route => {
      const route = new Route();
      this.router.use(route.serviceName, route.createRoute());
    });
  }

  private getDirectoryRoutes() {
    const routes = glob.sync(__dirname + '/routes/**/*.route.*').map((routePath) => {
      const route: (typeof BaseImplementationRoutes) = require(routePath);

      return route;
    });

    return routes;
  }
}