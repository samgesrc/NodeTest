let EventProxy = require('eventproxy');

// ------------------------------------
// 多类型异步协作
let ep = new EventProxy();
ep.all('event1', 'event2', (event1data, event2data) => {
    // 所有指定的事件都触发后才会走到这里
    console.log(event1data);
    console.log(event2data);
});

setTimeout(() => {
    console.log("emit event1");
    ep.emit('event1', 111);
}, 2000);

setTimeout(() => {
    console.log("emit event2");
    ep.emit('event2', 444);
}, 4000);

// 如果继续发事件，不会有处理

// ------------------------------------


// // // ------------------------------------
// // // 快速创建
// let ep = EventProxy.create('event1', 'event2', (data1, data2) => {
//     console.log(data1);
//     console.log(data2);
// });

// setTimeout(() => {
//     ep.emit('event1', 'data from event1');
// }, 2000);

// setTimeout(() => {
//     ep.emit('event2', 'data from event2');
// }, 5000);

// // // ------------------------------------


// // // ------------------------------------
// // // 重复异步协作
// let ep = new EventProxy();
// ep.after('event', 5, (list) => {
//     console.log(list);
// });

// let array = [6, 2, 3, 4, 1];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     let randomtime = Math.random() * 2000 + 2000;

//     setTimeout(() => {
//         console.log('emit' + (index + 1));
//         ep.emit('event', element);
//     }, randomtime);
// }

// // // ------------------------------------


// // // ------------------------------------
// // // 持续型异步协作
// let ep = new EventProxy();
// ep.tail('event1', 'event2', (data1, data2) => {
//     console.log(data1);
//     console.log(data2);
// });

// setTimeout(() => {
//     console.log('emit event1 1');
//     ep.emit('event1', 'data from event1');
// }, 2000);

// setTimeout(() => {
//     console.log('emit event2 1');
//     ep.emit('event2', 'data from event2');
// }, 5000);

// setTimeout(() => {
//     console.log('emit event1 2');
//     ep.emit('event1', 'data from event1');
// }, 7000);

// setTimeout(() => {
//     console.log('emit event2 2');
//     ep.emit('event2', 'data from event2');
// }, 10000);

// 如果继续发事件，会继续处理

// // // ------------------------------------
