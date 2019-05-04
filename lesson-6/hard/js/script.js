'use strict'; 

let startBtn = document.getElementById('start'),

  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

  expensesItem = document.querySelectorAll('.expenses-item'); 

 

let expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBudgetBtn = document.getElementsByTagName('button')[2];  

let optionalExpenseItem = document.querySelectorAll('.optionalexpenses-item'),

  income = document.getElementById('income'),
  checkSavings = document.getElementById('savings'),
  sumValue = document.getElementById('sum'),
  percentValue = document.getElementById('percent'),

  yearValue = document.querySelector('.year-value'),
  montValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');

 
let Money, Time;



let appData = {
  budget: Money,
  timeData: Time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

/*if (appData.budget == undefined){      
  expensesItemBtn.disabled = true; 
  optionalExpensesBtn.disabled = true;
  countBudgetBtn.disabled = true;
}*/

expensesItemBtn.disabled = true;
expensesItemBtn.style.background = '#656565';

optionalExpensesBtn.disabled = true;
optionalExpensesBtn.style.background = '#656565';

countBudgetBtn.disabled = true;
countBudgetBtn.style.background = '#656565';

startBtn.addEventListener('click', function() {
  Time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
  Money = +prompt('Ваш бюджет на месяц?', '');
  
  while(isNaN(Money) || Money == "" || Money == null) {
    Money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = Money;
  appData.timeData = Time;
  budgetValue.textContent = Money.toFixed();
  yearSavingsValue.value = new Date(Date.parse(Time)).getFullYear();
  monthSavingsValue.value = new Date(Date(Time)).getMonth() + 1;
  dayValue.value = new Date(Date(Time)). getDate();

  /*if (appData.budget != undefined) {     
    countBudgetBtn.disabled = false;
  }*/

  expensesItemBtn.disabled = false;
  expensesItemBtn.style.background = '';

  optionalExpensesBtn.disabled = false;
  optionalExpensesBtn.style.background = '';

  countBudgetBtn.disabled = false;
  countBudgetBtn.style.background = '';
});


expensesItemBtn.addEventListener('click', function() {
  let sum = 0;

  for (let i=0; i<expensesItem.length; i++) {
        let Costs = expensesItem[i].value,
        Price = expensesItem[++i].value;
     
   if ( (typeof(Costs))==='string' && (typeof(Costs)) !=null 
        && (typeof(Price)) !=null
        && Costs != '' && Price != '' && Costs.length <50) {
        console.log("Всё верно");
      appData.expenses[Costs] = Price;
      sum += +Price;
    } else {
      i--;
    }     
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
  for (let i = 0; i<optionalExpenseItem.length; i++) {
    let Costs = optionalExpenseItem[i].value;
    if ((typeof (Costs) === 'string') && (typeof (Costs) != null) 
    && (Costs != '') && Costs.length < 50) {
      appData.optionalExpenses[i] = Costs; 
      optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    } else {
      i--;
    } 
  }
});


countBudgetBtn.addEventListener('click', function() {  //вот тут свериться
if(appData.budget != undefined && expensesValue.textContent != "") {
  appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed(2); /// заметка
  dayBudgetValue.textContent = appData.moneyPerDay;
  
  if(appData.moneyPerDay < 100) {
    levelValue.textContent = "Минимальный уровень достатка";
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    levelValue.textContent = "Средний уровень достатка";
  } else if (appData.moneyPerDay > 2000) {
    levelValue.textContent = "Высокий уровень достатка";
  } else {
    levelValue.textContent = "Произошла ошибка";
  }
}else {
  dayBudgetValue.textContent = 'Произошла ошибка';
  } 
});

income.addEventListener('input', function() {    
  let items = income.value;
  appData.income = items.split(', ');
  incomValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
  if (appData.savings == true) {
    appData.savings = false;
  }else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function() {
  if (appData.savings == true) {
  let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});
  