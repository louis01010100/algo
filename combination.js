#!/usr/bin/env node

const factor = Math.pow(10,6);

function combination(n, m) {

    return factorial(n) / (factorial(m) * factorial(n - m));
}


function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}

function prob(n, m, target, other) {
    return combination(n, m) * Math.pow(target, m) * Math.pow(other,n - m);
}



function sum(n, a, b) {
    let total = 0;
    for (var i = 0; i < n + 1; i++) {
        let p = prob(n,i, a, b);
        let pp = Math.round(p * factor)/ factor;
        total += pp;
        console.log(`${i}\t${pp}\t${total}`);
    }

}


sum(20, 1/75, 74/75);
