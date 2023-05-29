//1. khai báo module http
const http = require ('http')
//2. khai báo host/server
const host = 'localhost'
//3. khai báo port của server
const port = 5000
//4. khởi tạo web server
const server = http.createServer((request, respond) => {
   respond.write("<h1>Greenwich Vietnam</h1>")
   respond.write("<img src='https://vcdn-vnexpress.vnecdn.net/2022/06/03/Image-249300564-ExtractWord-0-8746-7982-1654231437.png'>")
   respond.end()
})
//5. chạy web server bằng cách listen port của server
server.listen(port, () => {
   console.log ("Web server is running at http://" + host + ":" + port)
})