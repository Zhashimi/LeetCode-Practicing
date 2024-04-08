const addBinary = function (a, b) {
    let res = '';
        let i = a.length - 1;
        let j = b.length - 1;
        let carry = 0;
        while (i >= 0 || j >= 0) {
            let sum = carry;
            if (i >= 0) sum += parseInt(a[i--]);
            if (j >= 0) sum += parseInt(b[j--]);
            carry = sum > 1 ? 1 : 0;
            res += String(sum % 2);
        }
        if (carry) res += String(carry);
        return res.split('').reverse().join('');


}
console.log(addBinary("11", "1"))