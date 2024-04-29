
var ArrayWrapper = function(nums){
    this.nums = nums;
}
ArrayWrapper.prototype.valueOf = function(){
 return this.nums.reduce((sum,num)=>sum += num,0);
}
ArrayWrapper.prototype.toString = function(){
    return `[${this.nums}]`;
}
const arrayWrapper = new ArrayWrapper([1,2,4,5,6]);
const arrayWrapper2= new ArrayWrapper([2,2,5,7]);
console.log(arrayWrapper + arrayWrapper2);
console.log(arrayWrapper.toString([[1,2,4,5,6]]));
