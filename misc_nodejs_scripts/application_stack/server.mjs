import * as http from 'http';
import * as url from 'url';

function start() {
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received.`);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello Server World!');
    response.end();
  }
  
  http.createServer(onRequest).listen(8888);
  console.log('Server is running at http://127.0.0.1:8888')
}

export { start };