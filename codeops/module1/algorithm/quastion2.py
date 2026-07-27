def reverseCompare(num):
    num_str = str(num)
    reversed_str = num_str[::-1]
    reversed_num = int(reversed_str)
    if num > reversed_num:
        print("Ok")
    else:
        print("Not ok")

reverseCompare(72)  
reverseCompare(23)  
