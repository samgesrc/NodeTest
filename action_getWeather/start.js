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

        ip2geo(data[0], (err, data) => {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
            }
        })
    }
})

function ip2geo(ip, callback) {
    let url = 'http://www.telize.com/geoip/' + ip;
    console.log(url);
    request({url: url, json: true}, (err, resp, body) => {
        callback(err, body);
    });
}

function geo2weather(lat, lon, callback) {
    let params = {
        lat: lat,
        lon: lon,
        APPID: 'public key'
    }

    let str = qs.stringify(params);

    let url = 'http://';
    request({url: url, json: true}, (err, resp, body) => {
        callback(err, body);
    });
}
