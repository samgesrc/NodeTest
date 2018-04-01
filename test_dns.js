const dns = require('dns');

// 通过域名返回ip
let domain = 'www.baidu.com';
dns.resolve(domain, (err, address) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(address);
});

// 通过ip找域名
let ip = '114.114.114.114';
console.log(dns.reverse(ip, (err, domain) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(domain);
}));