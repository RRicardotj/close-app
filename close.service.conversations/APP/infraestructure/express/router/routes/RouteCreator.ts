import { Endpoints } from '../../constants';
import { Router } from 'express';
import express from 'express';

export default abstract class RouteCreator {
  public abstract serviceName: Endpoints;

  static Endpoints = Endpoints;

  createRoute(): Router {
    const newRoute = express.Router();

    this.defineRoutes(newRoute);

    return newRoute;
  }

  abstract defineRoutes(route: Router): Router; 
}
