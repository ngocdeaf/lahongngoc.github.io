const http = require('http');
const port = 5000;
const fs = require('fs');   //fs: file system

const server = http.createServer((req, res) => {
   switch(req.url) {
      case '/':
         fs.readFile("index.html", (err, data) => {
            if (err) {
               console.log (err)
            } else {
               res.write(data);
               res.end();
            }
         });
         break;
      case '/hanoi':
         fs.readFile("hanoi.html", (err, data) => {
            if (!err) {
               res.write(data);
               res.end();
            }
         });
         break;
      case '/hcm':
         fs.readFile("hcm.html", (err, data) => {
            if (!err) {
               res.write(data);
               res.end();
            }
         });
         break;
      case '/danang':
         fs.readFile("danang.html", (err, data) => {
            if (!err) {
               res.write(data);
               res.end();
            }
         });
         break;
      case '/cantho':
         fs.readFile("cantho.html", (err, data) => {
            if (!err) {
               res.write(data);
               res.end();
            }
         });
         break;
      default: 
         fs.readFile("404.html", (err, data) => {
            if (!err) {
               res.write(data);
               res.end();
            }
         })
   }
});
server.listen(port, () => {
   console.log("Web server is running at http://localhost:" + port);
});