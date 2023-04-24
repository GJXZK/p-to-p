/***
 * @作者：xzk
 * 
 */
function xzkPromise(excutor) {
    // Promise的状态初始值 全局变量
    this.status = "pending";
    // 传进来的参数
    this.result = undefined;
    // 异步处理 存放两个回调方法 successCB failCB
    this.cb = [];
    var _this = this
    function resolve(res) {
        if (_this.status !== "pending")
            return
        _this.status = "fulfilled"
        _this.result = res
        _this.cb.forEach(callback => {
            callback.successCB && callback.successCB(_this.result)
        })

    }
    function reject(error) {
        if (_this.status !== "pending")
            return
        _this.status = "rejected"
        _this.result = error
        _this.cb.forEach(callback => {
            callback.failCB && callback.failCB(_this.result)
        })
    }
    // 执行器
    excutor(resolve, reject)
}

xzkPromise.prototype.then = function (successCB, failCB) {
    return new xzkPromise((resolve, reject) => {
        // successCB
        if (this.status === "fulfilled") {
            var result = successCB && successCB(this.result)
            // 实现链式
            if (result instanceof xzkPromise) {
                result.then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            } else {
                resolve(result) //如果是字符串
            }
        }
        if (this.status === "rejected") {
            var result = failCB && failCB(this.result)
            reject(result)
        }
        if (this.status === "pending") {
            this.cb.push({
                successCB: () => {
                    var result = successCB(this.result)
                    if (result instanceof xzkPromise) {
                        result.then(res => {
                            resolve(res)
                        }, err => {
                            reject(err)
                        })
                    } else {
                        resolve(result)
                    }
                },
                failCB: () => {
                    var result=failCB(this.result)
                    if(result instanceof xzkPromise){
                        result.then(res=>{
                            resolve(res)
                        },err=>{
                            reject(err)
                        })
                    }else{
                        resolve(result)
                    }
                }
            })
        }
    })
} 