var http = require('http');
http.createServer(function (request,response){
    response.writeHead('200',{'Content-Type':'text/plain'});
    response.end('Hello,world\n');
}).listen(8088)
console.log('哈哈哈哈，王海焕，你也有今天')