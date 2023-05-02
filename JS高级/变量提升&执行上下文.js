//变量提升
/*
    js引擎在代码执行之前会做预处理
    1.收集变量
    2.收集函数
    var var username=undefined  定义不赋值
    function(){} 提前定义该函数
*/ 
console.log(username);//undefined
var username = 'xzk';

fun(); //fun 
function fun(){
    console.log('fun');
}
console.time(fun);
console.timeEnd(fun)
// 执行上下文 执行上下文对象
/*
    EC（执行上下文execute context）
    代码执行的环境
    代码正式执行之前会进入执行环境
    工作：
        1：创建变量对象
            -变量  var
            -函数及函数参数
            -全局 window
            -局部 抽象但却是存在
        2：确认this的指向
            -全局：this->window
            -局部：this->调用其对象
        3：创建作用域链
            父级作用域链+当前的变量对象
        4：ECObj
           ECObj={
            变量对象：{变量，函数，函数的形参}
            scopeChain：父级作用域链+当前的变量对象
            this:window || 调用其的对象 
           }
*/ 