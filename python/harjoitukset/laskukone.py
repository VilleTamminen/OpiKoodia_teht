#Laskukone

def main():
    
    user_number1 = float(input("Give a number:"))
    while True:
        operation = input("Choose operation: 1=sum 2=subtract 3=multiply 4=divide bye=final result ")
        if operation == "bye":
            result(user_number1)
            break
        user_number2 = float(input("Give another number:"))
        match operation:
            case '1':
                user_number1 = sum(user_number1,user_number2)
            case '2':
                user_number1 = subtraction(user_number1,user_number2)
            case '3':
                user_number1 = multiply(user_number1,user_number2)
            case '4':
                user_number1 = division(user_number1,user_number2)
        print("total:",user_number1)

def sum(a,b):
    print(a+b)
    return a+b

def subtraction(a,b):
    return a-b

def multiply(a,b):
    return a*b

def division(a,b):
    return a/b

def result(result):
    print("final result:",result)

if __name__=="__main__":
    main()