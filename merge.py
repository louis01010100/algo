#!/usr/bin/env python

sea_fish=['Cod', 'Herring', 'Marlin']
fresh_fish=['Asp', 'Carp', 'Ide', 'Trout']


def merge(sea_fish, fresh_fish):
    result = []

    sea_fish.sort()
    fresh_fish.sort()

    while len(sea_fish) != 0 or len(fresh_fish) != 0: 
        sea_top = None if len(sea_fish) == 0 else sea_fish[-1]
        fresh_top = None if len(fresh_fish) == 0 else fresh_fish[-1]

        if sea_top > fresh_top: 
            result.append(sea_fish.pop())
        else:
            result.append(fresh_fish.pop())

    result.reverse()
    return result



print(merge(sea_fish, fresh_fish))
