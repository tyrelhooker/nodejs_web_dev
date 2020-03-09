/* 
application_stack is a collection of files designed to properly practice writing code using JS and Node.js and hopefully encapsulates best practices in writing modules, servers, and routing. Also, this program is being used to experiment with ES modules in Node. 
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

// Startes the node server in server.mjs
server.start(route, handle);