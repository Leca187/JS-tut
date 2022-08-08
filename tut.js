// in-line comment

/* This is 
multi-line comment */

// console.log("Hello there");

//--------------------------------------------------------------------------------------------------
// Data types and variables (undefined, null, boolean, string, symbol, number and object)
/*
var myName = "Leca";

myNumber = 8;

let ourName = "Art of Dev";

const pi = 3.14;
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Storing values with assignment operator
/*
var a;
var b = 2;
console.log(a);
a = 187;

b = a;

console.log(a);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Uninitialized variables
/*
var a;
var b;
var c;

a = 5;
b = 10;
c = "I am a";

a = a + 1;
b = b+ 5;
c = c + " String!";

console.log(a,b,c);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// camelCase
/*
var studelyCapVar;
var properCamelCase;
var titleCaseOver;
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Adding, subtracting, multiplying, dividing, incrementing, decrementing numbers
/*
var sum = 19 + 4;
var difference = 19 - 4;
var multi = 19 * 4;
var quotient = 19 / 4;
var myVar = 19;
var yourVar = 19;
myVar++; // myVar = myVar + 1 
yourVar--; // myVar = myVar - 1 

console.log(sum,difference,multi,quotient,myVar,yourVar);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Remainder
/*
var remainder;

remainder = 11 % 3;
console.log(remainder);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
/*
var a = 13;
var b = 17;
var c = 12;
var d = 15;

a += 10; // a = a + 10
b -= 10; // b = b - 10
c *= 2; // c = c * 2
d /= 5; // d = d / 5
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Declare String variables
/*
var myStr = "I am a \"double quoted\" string inside \"double quoted\" string";
var myStr2 = `'I am a "double quoted" string inside "double quoted" string'`;
console.log(myStr,myStr2);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Escape Sequences

/*****
 CODE   OUTPUT
 \'     single quote
 \"     double quote
 \\     backslash
 \n     newline
 \r     carriage return
 \t     tab
 \b     backspace
 \f     from feed
 *****/
/*
 var myString = "First line\n\t\\Seconde line\n\t\tThird line";
 console.log(myString);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Concatenating strings with plus operator
/*
var ourStr = "I come first. " + "I come secound.";
var myStr = "This is the start. " + "This is the end.";

var firstStr = "I caome first. "
firstStr += "I come second."
console.log(myStr,"\n",firstStr);

var myName = "Leca"
var myStr = "Hello my name is " + myName + ", how are you?";

console.log(myStr);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Appendong variables to string
/*
var anAdjective = "awesome!";
var ourStr = "Leca is ";

ourStr += anAdjective;
console.log(ourStr);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Find length of string
/*
var firstNameLength = 0;
var firstName = "leca";

firstNameLength = firstName.length;
console.log(firstNameLength)
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Bracket Notation
/*
var firstLetterOfFirstName = "";
var firstName = "Leca";
var firstNameLength = 0;
var lastLetter = "";

firstLetterOfFirstName = firstName[0];
firstNameLength = firstName.length;
lastLetter = firstName[firstName.length - 1];
console.log(`${firstLetterOfFirstName}\n${lastLetter}`);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Word Blanks
/*
function worldBlanks(myNoun,myAdjective, myVerb, myAdverb){

    var resault = "";
    
    resault += "the " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

    return resault;

}

console.log(worldBlanks("dog", "big", "ran", "quickly"));
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Store multiple values with arrays
/*
var myArray = ["Leca", 24, 175.5];

// nest arrays

var ourArray = [["leca", 25], ["Buaa",26]];
console.log(ourArray);
//

var array = [50,60,70];

var myData = array[2]
console.log(myData);

//

var someArray = [13,12,12];

someArray[0] = 12;
console.log(someArray);

//

var yourData = ourArray[1][0];
console.log(yourData);

//Push - add in array from back

ourArray.push(["Pera",23], ["Djora",24]);
console.log(ourArray);

//Pop - remove last

var removedFromOurArray = ourArray.pop();
console.log(ourArray);
console.log(removedFromOurArray);

//Shift - remove first

var removedFirstFromOurArray = ourArray.shift();
console.log(ourArray);
console.log(removedFirstFromOurArray);

//Unshift - add in array infront

ourArray.unshift(["Saki",24], ["Takic",18]);
console.log(ourArray);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Functions
/*
function ourReusableFunction(){

    console.log("hello World");

}

ourReusableFunction();

// Function Arguments

function myFunctionWithArgs(a,b){

    console.log(a-b);

}

myFunctionWithArgs(10,5);

// Global Scope And Functions

var myGlobal = 10;

function fun1(){

    oopsGlobal = 5; // ako u funkciji definisemo varijablu sa var onda je lokalna, a ako je definisemo
                    // bez var onda je globalna.
}

function fun2(){

    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

// Local Scope and Functions

function myLocal(){

    var myVariable = 155;
    console.log(myVariable);

}

myLocal();
// console.log(myVariable);  - error jer je myVariable localna

// Global vs Local scope in fuction

var outerWear = "T-Shirt";

function myOutfit(){
    var outerWear = "sweater";
    return outerWear;

}

console.log(myOutfit());
console.log(outerWear);

// Returne value from a function with return

function minus(num){

    return num - 10;

}

console.log(minus(10)); // ako logujemo funkciju koja nema return vratice undefined

// Assignment with a return value

var changed = 0;

function change(numbe){

    return (numbe + 4 ) / 3;

}

changed = change(11);
console.log(changed);

function nextInLine(arr, item){

    arr.push(item)
    return arr.shift();

}

var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// IF statements
/*
function ourTrueOrFalse(isItTrue){
    if (isItTrue) {
        return "yes its true";
    }
    return "no, its false";
}

console.log(ourTrueOrFalse(false));

// Equal 

function testEqual(val){
    if (val == 12){
        return "equal";
    }
    return "not equal";
}

console.log(testEqual(12));

// 3 === 3 vrqatice true, 3 === "3" vraca false dok 3 == "3" vraca true

// Inequality 

function testNotEqual(val1){
    if (val1 != 12){
        return "not equal";
    }
    return "equal";
}

console.log(testNotEqual(12));

// 3 !== 3 vraca false, 3 !== "3" vraca true dok 3 != "3" vraca false

// AND

function fAnd(val2){

    if (val2 <= 50 && val2 >= 25){
        return "yes";
    }
    return "no";
}

console.log(fAnd(26));

// OR

function fOr(val2){

    if (val2 < 10 || val2 > 20){
        return "outside";
    }
    return "inside";
}

console.log(fOr(26));

// else, else if sve standardno
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Switch statement
/*
function caseInSwitch(val){
    var answer = ""
    switch(val){
        case 1:
            answer = "alpha";
        break;
        case 2:
            answer = "beta";
        break;
        case 3:
            answer = "gama";
        break;
        case 4:
            answer = "delta";
        break;
        default:
            answer = "zeta";
        break;
    }

    return answer;
}

console.log(caseInSwitch(2))

// Vise case-ova koji vracaju isti rezultat

function sequentialSizes(val1){

    var answer1 = ""
    switch(val1){
        case 1:
        case 2:
        case 3:
            answer1 = "low";
        break;
        case 4:
        case 5:
        case 6:
            answer1 = "mid";
        break;
        case 7:
        case 8:
        case 9:
            answer1 = "high";
        break;
    }
    return answer1;
}

console.log(sequentialSizes(1));
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Build Objects
/*
var ourDog = {
    "name": "Dzesi",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var nameValue = ourDog.name;
var legsValue = ourDog["legs"];

// Update object 

ourDog.name = "Dzeki";

// Add new Properties to objects

ourDog.bark = true;

// Delete Properties from objects

delete ourDog.tails;

// Nested objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

// manipulating complex objects

var myMusic = [
    {
    "artist": "leca",
    "title": "187 under",
    "formats": [
        "CD",
        "8T",
        "LP"
    ],
    "gold": true

    },
    {
        "artist": "Buaa",
        "title": "Bugaja",
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": false
    
        }
];

console.log(myMusic[0].formats[2]);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
// Loops

// While loops
/*
var myArray = []
var i = 0
while (i < 5){
    myArray.push(i);
    i++;
}
console.log(myArray);

// For loop

var ourArray = [];

for (var i = 0; i < 5; i++){
    ourArray.push(i);
}
console.log(ourArray);

// Iterate through an array

var fArray = [9,10,11,12];
var ourTotal = 0;

for (i = 0; i< fArray.length; i++ ){
    ourTotal += fArray[i];
}
console.log(fArray);

// Nested for loops

function multiplyAll(arr){

    var product = 1;

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }

    return product
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log(product)

// Iterate with Do... While loops - uvek prvo odradi bar jednom pa tek onda proverava uslov 

var doArray = [];
var i = 10;

do{
    doArray.push(i);
    i++;
} while (i < 5)

console.log(i, doArray);
*/
//--------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------- 

// Generate random fraction 
/*
function randomFraction() {

    return Math.random();

}
console.log(randomFraction());

// Generate random whole number

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

console.log(randomNumberBetween0and19);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------

// parseInt function
/*
function convertToInteger(str){

    return parseInt(str);  // ako str nije broj vratice NaN

}

var myNumber = convertToInteger("56");
console.log(myNumber);

// radix

function convertToInteger2(str){

    return parseInt(str, 2);  // posle zareza ide osnova brojnog sistema

}

var myNumber2 = convertToInteger("10011");
console.log(myNumber2);
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------

// Ternary operator 
/*
function checkEqual(a,b){

    if (a===b){
        return true;
    }
    else {
        return false;
    }
}

console.log(checkEqual(1,2));

// isto ovo gore u jednoj liniji TERNATY OPERATOR

function checkEqual2(a,b){

    return a===b ? true : false;

}

console.log(checkEqual2(1,2));

// Multiple Ternary operators

function checkSign(num){

return num > 0 ? "positive" : num < 0 ? "negative" : "zero"

}

console.log(checkSign(-2))
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------

// sa LET se definise variabla isto kao sa VAR samo sto let ne dopusta da se varijabla sa istim imenom definise dva puta
// takodje let definise promenjivu za block scope odnosno izmedju {}
// CONST isto kao let samo ne moze da se dodeljuje nova vrednost
// preporucuje se kad se koristi const da se varijabla pise velikim slovima const LECA = "Leca"

// Prevent object mutation 

//Object.freeze();  // onemogucava menjaje itema u objektu
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------

// Arrow function
/*
var magic = function(){

    return new Date()

}
// je isto sto i 

const magic1 = () => new Date();


// with parameters

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));

// Default parameters 

const increment = (function(){
    return function increment1(number, value = 1){
        return number + value;
    }
})();
console.log(increment(5,2))
console.log(increment(5))

// Rest operator with function parameters

const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3,4,5,6));
*/
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------

// Classes

class rectangle {
    constructor(_height,_width,_color){
        this.height = _height
        this.width = _width
        this.color = _color
    }

    getArea() {
        return this.width * this.height;
    }
    
    // getter
    get area(){
        return this.width * this.height;
    }

    // setter 
    set sqr(sq){
        this.height = Math.sqrt(sq)
        this.width = Math.sqrt(sq)
    }
}

let myRectangle1 = new rectangle (5,6,'white')
let myRectangle2 = new rectangle (3,2,'red')

console.log(myRectangle1.getArea(),myRectangle2.getArea())

myRectangle1.sqr = 25
console.log(myRectangle1.width,myRectangle1.height)
console.log(myRectangle1.area,myRectangle2.area)

// Static Methodes - je moetoda koja je diefinisana klasom ali nije deo instacioniranog objekta kad je kreiran
//                      

class Square{
    constructor(_width){
        this.width = _width
        this.height = _width 
    }
    static equals (a, b){
        return a.width * a.height === b.width * b.height
    }
    static isValidDimensions (width,height){
        return width === height
    }
}

let squeare1 = new Square(8)
let squeare2 = new Square(9)

console.log(Square.equals(squeare1,squeare2))
console.log(Square.isValidDimensions(6,6))

// Inheritance and Extends

class Person {
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }
    describe (){
        console.log(`I am ${this.name} and i am ${this.age} years old.`)
    }
}

class Programmer extends Person{
    constructor(_name, _age, _yearsOfExperience){
        super(_name,_age)
        this.yearsOfExperience = _yearsOfExperience
    }
    code(){
        console.log(`${this.name} is coding`)
    }
}

let person1 = new Person('Leca', 25)
let programmer1 = new Programmer('Buaa', 25, 10)

// ne moze person1.code()
// ali moze programmer1.describe()
person1.describe()
programmer1.describe()
programmer1.code()

const programmers = [
    programmer1,
    new Programmer('Burga',26,9)
]

function developSoftware(programmers){
    for (let programmer of programmers){
        programmer.code()
    }
}

developSoftware(programmers)

// Polymorphism 

class Animal{
    constructor(name){
        this.name = name
    }
    makeSound() {
        console.log('generic animal sound')
    }
}

class Dog extends Animal{
    constructor(name) {
        super(name)
    }
    makeSound(){
        console.log('Woof, woof')
        super.makeSound()
    }
}

let a1 = new Animal("ker1")
let a2 = new Dog("ker2")

a2.makeSound()
a1.makeSound()
