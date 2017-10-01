#!/usr/bin/env python

def merge(p, q):
    result = List.new
    if not (p.empty and q.empty )
        if p.empty
            i = 0
            while i < q.size:
                result.append(q[i])
                i++
        elif q.empty
            i = 0
            while i < p.size:
                result.append(p[i])
                i++
        else:
            if p.peek < q.peek:
                result.append(p.pop)
            else 
                result.append(q.pop)

    return result
