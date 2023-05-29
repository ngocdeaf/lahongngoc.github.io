//1. khai báo module http
const http = require ('http')
//2. khai báo host/server
const host = 'localhost'
//3. khai báo port của server
const port = 3000
//4. khởi tạo web server
const server = http.createServer((request, respond) => {
   respond.write("<h1>Hanoi is the capital of Vietnam</h1>")
   respond.write("<img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=700&h=-1&s=1'>")
   respond.end()
})
//5. chạy web server bằng cách listen port của server
server.listen(port, () => {
   console.log ("Web server is running at http://" + host + ":" + port)
})