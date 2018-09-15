const Hapi = require('hapi');

const server = Hapi.server({
    port: 8080,
    host: 'localhost'
});

server.route({
    config: {
        cors: {
            origin: ['*']
        }
    },
    method: 'POST',
    path: '/user/login/',
    handler: (request, h) => {
        var resp = { username: 'admin', token: 'admin'}
        console.log(request.payload)
        return resp;
    }
});

server.route({
    config: {
        cors: {
            origin: ['*']
        }
    },
    method: 'GET',
    path: '/user/userInfo/',
    handler: (request, h) => {
        var resp = { roles: ['admin'], name: 'admin' }    
        return resp
    }
});

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();