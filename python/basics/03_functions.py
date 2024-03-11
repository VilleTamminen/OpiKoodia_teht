def main():
    greet()
    add(2,4)
    subtract(7,3)
    result = find_sum(1,5,20,40,15)
    print("find_sum result is",result)
    print("Factorial is",factorial(5))


def greet():
    print("Hello world")

def add(a,b):
    result = a + b
    print("Sum is", result)

def subtract(a=0,b=0):
    result = a - b
    print("Subtraction is", result)

def find_sum(*numbers):
    result = 0

    for num in numbers:
        result = result + num

    return result

def factorial(num):
    if num == 1:
        return 1
    else:
        return (num * factorial(num - 1))


if __name__ == "__main__":
    main()
    