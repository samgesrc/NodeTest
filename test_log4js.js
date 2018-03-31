
const log4js = require('./logconfig')
const logger = log4js.getLogger()

console.log("console.log");
console.debug("console.debug");
console.error("console.error");

logger.debug("logger.debug");
logger.error("logger.error");
logger.info("logger.info");
logger.warn("logger.warn");

logger.fatal("logger.fatal");
logger.trace("logger.trace");