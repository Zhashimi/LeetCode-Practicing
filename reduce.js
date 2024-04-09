var reduce = function (arr, init, fun) {
    let result = init;
    for (let i = 0; i < arr.length; i++) {
        result = fun(result, arr[i]);
    }
    return result;
}

var sum = function sum (n ,m){
    return n+m;
}
var mul = function multiply(n , m){
    return 1 + n*m;
}

console.log(reduce([1,4,6,7],0,sum));
console.log(reduce([1,3,5,6],0,mul));
