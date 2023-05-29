// tạo web server với NodeJS */

//1. khai báo & import thư viện http
const http = require('http');
//2. khai báo host (server)
const host = 'localhost';
//3. khai báo server port (default : 3000)
const port = 3000;
//4. tạo server
//const server = http.createServer(function(request, respond) {
const server = http.createServer((request, respond) => {
   respond.write("<h1 style='color: red;'>This is NodeJS web server</h1>");
   respond.write("<h2 style='color: blue;'>Learning cloud computing (1644)</h2>");
   respond.end("<img src='https://wiki.tino.org/wp-content/uploads/2021/07/word-image-1155.png'>");
});
//5. chạy server bằng cách listen port
server.listen(port, () => {
   console.log("Web server is running at http://" + host + ":" + port);
   //console.log("Web server is running at http://localhost:3000");
});
