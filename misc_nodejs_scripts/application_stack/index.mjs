/* 
application_stack is a collection of files designed to properly practice writing code using JS and Node.js and hopefully encapsulates best practices in writing modules, servers, and routing. Also, this program is being used to experiment with ES modules in Node. 
*/

/* 
This main file starts the HTTP even though the code for the server is in server.js
*/

import { start } from "./server.mjs";

// Startes the node server in server.mjs
start();