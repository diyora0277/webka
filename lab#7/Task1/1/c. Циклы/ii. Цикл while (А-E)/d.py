n = int(input())
number = 1
while number <= n:
    number = number * 2
number = number // 2
if number == n:
    print('YES')
else:
    print('NO')