function main() {
'use strict';

let Money = prompt('Ваш бюджет на месяц?', '1000'),
  MoneyTwo = Money/30,
  Time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD'),
  Costs = prompt('Введите обязательную статью расходов в этом месяце', '500'),
  Price = prompt('Во сколько обойдется?', '250'),
  SubCosts = prompt('Введите обязательную статью расходов в этом месяце', '500'),
  SubPrice = prompt('Во сколько обойдется?', '250');
let appData = {
  budget: MoneyTwo,
  timeData: Time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

appData.expenses[Costs] = Price;
appData.expenses[SubCosts] = SubPrice;

console.log(appData);

alert('Бюджет на 1 день ' + MoneyTwo + ' условных единиц');

}

main();