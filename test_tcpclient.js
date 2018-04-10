let net = require('net');

let client = new net.Socket();
client.connect(8000, '127.0.0.1', () => {
    console.log('connect the server');

    
});

client.on('data', (data) => {
    console.log(data.toString());
    client.write('message from client');
});

client.on('end', (err) => {
    console.log(err);
});

client.on('error', (err) => {
    console.error(err);
});