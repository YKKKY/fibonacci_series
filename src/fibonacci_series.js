'use strict';

function fibonacci_series(n) {
    var fibonacci = [0, 1];
    var sum = 0;

    if (n === 1) {

        return fibonacci;
    } else {

        for (var i = 0; i < n - 1; i++) {

            sum = fibonacci[i] + fibonacci[i + 1];
            fibonacci.push(sum);
        }
    }

    return fibonacci;
}

module.exports = fibonacci_series;
