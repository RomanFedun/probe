let money = prompt("budget per month");
let time = prompt("input date YYYY-MM-DD");
let quest1 = prompt("enter the required articie of expenditure in this month");
let quest2 = prompt("how much it will cost"); 
let appData = {
budget: money,
timeData: time,
expenses: { 
[quest1]: quest2
},
optionalExpenses: {},
income: [],
savings: false
}
console.log(appData);
alert('budget per one day: ' + money/30);