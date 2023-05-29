const http = require ('http')
const port = 3333
const server = http.createServer((req, res) => {
   switch (req.url) {
      case '/' :
         res.write("<h1 style='color: blue;'>Homepage</h1>");
         res.write("<a href='/login'>Login</a><br>");
         res.write("<a href='/contact'>Contact</a><br>");
         res.write("<a href='/greenwich'>Greenwich</a><br>");
         res.end();
         break;
      case '/login' :
         res.end("<h1 style='color: blue;'>Login page</h1>");
         break;
      case '/contact':
         res.end("<h1 style='color: blue;'>Contact page</h1>");
         break;
      case '/greenwich':
         res.end("<h1 style='color: blue;'>Greenwich University</h1>");
         break;
      default: 
         res.end("<h1 style='color: red;'>404 not found !</h1>");
         break;
   }
})
server.listen(port, () => {
   console.log('http://localhost:' + port)
})