const http = require ('http');
const fs = require('fs');
const port = 5000;
server = http.createServer((req, res) => {
   switch (req.url) {
      case '/':
         fs.readFile('index.html', (error, data) => {
            if (error) {
               console.log(error)
            } else {
               res.write(data);
               res.end();
            }
         });
         break;
      case '/demo':
         fs.readFile('demo.html', (e, d) => {
            if (!e) {
               res.write(d);
               res.end();
            }
         });
         break;
      default:
         fs.readFile('404.html', (err, data) => {
            if (!err) {
               res.write(data);
               res.end();
            }
         });
         break; 
   }
}).listen(port, () => {
   console.log("http://localhost:" + port);
});