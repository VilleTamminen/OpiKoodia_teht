#Arvataan numeroa 1-100 väliltä. Peli laskee arvausten määrän. 
#Arvauksen jälkeen peli ilmoittaa, että oliko arvaus liian suuri vai liian pieni.
import random

def main():
    number = newGame()
    minNum = 1
    maxNum = 100

    while True:
        print("Guess number between",minNum,"-",maxNum,"n=new game, q=quit\n")
        user_input = input("Your guess:")   
        if user_input =='n':
            number = newGame()
            minNum = 1
            maxNum = 100
            continue
        if user_input == 'q':
            quitGame()
            break
        if user_input.isnumeric() == True:
            user_input = int(user_input)
            if user_input < minNum:
                print("GUESS MUST BE HIGHER THAN",minNum)
                continue
            if user_input > maxNum:
                print("GUESS MUST BE LOWER THAN",maxNum)
                continue
            if user_input == number:
                wonGame(number)
                number = newGame()
                minNum = 1
                maxNum = 100
            if user_input < number:
                minNum = user_input
                print("Guess higher number")
                continue
            if user_input > number:
                maxNum = user_input
                print("Guess lower number")
                continue
        else:
            print("weird input. try again")
            continue
        break

def newGame():
    print("starting new game")
    num = random.randrange(1,100)
    return num

def quitGame():
    print("Game ended")

def wonGame(number):
    print("YOU WIN. The number was",number)

if __name__=="__main__":
    main()

