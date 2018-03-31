const log4js = require('log4js')

log4js.configure({
    appenders: {
        logAllToConsole: {
            type: 'console'
        },

        logAllToFile: {
            type: 'dateFile',
            filename: 'log/',
            pattern: 'yyyy-MM-dd-all.log',
            alwaysIncludePattern: true
        },

        logErrToFile: {
            type: 'dateFile',
            filename: 'log/',
            pattern: 'yyyy-MM-dd-err.log',
            alwaysIncludePattern: true
        },

        'just-errors': { type: 'logLevelFilter', appender: 'logErrToFile', level: 'error' },

    },

    categories: {
        // 默认不打日志
        default: { appenders: ['logAllToConsole'], level: 'off' },

        // 开发阶段打印日志到控制台方便调试
        development: { appenders: ['logAllToConsole'], level: 'debug' },

        // 发布到外网后打印日志到文件，一天一个日志
        production: { appenders: ['just-errors', 'logAllToFile'], level: 'debug' }
    }
});

// 调用以下方法可以打印到控制台或文件
// logger.debug
// logger.error
// logger.info
// logger.warn
// logger.fatal
// logger.trace
// console.log
// console.debug
// console.error
exports.getLogger = function () {

    // 选择调试或发布
    // let logger = log4js.getLogger("development");
    let logger = log4js.getLogger("production");

    console.log = logger.debug.bind(logger);
    console.debug = logger.debug.bind(logger);
    console.error = logger.error.bind(logger);

    return logger;
}