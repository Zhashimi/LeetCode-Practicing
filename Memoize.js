const Memoize = function (fn) {
    const memoize = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (key in memoize) return key;
        var result = fn(args);
        memoize[key] = result;
        return result;
    }
}

function factorial(n) {
    if (n <= 1) return 1
    return factorial(n - 1) * n;

}
function sum(n, m) {
    return m + n;
}

function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
let callCount = 0;
const memoizedFn = Memoize(function (a, b) {
    callCount += 1;
    return a + b
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
memoizedFn(2, 5) // 5

console.log(callCount) // 1 

