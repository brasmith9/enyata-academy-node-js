const os = require("os");

const cpu = os.cpus();
const arch = os.arch();
const freeMemory = os.freemem();
const totalMemory = os.totalmem();
const network = os.networkInterfaces();
const platform = os.platform();
const userInfo = os.userInfo();

console.log(userInfo);