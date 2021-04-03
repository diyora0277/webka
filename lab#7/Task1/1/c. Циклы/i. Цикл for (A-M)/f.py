x = int(input())
while(x > 0):
    d = x % 10
    if(r == 1):
        r = d
    else:
        r = r*10 + d
    x = x // 10
print(r)