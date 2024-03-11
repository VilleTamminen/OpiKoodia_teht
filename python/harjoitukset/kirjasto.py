
def main():
    print("start")
    library = Library()

    booklista= [ (0,"Dune","Frank Herbert",800,"sci-fi",True),
    (1,"Dune Messias","Frank Herbert",600,"sci-fi",False),
    (2,"One Piece","Eichiro Oda",100,"adventure",True),
    (3,"Berserk","Kentarou Miura",300,"fantasy",True),
    (4,"Magi","Ohtako Shinobu",800,"fantasy",False),
    (5,"Kingdom","Haru Yasuhisa",500,"historical",False) ]

   # for book in booklista:
    #    print(book[1],book[2],book[3],book[4],book[5])

   # print(library.booklist)
    library.sorting(0)
   # Library.sorting(library,0)
   # Library.sorting(library,1)
    """
    stopLibrary = False
    while stopLibrary == False:
        
        user_input = input("1=borrow book, 2=return book, 3=see available books, 4=see books that are borrowed, q=quit \n")
        match user_input:
            case 1:
                print("hello")
                book_id = input("Borrow book id?")
                library.borrowBook(book_id)
            case 2:
                print("hello")
                book_id = input("Return book id?")
                library.returnBook(book_id)
            case 3: 
                print("hello")
                library.sorting(0)
            case 4:
                print("hello")
                library.sorting(1)   
            case 5:
                print("quitting...")
                stopLibrary = True
                break
        
    else:
        print("done")  
        
    """  

class Book():
    isBorrowed=True
    def __init__(self,id,name,author,pages,genre,isBorrowed):
        self.id=id,
        self.name=name,
        self.author=author,
        self.pages=pages,
        self.genre=genre,
        self.isBorrowed=isBorrowed

    def info(self):
        return self.id,self.name,self.author,self.pages,self.genre,self.isBorrowed

       
    

class Library():
   # booklist=[]
    def __init__(self, booklist = None):
        if booklist == None:
            #Ei TOIMI JOS ON BOOK, ei pysty printtaamaan kauniisti tai ollenkaan
            b1 = (0,"Dune","Frank Herbert",800,"sci-fi",False)
            b2 = (1,"Dune Messias","Frank Herbert",600,"sci-fi",False)
            b3 = (2,"One Piece","Eichiro Oda",100,"adventure",True)
            b4 = (3,"Berserk","Kentarou Miura",300,"fantasy",True)
            b5 = (4,"Magi","Ohtako Shinobu",800,"fantasy",False)
            b6 = (5,"Kingdom","Haru Yasuhisa",500,"historical",False)
            self.booklist=[b1,b2,b3,b4,b5,b6]
        else:
            self.booklist=booklist

    def sorting(self, x):
        if(x==0):
            print("available books")
          #  print(Library.booklist.sort(key=Book.isBorrowed))

            for book in self.booklist:
               # print(book[0].name, book[0].author, book[0].pages, book[0].genre, book[0].isBorrowed)
               # print(book[0].info(), end=" ", sep = ' ')
               # print(book.name,book.author,book.pages,book.genre,book.isBorrowed)
                #",".join([str(s) for s in list(k)])
               # print(book[0],book[1],book[2])
                print(book[0], book[1], book[2],book[3],book[4],book[5])
        
        elif x==1:
            print("borrowed books")
           # print(Library.booklist.sort(isBorrowed=True))
 
    def borrowBook(book_id):
        print("borrowed books")
        Library.booklist[book_id].isBorrowed = True

    def returnBook(book_id):
        print("available books")
        Library.booklist[book_id].isBorrowed = False


if __name__ == "__main__":
    main()
