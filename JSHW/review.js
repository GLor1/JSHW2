var strings = 'in bed';
var fortunecookie = 
[`You will be successful ${strings}`,
`The early bird gets the worm ${strings}`,
`A foolish man listens to his heart ${strings}`,
`You will die alone and poorly dressed ${strings}`,
`Never forget a friend. Especially if they owe you ${strings}`];

var income = [10, 20, 25, 35, 50, 20, 10, 1];


console.log(fortunecookie);

var fate = true;
console.log(fate);

var greater = (100>9)
console.log(greater);

//var weekday = [day1=='Monday', day2=='Tuesday', day3=='Wednesday', day4=='Thursday', day5=='Friday'];//
//var booleantest = (day1== 'Friday');//
//console.log(booleantest);//
//didn't work//


//var age, legalageforsmokes= (age<17) ? "Too young": "Good Enough";//
//var booleantest1 = (legalageforsmokes+ 21)//

//console.log(booleantest1);//
//didn't work as planned//

console.log(income);

var math1 = (3*3);
var math2 = (6*3);
var math3 = (12*3);
var math4 = (24*3);
var equation = (math1 + math2);
var equation2 = (math3 + math4);

var ultiequation = (equation / 3);

console.log(ultiequation);
console.log(equation);

console.log(income + math1);
console.log(income + math1 + math2);
console.log(math3 == greater);

var grocery = ['milk', 'tea','cookies', 'sugar'];
console.log(grocery);

console.log(income.splice(1,2));
console.log(income.splice(2));
console.log(income.splice(1,4));
console.log(income.splice(2,1));
console.log(income.splice(5));

grocery.push('honey');
console.log(grocery);

console.log(grocery.reverse);

grocery.reverse();
console.log(grocery);

income.reverse();
console.log(income);

console.log(typeof income);
console.log(typeof grocery);
console.log(typeof math1);