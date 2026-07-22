
class account:
    def __init__(self, owner, balance):
        self.owner=owner
        self.__balance=balance
    def deposite(self, amount):
        self.__balance += amount
    def withdrow(self, amount):
        if amount >self.__balance:
            return ("insufficient balance")
        self.__balance -= amount
        return f'you withdrowed{amount}'
    @property
    def stetment(self):
        return f'balance {self.__balance}'    

acc1= account ("sara", 12000)
print(acc1.stetment)

