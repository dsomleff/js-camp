const account = {
    name: 'Ju Ju',
    expenses: [],
    income: [],

    addExpense(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary() {
        // advanced solution 
        // return this.expenses.reduce((prev, cur) => prev + cur.amount, 0)

        let totalExpenses = 0
        this.expenses.forEach((expense) => {
            totalExpenses = totalExpenses + expense.amount
        })

        let totalIncome = 0
        this.income.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        let accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addExpense('Rent', 600)
account.addExpense('Coffee', 5)
account.addExpense('Food', 40)
account.addIncome('Job', 1200)

console.log(account.getAccountSummary());
