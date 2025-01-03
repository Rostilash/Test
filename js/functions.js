// function greet(){
	// console.log('Hello');
// }
// greet();

// function fn1(){
	// const a = 5;
	// console.log(a);
// }
// fn1();

// function fName(){
	// let firstName = "Rostik";
	// let lastName = "Rusveld";
	// let age = 30;
	// console.log(` Привіт ${firstName} ${lastName}! тобі ${age} років?`);	
// }
// fName();

// function numb(){
	// let a = 1420;
	// let b = 1244;
	
	// if(a > b){
		// console.log(`Змінна а більше ніж b на ${a - b}`);
	// }else{
		// console.log(`Змінна b: більше ніж a: на ${b - a}`);
	// }
// }
// numb();

// Функція diclaration визиватися раніше а от expration працює через let або const задається параметр при якому її пере прописаною функцією не можна буде викликати.
// function fn5(){
	// console.log(`Num ${20+70}`);
// }
// fn5();	
	
	// let b = 5;
	// let c = 10;
	// let a = 7;
	// function fn12(){
		// let b = c * a;
		// b++;
		// console.log(b);
		// }
	
	// fn12(); 
	
	// function greet(name = "Ваше імя",surName = "Ваша фамілія" ) {
		// console.log(`${name} - ${surName}`);
	// }
	// greet();
	// greet("Rostik", "Barotek");

	// const fn12 = function(a1 , b1){
		// console.log(a1 + b1);
	// };
	// fn12(20, 20);
	// fn12("hello ", "Javascript");
	
	// const fn14 = function(a1, a2, a3){
		// console.log(a1 + a2 + a3);
	// };
	
	// let num1 = 150, num2 = 250;
	
	// fn14(20, num1, num2);
	
	const h1 = document.querySelector("#Jsh1");
	
	console.log(h1);
	let textWorld = "Hello World!";
	let textJS = "JavaScript";
	
	function fn16 (){
		h1.textContent = textWorld;
	}
	function fn17 (){
		h1.textContent = textJS;
	}

	h1.addEventListener("mouseover", fn16)
	h1.addEventListener("mouseout" , fn17);
	
	
	
	
	
	
	
	
	
	
	
	