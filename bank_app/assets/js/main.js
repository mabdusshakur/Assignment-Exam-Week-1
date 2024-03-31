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

}
