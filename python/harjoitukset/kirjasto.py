
def main():
    print("start library")
    library = Library()

    stopLibrary = False
    while stopLibrary == False:   
        user_input = input("\nCOMMANDS: 1=borrow book, 2=return book, 3=see available books, 4=see books that are borrowed, q=quit \n")
        match user_input:
            case '1':
                book_id = input("Borrow book id?\n")
                library.borrowBook(int(book_id))
            case '2':
                book_id = input("Return book id?\n")
                library.returnBook(int(book_id))
            case '3': 
                library.sorting(0)
            case '4':
                library.sorting(1)   
            case 'q':
                print("quitting...")
                stopLibrary = True
                break
    else:
        print("done")  
        
class Book():
    def __init__(self,id,name,author,pages,genre,isBorrowed):
        self.id=id,
        self.name=name,
        self.author=author,
        self.pages=pages,
        self.genre=genre,
        self.isBorrowed=isBorrowed
        self.info = [self.id,self.name,self.author,self.pages,self.genre,self.isBorrowed]

    def __getitem__(self, item):
         return self.info[item]

   # def info(self):
    #    return self.id,self.name,self.author,self.pages,self.genre,self.isBorrowed 

class Library():
   # booklist=[]
    def __init__(self, booklist = None):
        if booklist == None:
            #Ei TOIMI JOS ON BOOK, ei pysty printtaamaan kauniisti tai ollenkaan
            """
            b1 = Book(0,"Dune","Frank Herbert",800,"sci-fi",False)
            b2 = Book(1,"Dune Messias","Frank Herbert",600,"sci-fi",False)
            b3 = Book(2,"One Piece","Eichiro Oda",100,"adventure",True)
            b4 = Book(3,"Berserk","Kentarou Miura",300,"fantasy",True)
            b5 = Book(4,"Magi","Ohtako Shinobu",800,"fantasy",False)
            b6 = Book(5,"Kingdom","Haru Yasuhisa",500,"historical",False)
            """
            #täytyy olla lista
            b1 = [0,"Dune","Frank Herbert",800,"sci-fi",False]
            b2 = [1,"Dune Messias","Frank Herbert",600,"sci-fi",False]
            b3 = [2,"One Piece","Eichiro Oda",100,"adventure",True]
            b4 = [3,"Berserk","Kentarou Miura",300,"fantasy",True]
            b5 = [4,"Magi","Ohtako Shinobu",800,"fantasy",False]
            b6 = [5,"Kingdom","Haru Yasuhisa",500,"historical",False]    

            self.booklist = [b1,b2,b3,b4,b5,b6]
        else:
            self.booklist=booklist

    def sorting(self, x):
        if(x==0):
            print("available books")
            for book in self.booklist:
                if book[5] == False:
                    print(book[0], book[1], book[2],book[3],book[4])
                    #print(book.name, book.author, book.pages, book.genre)
        elif x==1:
            print("borrowed books")
            for book in self.booklist:
                if book[5] == True:
                    print(book[0], book[1], book[2],book[3],book[4])
                 #   print(book[0].name, book[0].author, book[0].pages, book[0].genre)
                   # print(book.name, book.author, book.pages, book.genre)

 
    def borrowBook(self, book_id):
        print("borrowed book",self.booklist[book_id][5])
        self.booklist[book_id][5] = True
        #print("returned book",self.booklist[book_id].name)
       # self.booklist[book_id].isBorrowed = True

    def returnBook(self, book_id):
        print("returned book",self.booklist[book_id][5])
        self.booklist[book_id][5] = False
      #  print("returned book",self.booklist[book_id].name)
       # self.booklist[book_id].isBorrowed = False


if __name__ == "__main__":
    main()
