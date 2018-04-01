let fs = require('fs');

// 打开关闭文件
fs.open('test_fs.txt', 'r+', (err, fd) => {
    if (err) {
        return console.error(err);
    }
    console.log('成功打开文件');

    // 读文件
    // let buffer = new Buffer(1024 * 10);
    // fs.read(fd, buffer, 0, 1024 * 10, 0, (err, readByte) => {
    //     console.log('读取数据总数: ' + readByte);
    //     console.log(buffer.slice(0, readByte));
        
    //     fs.close(fd, (err) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         console.log('成功关闭文件');
    //     });
    // });




    
});