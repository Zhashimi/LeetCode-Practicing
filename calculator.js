class Calculator {
    constructor(value) {
        this.result = value;
    }
    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value == 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    power(value) {
        this.result = value*value;
        return this;
    }

    getResult() {
        return this.result;
    }
}

console.log(new Calculator(4).add(5).multiply(6).getResult());
