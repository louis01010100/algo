var x = c; 
var y = 0;

while (x > 0) {
    x--;
    y++;
}


Prove that when the loop terminates, y = c


1.  Identify the loop invariant:
    Prior to each iteration, x + y = c

2.  Initialization: we start by showing the loop invariant holds prior to the first iteration
    Prior to the first iteration
        x = c
        y = 0
        x + y = c + 0 = c
    The loop invariant holds

3.  Maintenance: we shows that each iteration maintains the loop invariant
    Assume that the loop invariant holds for iteration j, that is, prior to iteration j, x + y = c.
    In the loop body of iteration j, x is decremented by 1 and y is incremented by 1.
    (x - 1) + (y + 1) = (x + y) + (-1 + 1) = x + y = c
    Then the iteration j is finished.
    Therefore each iteration maintains the loop invariant.

4.  Termination: we use the loop invariant and the loop termination condition to prove the correctness of the algorithm.
    When the loop terminates, x = 0.  By the loop invariant just proved, x + y = 0 + y = c.  Therefore y = c. 

    Q.E.D
