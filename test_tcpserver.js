let net = require('net');

// let server = net.createServer((socket) => {
//     console.log('some one connects');
// });

// server.listen(8000, () => {
//     console.log('server is listening');
// });

server = new net.Server;

server.listen(8000);

server.on('listening', () => {
    console.log('server is listening');
    let add = server.address();
    console.log(add);
});

server.on('connection', (socket) => {
    console.log('some one connects');

    socket.write('abc123');
});

server.on('close', () => {
    console.log('server closed');
});

server.on('error', (err) => {
    console.log(err);
});

server.on('data', (data) => {
    console.log(data.toString());
});

