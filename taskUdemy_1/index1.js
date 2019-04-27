var money = prompt("budget per month");
var time = prompt("input date YYYY-MM-DD");
//let quest1 = prompt("enter the required articie of expenditure in this month");
//let quest2 = prompt("how much it will cost"); 
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            var quest1 = prompt("enter the required article of expenditure in this month"),
                quest2 = +prompt("how much it will cost");
                if ( (typeof(quest1)) != null
                 && (typeof(quest2)) != null && quest1 != '' && quest2 != '' && (!isNaN(quest2) )) {

                appData.expenses[quest1] = quest2;

                } else {
                    alert('enter correct value');
                    i = i - 1;
                }
            }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        console.log(appData);
        alert('budget per one day: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ('low level abundance');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
            console.log('midle level abundance');
        } else if (appData.moneyPerDay > 2000) {
            console.log('high level abudence');
        } else {
            console.log('error done');
        }
    },
    checkSavings: function() {
        if (appData.saving == true) {
            let save = +prompt('how much is your deposit',''),
               percent = +prompt('what is your interest');
    
          appData.monthIncome = save/100/12*percent;
          alert ('profit from your deposit: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
    for (let i = 1; i < 3; i++) {
    let opt = prompt('article unnecessary expenditures?', '');
    appData.optionalExpenses[i] = opt;
    }
    },
    chooseIncome: function() {
        do {
        var items = prompt('which will bring additional income? (list by comma)', '');
        }while (items == null || items == '');
        
        appData.income = items.split(', ');
        appData.income.push(prompt('anything else?', ''));
        appData.income.sort();
        appData.income.forEach(function(item, i, income ) {
           if (i > 0) {
               alert(i+':' + item);
           }
        })
    }
};
let list = [];
for (let key in appData) {
    list.push(key);
}
console.log('our programe including data: ' + list);
