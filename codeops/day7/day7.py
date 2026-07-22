def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1


if __name__ == "__main__":
    numbers = [1, 22, 37, 38, 41, 71, 93, 76, 80]
    target_value = (93)

    result = binary_search(numbers, target_value)

    if result != -1:
        print(f"Found {target_value} at index {result}")
    else:
        print(f"{target_value} not found in the list")