let fs = require('fs');
let request = require('request');
let qs = require('querystring');
let path = require('path');

function readIp(path, callback) {
    fs.readFile(path, (err, data) => {
        if (err) {
            callback(err);
        } else {
            try {
                data = JSON.parse(data);
                callback(null, data);
            } catch (error) {
                callback(error);
            }
        }
    })
}

readIp(path.join(__dirname, 'ipconfig.json'), (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
})

function name(params) {
    
}