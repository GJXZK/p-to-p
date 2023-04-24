// 引入http包
const http=require('http')
// 创建服务器
const server =http.createServer((req,res)=>{
    // req 接受浏览器来的参数
    
    // res 返回渲染的内容
    // res.writeHead 给浏览器一个请求头 状态码 内容类型
    res.writeHead(200,{"Content-Type":'application/json;charset=utf-8'});
    res.write("谢资康")
    res.end(JSON.stringify({data:'谢资康'}))
}).listen(8000,()=>{
    console.log("server start");
})