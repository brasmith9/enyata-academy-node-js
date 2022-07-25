const path = require("path");

const currentDir = path.dirname("index.html");
const extName = path.extname("index.html");

console.log("Location :", currentDir + "/anotherDirectory");