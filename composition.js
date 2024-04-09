var compose = function (functions) {

    return function (x) {

        for (let i = functions.length-1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};

var res = compose ([x => x+1 , x =>x+4 , x => x*4]);
console.log(res(3));