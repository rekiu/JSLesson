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
  monthValue = document.querySelector('.month-value'),
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

expensesItemBtn.disabled = true;
expensesItemBtn.style.background = '#656565';

optionalExpensesBtn.disabled = true;
optionalExpensesBtn.style.background = '#656565';

countBudgetBtn.disabled = true;
countBudgetBtn.style.background = '#656565';




startBtn.addEventListener('click', function () {
  Time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
  Money = +prompt('Ваш бюджет на месяц?', '');

  while (isNaN(Money) || Money == "" || Money == null) {
    Money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = Money;
  appData.timeData = Time;
  budgetValue.textContent = Money.toFixed();
  yearValue.value = new Date(Date.parse(Time)).getFullYear();
  monthValue.value = new Date(Date.parse(Time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(Time)).getDate();

  expensesItem.forEach(function (item, i, array) { 
    item.addEventListener('input', function (event) {
  
      if ((array[0].value != "" && array[1].value != "") ||
        (array[2].value != "" && array[3].value != "")) {
        expensesItemBtn.disabled = false;
        expensesItemBtn.style.background = '';
      } else {
        expensesItemBtn.disabled = true;
        expensesItemBtn.style.background = '#656565';
      }
    });
  }); 
  
  optionalExpenseItem.forEach(function (item) {
    item.addEventListener('input', function () {
  
      if ((item.value != "")) {
        optionalExpensesBtn.disabled = false;
        optionalExpensesBtn.style.background = '';
      } else {
        optionalExpensesBtn.disabled = true;
        optionalExpensesBtn.style.background = '#656565';
      }
    });
  });


expensesItemBtn.addEventListener('click', function () {
  let sum = 0;
  countBudgetBtn.disabled = false;
  countBudgetBtn.style.background = '';

  for (let i = 0; i < expensesItem.length; i++) {
    let Costs = expensesItem[i].value,
      Price = expensesItem[++i].value;

    if ((typeof (Costs)) === 'string' && Costs != null &&
      Price != null &&
      Costs != '' && Price != '' && Costs.length < 50) {
      console.log("Всё верно");
      appData.expenses[Costs] = Price;
      sum += +Price;
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalExpenseItem.length; i++) {
    let Costs = optionalExpenseItem[i].value;
    if ((typeof (Costs) === 'string') && Costs != null &&
      Costs != '' && Costs.length < 50) {
      appData.optionalExpenses[i] = Costs;
      optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
      }
  }
});

countBudgetBtn.addEventListener('click', function () { 
  if (appData.budget != undefined && expensesValue.textContent != "") {
    appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed(2); /// заметка
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка';
  }
});

income.addEventListener('input', function () {
  let items = income.value;
  appData.income = items.split(', ');
  incomValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});
});//startBtn