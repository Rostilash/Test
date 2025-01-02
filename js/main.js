// alert (" Hello World! ");
//let name = "Roland";
//let age = 34;
//let myColor = "black";
//console.log(name + " " + age+ " " + myColor);

/* let num1 =10;
let num2 =5;
console.log(num1+num2-num2/num2); */

// const page1 = 50;
// const page2 = 150;
// const result = `Сума чисел: ${page1} та ${page2} буде дорівнювати ${page1 + page2}.
// А якщо ми ${page2} розділемо на 2 то у нас вийде ${page2/2} `;
// console.log(result);

// let day = (1000*60*60*24);	
// let hour = (5*60*60*1000);
// let result = day - hour;
// let inHour = result / (1000 * 60 * 60);
// let result2 = `в день ми баємо стільки мілісекунд ${day}, але якщо відняти 5 годин і перевести в години, у нас вийде стільки годин ${inHour}`;
// let half = day - (12 * 60 * 60 * 1000);
// let inkrement = half / (1000 * 60 * 60);
// console.log('Стільки мілісекунд в годіні ' + day);
// console.log(result2);
// console.log('Спроба на інкремент ' + ++inkrement);

// Оператори порівняння !=
// порівнює по значеню
// console.log ( 1 ==  '1');
// тип і значення
// console.log ( 1 === '1'); 
// не дорінює 
// console.log ( 2 != 1 );
// не дорівню 
// console.log ( 2 !== 2);

// Логічний оператор (&& і)
// послідовно порівнює інформацію і якщо видає false то воно закриває логічну послідновність
// console.log ( 1 && 1 && 2 );
// console.log ( 1 && 0 && 3 && 1);


// Логічний оператор || або
// console.log (false || 2 || false);

// Логічний оператор ! НІ

// console.log ( !true );
// console.log ( !true || 10 || "time");
// console.log ( !!true );

// Оператори "присвоєння"

// let x;
// x=5;
// console.log(x);
// let y = 10;
// y = y + 5;
// console.log(y);

// let counter = 0; 
// counter += 1
// counter++;
// console.log(counter);


// let counter1 = 10;
// counter1--;
// counter1 -= 5;
// console.log(counter1);

// let num = 5;
// num *=5;
// num /=2;
// num**= 2;
// console.log(num);

// let age, city = 'london', number = 500;

// console.log(age);
// console.log(city);
// console.log(number);

// console.log(age, city, number);

// if (2 > 1) {
	// console.log("Правда");
	// }else{
		// console.log("Error");
	// }

	// let num = 1;
	// if(num > 2){
		// console.log('Число більше 2');
	// }else if(num > 0) {
		// console.log("число більше 0");
	// }else{
	 // console.log('Помилка');
	// }
	
	// let num = 7;
	// console.log(7 % 2);
	// if (num > 0 && num % 2 === 0){
		// console.log('Парне');
	// } else if (num > 0 && num % 2 !== 0){
		// console.log('Число позетивне та непарне');
	// } else if ( num < 0 && num % 2 === 0){
		// console.log('число негативне і парне');
	// } else {
		// console.log('Помилка');
	// }
	
	// let x;
	// if(x){
		// console.log('Змінна х має значення');
	// }else {
		// console.log('Змінна х не має значення');
	// }
	
	// Тести над кнопкою
	let score = 0;
	let button = document.querySelector('.btm');
	let spanB = document.querySelector('#bsp');
	
	button.addEventListener('click', () => {
		score++;
		spanB.textContent = score;
		
		if (spanB.textContent == "3"){
			spanB.textContent = "О, ну досить мене тицькати!!!"
			score = 0;
		}else if(score != "3") {
			spanB.textContent = "Давай ще!";			
		}else {
			spanB.textContent = "О щось пішло не то!";	
		}
	})

// let a = 10;
// let b = 20;

// if (a < b) {
	// console.log(`Число ${a} меньше за ${b}`);
// }	else if(a > b){
	// console.log(`Число ${a} більше за ${b}`);
// }else{g}
	
	// Тернарний Оператор!
	
// sconsole.log(2 > 1 ? alert('True') : console.log('False'));
// let result = 20 < 50 ? console.log("Меньше") : console.log("Більше");

// let age1 = 25;
// let age2 = 29;

// let oldAge = age1 > age2 ? age1 : age2;

// console.log(`Йому ${oldAge} років`);	
	// Оператор світч
	
	// let day = 2;
	// let dayWeek;
	
	// switch(day){
		// case 0:
		 // dayWeek = "Неділя";
		 // break;
		// case 1:
		 // dayWeek = "Понеділок";
		 // break;
		// case 2:
		 // dayWeek = "Вівторок";
		 // break;
		// case 3:
		 // dayWeek = "Середа";
		 // break;	
		// case 4:
		 // dayWeek = "Четверг";
		 // break;
		// case 5:
		 // dayWeek = "Пятниця";
		 // break;	
		// case 6:
		 // dayWeek = "Субота";
		 // break;
	// default:
	// dayWeek = "Такого дня мені не знайти";
	// }
			
	// console.log(`Сьогодні: ${dayWeek}`);
	
	
/* 	Цикл for
	Цикл While
	Цикл do while
	
	Цикл for in
	Цикл for of
	Цикл forEach
	 */
	
	// for(let i = 0; i < 5; i++) {
		// console.log(i);
	// }
	
	// let res = 0;
		// for(let i = 0; i <= 3; i++) {
		// res = res + i;
		// console.log(i);
	// }
		// console.log(res);
	
	
	
	
	