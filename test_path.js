const path = require('path');

//拼接一个路径，__dirname表示当前代码所在的路径
let outputpath = path.join(__dirname, 'node', 'node.js');
console.log(outputpath);

// 打印扩展名
console.log(path.extname(outputpath));

//将路径字符串解析为一个对象
console.log(path.parse(outputpath));
