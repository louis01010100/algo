#!/usr/bin/env node

array=[2,4,3,7,4,6,9];
console.log(array);

insertionSort(array);
console.log(array);

function insertionSort(array) {
    for (var i = 0; i < array.length; i++) {
        var x = array[i];
        for (var j = i; j > 0; j--) {
            if (array[j - 1] > x) {
                array[j] = array[j - 1];
            } else {
                break;
            }
        }
        array[j] = x;
    }
}
