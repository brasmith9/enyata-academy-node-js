const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("index.htm", (err, data) => {
      res.writeHead(200, "success", {
        "Content-Type": "text/html",
      });
      if (err) {
        res.write(`/${err.path} does not exist.`);
        res.end();
        return;
      }
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
