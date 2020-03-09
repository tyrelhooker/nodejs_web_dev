/*
This allows us to wire the request handlers into the router, giving our router something to route to.  
*/

function start() {
  console.log('Request handler \'start\' was called.')
}

function upload() {
  console.log('Request handler \'upload\' was called.')
}

export { start, upload };