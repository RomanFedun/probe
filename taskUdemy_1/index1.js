let money = +prompt("budget per month");
let time = prompt("input date YYYY-MM-DD");
//let quest1 = prompt("enter the required articie of expenditure in this month");
//let quest2 = prompt("how much it will cost"); 
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

for (var i = 0; i < 2; i++) {
    var quest1 = prompt("enter the required articie of expenditure in this month"),
        quest2 = +prompt("how much it will cost");
    appData.expenses[quest1] = quest2;
    }

appData.moneyPerDay = appData.budget / 30;
console.log(appData);
alert('budget per one day: ' + appData.moneyPerDay);