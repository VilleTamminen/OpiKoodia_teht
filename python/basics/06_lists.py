def main():
    mylist = ["apple","orange","banana","apple"]
    print(mylist)

    mylist.append("carrot")
    print(mylist)
    mylist_copy = mylist.copy()
    mylist.extend(mylist_copy)
    print(mylist)
    mylice = mylist[:3]
    print(mylice)

    mytuple = ("apple","orange","banana","apple")
    print(mytuple)

    mydict = {
        "brand":"Gigabyte",
        "model":"flat",
        "screen":17.4
    }
    print(mydict)
    print("brand:",mydict["brand"])
    for key in mydict:
        print(key)
    for value in mydict.values():
        print(value)

    #setissä on random järjestys
    myset = {"apple","orange","banana","apple",1,2,3}
    print(myset)
    myset.add(100)
    print(myset)


if __name__ == "__main__":
    main()
    