const util = require('util');

//test 1

let obj = {
    keyword: 'this is keyword',
    name: 'this is name'
};

// 将一个对象变成字符串
let str = util.inspect(obj);
console.log(str);

// test 2 带有时间戳的日志
util.log(str);

//test 3 格式化字符串
console.log(util.format('%s is %d', 'samge', 121));
console.log('samge', 12, 'hello')







