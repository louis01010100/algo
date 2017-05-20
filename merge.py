#!/usr/bin/env python

sea_fish=['Cod', 'Herring', 'Marlin']
fresh_fish=['Asp', 'Carp', 'Ide', 'Trout']


def merge(sea_fish, fresh_fish):
    result = []

    while sea_fish or fresh_fish
        sea_top = sea_fish[-1] if sea_fish else None
        fresh_top = fresh_fish[-1] if fresh_fish else None

        if sea_top > fresh_top: 
            result.append(sea_fish.pop())
        else:
            result.append(fresh_fish.pop())

    result.reverse()
    return result



print(merge(sea_fish, fresh_fish))
