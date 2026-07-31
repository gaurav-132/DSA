from array import *

print("Enter the length of the array: ")
length = int(input());

arr = array('i', [])
print("Enter the elements of the array: ")  

for i in range(length):
    arr.append(int(input()));

print("The elements of the array are: ")
for i in range(length):
    print(arr[i], end=" ")


num  = arr.index(2)

print("\nThe index of 2 in the array is: ", num)