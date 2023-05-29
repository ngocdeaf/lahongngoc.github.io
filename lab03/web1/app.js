const http = require ('http');
const host = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type","text/html");
   switch (req.url) {
      case '/': 
         res.write("<h1 style='color: red;'>Cloud Computing</h1>");
         res.write("<h2 style='background-color: yellow;'>GCH1102</h2>");
         res.write("<h3 style='font-style:italic;'>Web page is running on NodeJS server</h3>");
         res.end();
         break;
      case '/login':
         res.write("<form action method='post'>")
         res.write("<input type='text' placeholder='Username' required><br><br>");
         res.write("<input type='password' placeholder='Password' required><br><br>");
         res.write("<input type='submit' value='Login'>");
         res.write("</form>")
         res.end();
         break;
      default:
         res.end("<h1>Invalid URL !</h1>");
         break;
   }

});
server.listen(port, () => {
   console.log("Server is running at http://" + host + ":" + port);
})