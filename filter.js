var filter = function (arr, fn) {
    const newArray = [];
    console.log(fn);
    for (let i =0 ; i < arr.length; i++) {
        if (fn == 'greaterThen10') {
            if (greaterThen10(arr[i])) {
                newArray.push(arr[i]);
            }
        }
        else if (fn == 'indexOf') {
            if (indexOf(arr[i]), i) {
                newArray.push(arr[i]);
            }
        }
        else if (fn == 'plusOne') {
            if (plusOne(arr[i])) {
                newArray.push(arr[i]);
            }
        }
        else
            return 'wrong function name';

    }

    function greaterThen10(n) {
        return n > 10 ? true : false;

    }
    function indexOf(n, i) {
        return arr[n] === i ? true : false
    }

    function plusOne(n) {
        return n + 1 === 0 ? false : true;
    }

    return newArray;
};


console.log(filter([1, 3, 20, 6], 'greaterThen10'));
console.log(filter([1, 3, 20, 6], 'indexOf'));
console.log(filter([1, -1, 20, 6], 'plusOne'));



