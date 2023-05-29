const http = require("http")
http.createServer((req, res) => {
   res.end("<h1>Cloud Computing - GCH1102</h1>")
}).listen(5000)