/**
 * 2017-9-26 Gao Dongxu
 */
function add(x) {
return this.a + x
}
var a = 1;
console.log(add(2));


var  obj = {
    a : 1,
    add :function(x){
        return function(){
            console.log((`this.a -> ${this.a}`))
            return this.a + x;
        }
    }
};
console.log(obj.add(1)())
