const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');

function start() {
    request(config.url, (err, res, body) => {
        if (!err && res) {
            console.log('start');
            analyze.findImg(body, download);
        }
    });
}

function download(imgurl, i) {
    let ext = imgurl.split('.').pop();
    request(imgurl).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), {
        'encoding': 'utf8'
    }));
    console.log(i);
}

start();