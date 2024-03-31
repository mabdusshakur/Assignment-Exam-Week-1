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
