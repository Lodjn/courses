// №1
var testObject = {
    'Петр': randomInteger(500, 50000),
    'Иван': randomInteger(500, 50000),
    'Николай': randomInteger(500, 50000),
    'Федор': randomInteger(500, 50000)
};
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
var max_salary = 0,
    worker_with_max_salary = '';
for (key in testObject) {
    if(testObject[key] > max_salary) {
        worker_with_max_salary = key;
        max_salary = testObject[key];
    }
}
console.log(worker_with_max_salary + ":" + testObject[worker_with_max_salary]);
var salary_sum = 0;
for (key in testObject) {
    salary_sum += testObject[key];
}
console.log('Сумма всех зарплат: ' + salary_sum);
function salaryPlusTen(workers) {
    for (key in workers) {
        workers[key] = 1.1 * workers[key];
    }
    return(workers);
}
console.log(salaryPlusTen(testObject))
// №2
var userCount = {
    count: 0,
    up: function() {
        this.count++;
    },
    down: function() {
        this.count--;
    },
    showCount: function() {
        console.log(this.count);
    }
}
// №3
var food = {
    calc: function(proteins, fats, carbs) {
        let sum = proteins + fats + carbs;
        console.log("Белки: " + proteins/sum*100 + "; Жиры: " + fats/sum*100 + "; Углеводы: " + carbs/sum*100)
    },
    time: function(time) {
        if(time > 18 || time < 6) {
            console.log("Кушать нельзя!");
        } else {
            console.log("Кушать можно")
        }
    }
}
// №4
function splitToDigits(number) {
    var digits = [];
    while (number) {
      digits.push(number % 10);
      number = Math.floor(number/10);
    }
    var digitObject = {
        "Сотни": digits[2],
        "Десятки": digits[1],
        "Единицы": digits[0]
    }
    console.log(digitObject);
}