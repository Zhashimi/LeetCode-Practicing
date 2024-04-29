var sortBy = function(arr,fn){
    return arr.sort((a,b)=>fn(a)-fn(b));
}

console.log(sortBy([1,6.8,5,7],(x)=>x*x));