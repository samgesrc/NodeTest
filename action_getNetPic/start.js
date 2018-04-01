const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');
const fs = require('fs');

function start() {
    request(config.url, (err, res, body) => {
        if (!err && res) {
            console.log('start');
            // console.log(body);
            analyze.findImg(body, download);
        }
    });
}

function download(imgurl, i) {
    if ((imgurl.indexOf('http') != -1) && (imgurl.indexOf('https') != -1)) {
        let ext = imgurl.split('.').pop();
        request(imgurl).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), {
            'encoding': 'utf8'
        }));
        console.log(i);
    }

}

start();