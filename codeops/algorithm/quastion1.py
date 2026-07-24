def getOnlyEvens(lst):
    result = [num for idx, num in enumerate(lst) if idx % 2 == 0 and num % 2 == 0]
    print(result)

getOnlyEvens ([1, 2, 3, 6, 4, 8])
getOnlyEvens ([0, 1, 2, 3, 4])