// nodejs的事件轮询机制.
setImmediate(function(){
    console.log("setImmediate");
})
setTimeout(function(){
    console.log("setTimeout");
})
process.nextTick(function(){
    console.log("process.nextTick");
})
