function main() {
'use strict'; 

let Money, Time;

function start() {
  Money = +prompt('Ваш бюджет на месяц?', '');
  Time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

  while(isNaN(Money) || Money == "" || Money == null) {
    Money = +prompt('Ваш бюджет на месяц?', '');
  }
}

start();
  
let appData = {
  budget: Money,
  timeData: Time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
  for (let i=0; i<2; i++) {
    let Costs = prompt('Введите обязательную статью расходов в этом месяце', ''),
        Price = prompt('Во сколько обойдется?', '');
     
   if ( (typeof(Costs))==='string' && (typeof(Costs)) !=null 
        && (typeof(Price)) !=null
        && Costs != '' && Price != '' && Costs.length <50) {
        console.log("done");
      appData.expenses[Costs] = Price;
        } else {
        i--;
    }  
  }
}

chooseExpenses();

function chooseOptExpenses() {
  for (let i = 1; i<4; i++) {
    let Costs = prompt('Статья необязательных расходов', '');
    if ((typeof (Costs) === 'string') && (typeof (Costs) != null) 
    && (Costs != '') && Costs.length < 50) {
      appData.optionalExpenses = Costs; 
    } else {
      appData.optionalExpenses = "Необязательная статья расходов";
    }
  }
}

chooseOptExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed(2);
  
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
if(appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}
}

detectLevel();

console.log(appData);

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed(2));    
  }
}

checkSavings();

console.log(appData);


}
main(); 