def getOnlyEvens(lst):
    result = [num for i, num in enumerate(lst) if i % 2 == 0 and num % 2 == 0]
    print(result)

getOnlyEvens ([1, 2, 3, 6, 4, 8])
getOnlyEvens ([0, 1, 2, 3, 4])