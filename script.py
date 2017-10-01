#!/usr/bin/env python

memo = {}


def algo():
    n = 100
    print(fib(n))


def fib2(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)


def fib(n):
    if n in memo:
        return memo[n]

    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        memo[n] = fib(n - 1) + fib(n - 2)
        return memo[n]


def fact2(n):
    if n == 0:
        return 1
    else:
        return n * fact2(n - 1)


def fact(n):
    result = 1
    index = 1

    while index <= n:
        result *= index
        index += 1

    return result


if __name__ == '__main__':
    algo()
