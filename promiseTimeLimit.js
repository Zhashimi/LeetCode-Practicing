/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

    return async function (...args) {
        const func = fn(...args);
        const timeout = new Promise((resolve, reject) => {
            setTimeout(()=>{
                reject("Time limit exceeded")
            },t)
        })

        return Promise.race([func,timeout]);

    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
