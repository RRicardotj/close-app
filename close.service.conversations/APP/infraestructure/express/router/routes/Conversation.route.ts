import { Router } from 'express';
import { Endpoints } from '../../constants';
import RouteCreator from './RouteCreator';

class ConversationRoute extends RouteCreator {
  public serviceName: Endpoints = RouteCreator.Endpoints.CONVERSATION;

  defineRoutes(route: Router): Router {
    route.get('/', (req, res) => {
      return res.json({ message: 'hello world' });
    })

    return route;
  }
}

export default ConversationRoute;
