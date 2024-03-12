class IRingBell():
    def ringbell(self):
        pass

class Ring_Big_Bell(IRingBell):
    def ringbell(self):
        print("BONG!")

class Ring_Small_Bell(IRingBell):
    def ringbell(self):
        print("DING!")

class Dance():
    def dance(self):
        print("Dance!")

class BellRinger():
    def __init__(self):
        self.belllist = []
    
    def addbell(self,bell):
        if isinstance(bell,IRingBell):
            self.belllist.append(bell)
        else:
            print("NOT IRingBell imterface")

    def ringbells(self):
        for bell in self.belllist:
            bell.ringbell()

def main():
    big_bell_a = Ring_Big_Bell()
    big_bell_b = Ring_Big_Bell()
    small_bell_a = Ring_Small_Bell()
    small_bell_b = Ring_Small_Bell()
    dance_a = Dance()
    dance_b = Dance()

    bellringer = BellRinger()

    bellringer.addbell(big_bell_a)
    bellringer.addbell(big_bell_b)
    bellringer.addbell(small_bell_a)
    bellringer.addbell(small_bell_b)
    bellringer.addbell(dance_a)
    bellringer.addbell(dance_b)

    bellringer.ringbells()


if __name__ == "__main__":
    main()