def returnFactorial(n):
    result = 1
    for i in range(1, n + 1):
        result = result * i  
    return result
print(returnFactorial(5))
print(returnFactorial(6))  
print(returnFactorial(0)) 