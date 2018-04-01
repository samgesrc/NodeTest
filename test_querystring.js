const querystring = require('querystring');

// 将查询字符串解析为一个对象
let str = 'keyword=nodejs&name=samge';
let obj = querystring.parse(str);
console.log(obj);
console.log(obj.keyword);

// 将一个对象解析为查询字符串
let obj2 = {
    keyword: 'this is keyword',
    name: 'i am samge'
};

let str2 = querystring.stringify(obj2);
console.log(str2);