class Account:
    def __init__(self, owner, account_number, balance):
        self.owner = owner
        self.account_number = account_number
        self._balance = balance
        self.history = []

    def deposit(self, amount):
        self._balance += amount
        self.history.append(('deposit', amount))
        return f"Deposited {amount}"

    def withdraw(self, amount):
        if amount > self._balance:
            return "Insufficient balance"
        self._balance -= amount
        self.history.append(('withdraw', amount))
        return f"Withdrew {amount}"
        
    @property
    def statement(self):
        return f'Standard Account - {self.owner} balance: {self._balance}'

    def undo_last(self):
        if not self.history:
            return "No transactions to undo"
        
        last_action, amount = self.history.pop()
        
        if last_action in ['deposit', 'interest']:
            self._balance -= amount
        elif last_action == 'withdraw':
            self._balance += amount
            
        return f"Successfully undid {last_action} of {amount}. New balance: {self._balance}"

    def total_transactions(self, index=0):
        if index == len(self.history):
            return 0
        
        _, amount = self.history[index]
        return amount + self.total_transactions(index + 1)


class SavingsAccount(Account):
    def __init__(self, owner, account_number, balance, rate):
        super().__init__(owner, account_number, balance)
        self.rate = rate
        
    def add_interest(self):
        interest = self._balance * self.rate
        self._balance += interest
        self.history.append(('interest', interest))
        return f"Added interest: {interest}"
        
    @property
    def statement(self):
        return f'Savings Account ({self.account_number}) - {self.owner} balance: {self._balance}'


class CurrentAccount(Account):
    def __init__(self, owner, account_number, balance, overdraft):
        super().__init__(owner, account_number, balance)
        self.overdraft = overdraft
        
    def withdraw(self, amount):
        if amount > (self._balance + self.overdraft):
            return "Insufficient balance (exceeds overdraft limit)"
        self._balance -= amount
        self.history.append(('withdraw', amount))
        return f"Withdrew {amount}"
        
    @property
    def statement(self):
        return f'Current Account ({self.account_number}) - {self.owner} balance: {self._balance}'


class AccountRegistry:
    def __init__(self):
        self.accounts = {}

    def add(self, account):
        self.accounts[account.account_number] = account

    def find(self, account_number):
        return self.accounts.get(account_number, None)

    def list_all(self):
        return [self.accounts[acc_num] for acc_num in sorted(self.accounts.keys())]


if __name__ == "__main__":
    registry = AccountRegistry()
    
    acc1 = Account("Sara", 101, 5000)
    acc2 = SavingsAccount("Abebe", 102, 12000, 0.05)
    acc3 = CurrentAccount("Chala", 105, 3000, 500)
    
    registry.add(acc1)
    registry.add(acc2)
    registry.add(acc3)
    
    acc1.deposit(1000)
    acc1.withdraw(500)
    print(acc1.statement)
    print(acc1.undo_last())
    print(acc1.statement)

    print("\n Listing All Accounts")
    for acc in registry.list_all():
        print(acc.statement)