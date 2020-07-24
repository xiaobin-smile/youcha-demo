// 1、储存 2、获取、 3、删除
class Local {

    setVal(key,obj){
        localStorage.setItem(key,JSON.stringify(obj))
    }


    getVal(key){
        let str=localStorage.getItem(key);
        return JSON.parse(str);
    }
    delVal(key){
        localStorage.removeItem(key)
    }
}

let local=new Local();

export default local;