let myAccount = {
    name: 'Ju-Ju',
    expenses: 0,
    income: 0
}

let addExpense = (account, amount) => {
   account.expenses = account.expenses + amount
}

let addIncome = (account, income) => {
    account.income = account.income + income
}

let resetAccount = (account) => {
    account.expenses = 0,
    account.income = 0
}

let getAccountSummary = (account) => {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expense.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount)
console.log(getAccountSummary(myAccount));
