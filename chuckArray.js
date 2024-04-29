var chunk = function (arr, size) {
    const newArray =[];
    let j = 0;
    for (let i = 0; i < arr.length; i+=size) {
      newArray.push(arr.slice(i,i+size))
    }


    return newArray;
};

console.log(chunk([1, 2, 3, 4, 5], 3));
