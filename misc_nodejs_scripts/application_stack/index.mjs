/* 
application_stack is a collection of files designed to properly practice writing code using JS and Node.js and experiment with dependency injection pattern practices in writing modules. Also, this program is being used to experiment with ES modules in Node.
*/

/* 
This main file starts the HTTP even though the code for the server is in server.js
*/

import * as server from "./server.mjs";
import { route } from "./router.mjs";
import * as requestHandlers from './requestHandlers.mjs';

let handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

/* 
Starts the node server in server.mjs. Also passes the route object and handle object into server.start() as parameters using dependency injection pattern. This allows the server module to use the route and handle objects without importing modules. Then server.start() passes the handle object and its own pathname object to router.mjs module using the dependency injection pattern.
*/
server.start(route, handle);