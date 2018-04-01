const http = require('http');

// 写法1
// const server = http.createServer(function (req, res) {
//     res.end('hello, nodejs!');
// });

// 写法2
const server = new http.Server();
server.on('request', (req, res) => {
    res.end('hello, samge');
});

server.listen(3000, () => {
    console.log('server listening port 3000');
});