
var map = function(arr, fn) {
    let newArray=[];
    for(let i = 0; i<arr.length ; i++){
     
        if(fn == "plusOne"){
            newArray.push(plusOne(arr[i]));

        }
        else if(fn == "plusI"){
            newArray.push(plusI(arr[i],i));
        }
        else if(fn == "constant"){
            newArray.push(constant());
        }
    }
    function plusOne(n){
        return ++n;
    }
    function plusI(n,i){
        return n + i;
    }
    function constant(){
        return 42;
    }

    return newArray;
};

const mapArr = map([1,2,3],"plusI");

console.log(mapArr);