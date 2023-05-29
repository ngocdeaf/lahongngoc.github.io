//1. hàm có tham số và có return
function sum (a, b) {
   return a + b
}
console.log(sum(5,8))
//2. hàm có tham số nhưng không return
function sayHello (name) {
   console.log ("Hello " + name)
}
sayHello("Greenwich Vietnam")
//3. hàm không có tham số nhưng có return
function currentYear () {
   return 2023
}
console.log ("We are living in " + currentYear())
//4. hàm không có tham số và cũng không return
function greenwich() {
   console.log("Welcome to Greenwich Vietnam")
}
greenwich()