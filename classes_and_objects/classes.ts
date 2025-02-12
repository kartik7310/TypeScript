class Person {
  name: string;
  age: number;

  // Constructor to initialize properties
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method to display information
  displayInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Creating an object (instance) of the class
const person1 = new Person("kartik", 25);
console.log(person1.displayInfo()); 5

const person2 = new Person("kartik", 30);
console.log(person2.displayInfo()); 

//another example
class BankAccount {
  public accountHolder: string;
  private balance: number;

  constructor(accountHolder: string, initialBalance: number) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public withdraw(amount: number): string {
    if (amount > this.balance) {
      return "Insufficient balance!";
    }
    this.balance -= amount;
    return `Withdrawn: ${amount}, Remaining Balance: ${this.balance}`;
  }

  public getBalance(): string {
    return `Balance: ${this.balance}`;
  }
}

const account = new BankAccount("kartik", 500);
account.deposit(200);
console.log(account.getBalance()); 
console.log(account.withdraw(800)); 
