let aaaa = {
    key: 3
}

// let obj = new Proxy(aaaa, {
//     // get: (target, property) => {
//     //     console.log("你读我了。");
//     // }

//     get: function (target, key) {
//         console.log("你读我了。");
//         // return Reflect.get(target, key, receiver);
//     }
// });

// var obj = new Proxy({}, {
//     get: function (target, key, receiver) {
//       console.log(`getting ${key}!`);
//       return Reflect.get(target, key, receiver);
//     },
//     set: function (target, key, value, receiver) {
//       console.log(`setting ${key}!`);
//       return Reflect.set(target, key, value, receiver);
//     }
//   });

// console.log(target.key);
// obj.count = 1;
// ++obj.count

// let data = {
//     key: 123,
// }

// let fun = (data) => {
//     new Proxy(data, {
//         get(target, key, receiver) {
//             console.log("调用了get");
//         },

//         set(target, key, value) {
//             console.log("调用了set");
//         }
//     });
// } 


// aaaa.key


let func = function (callback) {
    let data = {
        key: 123,
    }

    console.log("123: " + data.key);

    let pro = new Proxy(data, {
        get(target, properkey) {
            console.log("调用了get");
            return 5;
        },
        set(target, properkey, recivalue) {
            console.log("调用了set");
        }
    })

    callback(pro);
}

func((data) => {
    console.log(data.key);
    data.key = data.key + 1;
});