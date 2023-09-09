const { CLIENT_RENEG_WINDOW } = require('tls');

var http = require('http'), 
    fs = require('fs'), 
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  /*Investigate the request object. 
    You will need to use several of its properties: url and method
  */
  //console.log(request);

  /*
    Your request handler should send listingData in the JSON format as a response if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: Explore the request object and its properties 
    HINT: Explore the response object and its properties
    https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
    
    HINT: Explore how callback's work 
    http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4
    
    HINT: Explore the list of MIME Types
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
   
    HINT: Explore mdn web docs for resources on how to use javascript.
    Helpful example: if-else structure- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

    */

    if (request.method === 'GET' && request.url === '/listings') {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(listingData);
    } else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end('404 Not Found');
    }



};

fs.readFile('listings.json', 'utf8', function (err, data) {

    // reeeee errrororrrr
    if (err) {
        throw err;
    }


    // get data
    listingData = data;

    // a server is created, but not started
    var server = http.createServer(requestHandler);

    // the server is now started, listening for requests on port 8080 - go to your browerd and paste in http://127.0.0.1:8080
    server.listen(port, function () {
        //once the server is listening, this callback function is executed
        console.log('Server listening on: http://127.0.0.1:' + port);
    });

    // cere

    //MEOWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW this is outdated javascript




});
