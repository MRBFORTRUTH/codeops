class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self._balance = balance
        
    def deposit(self, amount):
        self._balance += amount
        
    def withdraw(self, amount):
        if amount > self._balance:
            return "insufficient balance"
        self._balance -= amount
        return f'you withdrew {amount}'
        
    @property
    def statement(self):
        return f'Standard Account - {self.owner} balance: {self._balance}'

class SavingsAccount(Account):
    def __init__(self, owner, balance, rate):
        super().__init__(owner, balance)
        self.rate = rate
        
    def add_interest(self):
        interest = self._balance * self.rate
        self._balance += interest
        return f"Added interest: {interest}"
        
    @property
    def statement(self):
        return f'Savings Account - {self.owner} balance: {self._balance}'

class CurrentAccount(Account):
    def __init__(self, owner, balance, overdraft):
        super().__init__(owner, balance)
        self.overdraft = overdraft
        
    def withdraw(self, amount):
        if amount > (self._balance + self.overdraft):
            return "insufficient balance (exceeds overdraft limit)"
        self._balance -= amount
        return f'you withdrew {amount}'
        
    @property
    def statement(self):
        return f'Current Account - {self.owner} balance: {self._balance}'

if __name__ == "__main__":
    acc1 = Account("Sara", 12000)
    acc2 = SavingsAccount("Abebe", 5000, 0.05)
    acc3 = CurrentAccount("Chala", 1000, 500)
    
    my_accounts = [acc1, acc2, acc3]
    
    for account in my_accounts:
        print(account.statement)