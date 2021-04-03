n = input()
number = 0
k = 0
for i in n:
    number += int(i) * (2**(len(n) - 1 - k))
    k += 1
print(number)