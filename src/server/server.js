var Hapi = require('hapi');


var server = new Hapi.Server();

server.connection({port : 7680});

server.route({
    path: '/',
    method: 'GET',
    handler: function (request, reply) {
        reply('Hello World');

    }
});

server.start(function (err) {

    if(err) {
        console.log("error while starting server",err);
    }

    console.log("server listening on port: ",server.info.port);

});
