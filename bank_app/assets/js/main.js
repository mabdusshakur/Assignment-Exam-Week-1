class BankAccount {
    constructor(uid, ownerName, balance) {
        this.uid = uid;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance < amount) {
            console.log("Insufficient funds");
            return;
        }
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(
            `Account UID : ${this.uid} \nOwner : ${this.ownerName} \nBalance : ${this.balance}`
        );
    }
}

// Creating instances of BankAccount
const bankAccount_1 = new BankAccount(1111, "M Abdus Shakur", 24000);
const bankAccount_2 = new BankAccount(1112, "Juwel", 42000);

// display account 1 info
console.log(">>>>>>>>>>>>>>>>>> Account 1 info <<<<<<<<<<<<<<<<<<<<<<\n\n");
bankAccount_1.displayAccountInfo();

console.log("\n");

// display account 2 info
console.log(">>>>>>>>>>>>>>>>>> Account 2 info <<<<<<<<<<<<<<<<<<<<<<\n\n");
bankAccount_2.displayAccountInfo();

console.log("\n");

// Demonstrating deposit operation on account 1
console.log(">>>>>>>>>>>>>>>>>>>> Demonstrating __deposit__ operation on {Account 1} <<<<<<<<<<<<<<<<<<<<<<<< \n\n");
console.log(`{Account 1} balance before deposit : [ ${bankAccount_1.getBalance()} ]`);

// deposit 1000 to account 1
bankAccount_1.deposit(1000);
console.log("{Account 1} Deposited [ 1000 ]");

// display account 1 new balance after deposit
console.log(`{Account 1} balance after deposit : [ ${bankAccount_1.getBalance()} ]`);

console.log("\n");

// Demonstrating withdraw operation on account 2
console.log(">>>>>>>>>>>>>>>>>>>> Demonstrating __withdraw__ operation on {Account 2} <<<<<<<<<<<<<<<<<<<<<<<< \n\n");
console.log(`{Account 2} balance before withdraw : [ ${bankAccount_2.getBalance()} ]`);

// withdraw 1000 to account 2
bankAccount_2.withdraw(1000);
console.log("{Account 2} Withdrawn [ 1000 ]");

// display account 2 new balance after withdraw
console.log(`{Account 2} balance after withdraw : [ ${bankAccount_2.getBalance()} ]`);