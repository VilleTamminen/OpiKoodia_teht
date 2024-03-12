class IRingBell():
    def ringbell(self):
        pass

class Ring_Big_bell(IRingBell):
    def ringbell(self):
        print("BONG!")

class Dance():
    def dance(self):
        print("Dance!")

def isRingBell(iface):
    #check if iface is type IRingBell
    if isinstance(iface,IRingBell):
        iface.ringbell()
    else:
        print("NOT IRingBell implementation")    


def main():
    a = Ring_Big_bell()
    b = Dance()
    isRingBell(a)
    isRingBell(b)

if __name__ == "__main__":
    main()