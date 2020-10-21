/*

// P R I N T I N G

document.write("<h1>Hello World</h1>");
document.write("<hr>");
document.write("<p>This is a javascript tutorial</p>");

alert("This is an alert");
console.log("Logging to the console");

// V A R I A B L E S
/*
Names are case-sensitive and may begin with:
	Letters, $, _
After, may include
	Letters, numbers, $, _
 Convention says
 	Use camalCase for naming.


var name = "Anthony";
var occupation = 'aspiring programmer';

var age = 20;
var gpa = 2.5;

var isTall;
isTall = true;

name = "John";

document.write("Your name is " + name + ".<br>");

// C A S T I N G  &  C O N V E R T I N G

document.write(100 + Number("25") + "<br>");
document.write(100 + parseInt("50") + "<br>");
document.write(100 + parseFloat(50.99) + "<br>");

document.write("<br>");
// S T R I N G S

var str = "Hello";

document.write(str.length + "<br>");
document.write(str.charAt(0) + "<br>");
document.write(str.indexOf("llo") + "<br>");
document.write(str.indexOf("z") + "<br>");
document.write(str.substring(2) + "<br>");
document.write(str.substring(1,3) + "<br><br>");


// N U M B E R S

document.write( 2 * 3 + "<br>");
document.write( 2 ** 3 + "<br>");
document.write( 10 % 3 + "<br>");
document.write( ( 1 + 2 ) * 3 + "<br>");
document.write( 10 / 3.0 + "<br><br>");

var num = 10;
num += 100;
document.write(num + "<br>");

num++;
document.write(num + "<br><br>");

// Math calss has useful math methods
document.write( Math.pow(2, 3) + "<br>");

var userInput = window.prompt("Enter something you want to say: ");
alert("You just said: " + userInput);



// G E T T I N G  H T M L

var header = document.getElementById("myHeader");
header.style="color:blue; background:red;"
document.write(header.getAttribute("giraffe"));
header.innerHTML = "Elephant Academy";



// A R R A Y S

// var luckyNumbers = [];
var luckyNumbers = [4,8,15,16, "twenty", false];

luckyNumbers[0] = 90;
document.write(luckyNumbers[0] + "<br>");
document.write(luckyNumbers[1] + "<br>");
document.write(luckyNumbers.length);

// N Dimensional Arrays

var numberGrid = [[1, 2], [3,4 ]];
numberGrid[0][1] = 99;

document.write("<br>" + numberGrid[0][0] + "<br>");
document.write(numberGrid[0][1] + "<br>");

// A R R A Y    F U N C T I O N S

var friends = new Array();
friends.push("Sandy");
friends.push("Adam");
friends.push("Cory");
friends.push("Amber");

// friends.pop();
// friends.popAll();
document.write(friends + "<br>");
document.write(friends.indexOf("Cory") + "<br>");
document.write(friends.indexOf("Z") + "<br>");
document.write(friends.reverse() + "<br>");
document.write(friends.sort() + "<br>");

// O B J E C T S

var student = {
	name: "Jim",
	major: "Computer Science",
	age: 19,
	gpa: 2.5
}

student.name = "Andy";

document.write( student.name + "<br>");
document.write( student.major + "<br>");
document.write( student.gpa + "<br>");


// F U N C T I O N S

function addNumbers(num1, num2) {
	return num1 + num2;
}
var sum = addNumbers(4, 60);
document.write("<br>The sum is equal to: " + sum + "<br>");


//Inline Event Listeners 

//List of more events on this website:  https://www.w3schools.com/jsref/dom_obj_event.asp


function handleClick(element) {
	alert("Clicked " + element.id)
}

var header = document.getElementById("myHeader");

header.addEventListener("click", function(){
	alert("You clicked " + header.id);
});

//If Else Statements

var isStudent = false;
var isSmart = false;

//For loop function IfElse, while/doWhile loops, switch statements we know

var luckyNums = [4, 8, 15, 16, 23, 42];
luckyNums.forEach(function(luckyNums) {
	document.write("|" + luckyNums + "|");
});


*/
// E X C E P T I O N    C A T C H I N G

//var x = y + 9;

try {
	//var x = y + 9;
} catch(err) {
	document.write(err);
	throw("Something went wrong.");
} finally {
	// This code always gets executed
}


// Classes & Objects

class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	get title(){
		document.write("<p>getting </p>");
		return this._title;
	}

	set title(title){
		document.write("<p>setting </p>");
		this._title = title;
	}

	get author(){
		document.write("<p>getting </p>");
		return this._author;
	}

	set author(author){
		document.write("<p>setting </p>");
		this._author = author;
	}

	readBook() {
		document.write("Reading" + this.title + " by " + this.author + "<br>");
	}
}

var book1 = new Book("Harry Potter", "JK Rowling");

document.write(book1.title);
book1.readBook();

//Inheritance
class Chef {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
 
	makeChicken() {
		document.write("The chef makes chicken <br>");
	}

	makeSalad() {
		document.write("The chef makes salad <br>");
	}

	makeSpecialDish() {
		document.write("The chef makes special dish <br>");
	}
}

class ItalianChef extends Chef {
	constructor(name, age, province) {
		super(name, age);
		this.province = province;
	}

	makePasta() {
		document.write("The chef makes pasta <br>");
	}

	//Overridden
	makeSpecialDish() {
		document.write("The chef makes chicken parm <br>");
	}
}

var myChef = new Chef("Gordon Ramsay", 50);
myChef.makeChicken();

var myItalianChef = new ItalianChef("Massimo Bottura", 55, "Italy");
myItalianChef.makeChicken();
document.write(myItalianChef.age);