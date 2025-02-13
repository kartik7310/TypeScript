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
console.log(person1.displayInfo());
5;

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

//! Basic class
// class Department {
//     name: string;
//     constructor(n: string) {
//         this.name = n;
//     }
//     describe(this:Department){
//         console.log("Department",  this.name);
//     }
// }

// const accounting = new Department("Accounting");
// accounting.describe();

// const accountingCopy = {
//     name:"Dummy",
//     describe : accounting.describe
// }
// accountingCopy.describe();

// private, public access modyfiers
// class Department {
//     // public name: string;
//     // private employees: string[];
//     constructor(public name: string, private employees: string[]) { //  shorthand
//         // this.name = n;
//         // this.employees = [];
//     }
//     describe(this: Department) {
//         console.log("Department", this.name);
//     }

//     addEmployee(emp: string) {
//         this.employees.push(emp);
//     }
//     printEmployeeInformation(){
//         console.log('Number of emp: ', this.employees.length);
//         console.log(this.employees);
//     }
// }

// const accounting = new Department("Accounting", []);
// accounting.describe();

// accounting.addEmployee("kartik");
// accounting.addEmployee("kunal");

// accounting.printEmployeeInformation();

// // accounting.employees = ["xyz"];
// accounting.printEmployeeInformation();

//! readonly
// class Department {
//     public name: string;
//     private employees: string[];
//     private readonly id : string;
//     constructor(n: string) { //  shorthand
//         this.name = n;
//         this.id = "d1"; // only once you can initialize
//         this.employees = [];
//     }
//     describe(this: Department) {
//         // this.id = "d2";
//         console.log("Department", this.name);
//     }

//     addEmployee(emp: string) {
//         this.employees.push(emp);
//     }
//     printEmployeeInformation() {
//         console.log('Number of emp: ', this.employees.length);
//         console.log(this.employees);
//     }
// }


//! Inheritence
//! Override properties & protected access modifier
//! setter & getter method
class Department {
  public name: string;
  protected employees: string[];
  private readonly id: string;
  constructor(id: string, n: string) {
    //  shorthand
    this.name = n;
    this.id = id; // only once you can initialize
    this.employees = [];
  }
  describe(this: Department) {
    console.log(`Department (${this.id}), ${this.name}`);
  }

  addEmployee(emp: string) {
    this.employees.push(emp);
  }
  printEmployeeInformation() {
    console.log("Number of emp: ", this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  // reports : string[] = [];
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReports(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }

  addEmployee(emp: string): void {
    if (emp === "kartik") {
      return;
    }
    this.employees.push(emp);
  }

  get getReports() {
    if (this.reports.length > 0) {
      return this.reports;
    }
    throw new Error("Report not found.");
  }
  set setReports(value: string) {
    if (!value) {
      throw new Error("Please pass valid value.");
    }
    this.reports.push(value);
  }
}

const accDep = new AccountingDepartment("d1", []);
accDep.addReports("Bugs");
// accDep.printReports();
// accDep.describe();

accDep.addEmployee("");
accDep.addEmployee("");
// accDep.printEmployeeInformation();

// setter & getter
console.log("getter -> ", accDep.getReports);
accDep.setReports = "Code review error";
console.log("getter -> ", accDep.getReports);

//! static method

class Department2 {
  public name: string;
  protected employees: string[];
  private readonly id: string;
  constructor(id: string, n: string) {
    //  shorthand
    this.name = n;
    this.id = id; // only once you can initialize
    this.employees = [];
  }
  describe(this: Department2): void {
    console.log(`Department (${this.id}), ${this.name}`);
  }

  addEmployee(emp: string) {
    this.employees.push(emp);
  }
  printEmployeeInformation() {
    console.log("Number of emp: ", this.employees.length);
    console.log(this.employees);
  }

  static getSalary() {
    return { salary: 500000 };
  }
}

const salary = Department2.getSalary(); //  without creating object, we can access by its class name
console.log(salary);

//! abstract classes

abstract class Department3 {
  name: string;
  protected employees: string[] = [];
  protected readonly id: string;

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }
  abstract describe(this: Department3): void;
  abstract displayName(): void;
}

class Subclass extends Department3 {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  describe(): void {
    console.log("Department", this.id);
  }
  displayName(): void {
    console.log(this.name);
  }
}
const subClass = new Subclass("D1", []);
subClass.describe();
