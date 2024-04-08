const searchInsert = function (array, n) {
    const arr = [];
    if (array.indexOf(n) !== -1) {
        return array.indexOf(n);
    };


    for (let i = 0; i <= array.length; i++) {
        if (array[i] < n) {
            arr.push(array[i]);
        } else {
            arr.push(n);
            arr.push(array[i])
        }
    }
    return arr.indexOf(n);

}
console.log(searchInsert([1, 3, 4, 5], 6));