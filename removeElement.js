var removeElement = function(num, val) {
    const removed=[];
    const expected =[];
    for(let i=0; i<num.length;i++){
        if(num[i] == val){
            removed.push(num[i]);
        }
        else{
            expected.push(num[i]);
        }
    }
    return expected;
    
};
console.log(removeElement([0,1,2,2,3,0,4,2],2));