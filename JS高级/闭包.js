/*
 什么是闭包？
    1.密闭的容器，类似于set map容器，储存数据
    2.闭包是一个对象，存放数据的格式：key：value
形成条件：
    1.函数嵌套
    2.内部函数引用玩不函数的局部变量
*/ 
function fun(n,o){
    console.log(o);
    return{
        fun:function(m){
            return fun(m,n)
        }
    }
}
var a=fun(0) //undefined
a.fun(1)     //0
a.fun(2)     //0
a.fun(3)     //0
var b=fun(0).fun(1).fun(2).fun(3) //undefined 0 1 2

var c=fun(0).fun(1)
c.fun(2)
c.fun(3)
// undefined 0 1 1