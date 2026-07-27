def checkMeera(arr):
    for num in arr:
        if (num * 2) in arr:
            print("I am NOT a Meera array becouse")
            return       
    print("I am a Meera array")
checkMeera([10, 4, 0, 5]) 
checkMeera([7, 4, 9]) 
checkMeera([1, -6, 4, -3])  