#!/usr/bin/env node

function binarySearch(array, target) {
    var hi = array.length - 1;
    var lo = 0;
    while (hi > lo) {
        var mid = Math.floor((hi + lo) / 2);
        if (array[mid] == target) {
            return mid;
        } else if (array[mid] > target) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }  
    }  
 
    return -1;
}
 
 
//           0 1 2 3 4 5  6  7  8  9
var array = [2,3,5,7,9,13,15,17,48,49];
 
console.log(binarySearch(array, 49));

Prove that this algorim return a non-negative integer i such that array[i] = target, or i = -1 if the array does not contain target.

1.  Identify a useful loop invariant 
    Prior to each iteration, array[lo] <= target <= array[hi]

2.  Initialization: we have to show that the loop invariant holds before the first iteration of the loop
    Prior to the first iteration, hi = array.length -1, lo = 0.  
    All the array elements are between array[0] and array[array.length - 1]. 
    Therefore array[lo] <= target <= array[hi].  The loop invariant holds

3.  Maintenance: we have to show that each iteration of the loop maintain the loop invariant.
    Assume that the loop invariant holds prior to iteration j. That is, array[lo] <= target <= array[hi] 
    In the loop body of iteration j, mid is the floor of arithematic mean of hi and lo. 
    If array[mid] > target, then, array[lo] <= target <= array[mid - 1 ] = array[hi]
    If array[mid] < target, then, array[lo] = array[mid + 1] <= target <= array[hi ]

    In either case, the loop invariant holds


4.  Termination: we have to use the loop invariant and loop termination condition to prove the correctness of the algorithm
    As hi is decreasing and lo is increasing in each iteration, these two numbers will finally converge at a single locaiton where hi = lo.
    By the loop invariant, array[lo] <= target <= array[hi] and hi = lo,
        array[lo] = array[hi] = target
Q.E.D
    
