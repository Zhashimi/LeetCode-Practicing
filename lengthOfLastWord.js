var lengthOfLastWord = function (s) {
    let index = s.split(' ');
    console.log(index);
    let str = index[index.length - 1];
    console.log(str.length);
    for (let i = 1; i <= index.length ; i++) {
        if (str.length == 0) 
       {
        str = index[index.length - i];
        console.log("str2"+str);
       }
    }
    return str.length;
};
console.log(lengthOfLastWord('a '));