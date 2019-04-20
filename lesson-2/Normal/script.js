function main() {
'use strict';

let Money = +prompt('Ваш бюджет на месяц?', ''),
    Time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
  
let appData = {
  budget: Money,
  timeData: Time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

/*let i=0;
do {
  i++;
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
while (i<2);*/


/*let i=0;
while (i<2) {
  let Costs = prompt('Введите обязательную статью расходов в этом месяце', ''),
      Price = prompt('Во сколько обойдется?', '');
   
 if ( (typeof(Costs))==='string' && (typeof(Costs)) !=null 
      && (typeof(Price)) !=null
      && Costs != '' && Price != '' && Costs.length <50) {
      console.log("done");
    appData.expenses[Costs] = Price;
      } else {
      i--;
      }i++; } */


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

appData.moneyPerDay = appData.budget/30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}

console.log(appData);

}
main(); 