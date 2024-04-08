var removeDuplicates = function(num) {
    let removed =[];
    let expected=[];
    for(let n=0;n<num.length;n++){
    if(num[n] == num[n+1]){
        removed.push(num[n]);
    }
    else{
        expected.push(num[n]);
    }
    }

    return expected;

};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));