var createCounter = function(n) {
    let m=n;
    return function() {
        return ++m;
    };
};
const counter = createCounter(10);
console.log(counter());