var Hapi = require('hapi');
var Inert = require('inert');


var server = new Hapi.Server();

server.connection({port : 7680});
server.register([Inert]);
server.ext('onRequest',function (request,reply) {
    console.log("request recived ::" +request.path);
    reply.continue();

})
server.route(
    {
        path: '/alerts',
        method: 'GET',
        handler: {
            file: 'E:/JS/simpleReact/src/server/index.html'
        },
    }
   );

server.route(
    {
        path: '/bundle.js',
        method: 'GET',
        handler: {
            file: 'E:/JS/simpleReact/bundle.js'
        }
    }
);

server.start(function (err) {

    if(err) {
        console.log("error while starting server",err);
    }

    console.log("server listening on port: ",server.info.port);

});
