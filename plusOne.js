var plusOne = function (digits) {
    let n= digits.length;
    let newArray= [1];   
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
   
            digits[i] = 0
            newArray.push(0);
        
    }
    return newArray;

   



};
console.log(plusOne([4,9,8,9]));