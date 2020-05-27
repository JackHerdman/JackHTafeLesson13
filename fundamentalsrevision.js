// 1. Create a variable called x and another variable called y. Assign a number to both of them. Create another varaible called z and assign the sum of x and y to the variable z

let x = 5;
let y = 10;
let z = x + y;

// 2.Create a string variable called twelve and assign it the value "12". Create another variable called number and use the parseInt function to retrieve the integer from the variable twelve

let twelve = "12";
let number = parseInt(twelve);
console.log(number);

// 3.Create two string variables called name and greeting. Use console.log to output both variables separated by a string using string concatenation (use the + operator). Then use console.log to output both variables separated by a string using string interpolation (use the `${var1} ${var2}` syntax)

let name = "Luke"
let greeting = "Hello "
console.log( greeting + name)
console.log(`${greeting}${name}`)

// 4.Create a variable called age and assign it to your age. Use the increment operator to increase the value of age by 1. Then decrease the value of your age by 5 using the subtraction operator.

let age = 29;
console.log(age);
age++;
console.log(age);
age = age - 5;
console.log(age);

// 5.Create a variable that is a number. Use an if/else statement to log whether the number is bigger than, smaller than or equal to 10.

let number = 5;
if (number > 10){
    console.log ("number is bigger than 10")
} else if  (number == 10){
    console.log("your number is equal to 10")
} else {
    console.log("your number is smaller than 10")
}

// 6.Create a variable that is a string. Use an if/else statement to log whether the string has the value "yes".

let string = "no"
if (string.toLowerCase() == "yes"){
    console.log("The string is a match.")
}else {
    console.log("The string is not a match.")
}

// 7.Create an array of strings that are the names of people. Use a for loop to write each of the names in the array to the console. Do the same again using a while loop.

myNames = ["Jack", "Denise", "Donald", "Amy", "Sally"];
for (let i = 0; i < myNames.length; i++) {
    const name = myNames[i];
    console.log (name);
}

let i = 0
while(i <myNames.length){
    console.log(myNames[i]);
    i++
}

// 8.Create an array of numbers. Use a for loop to write the value of each number in the array to the console in the reverse order of their array index. Do the same using a while loop.

let myNumbers = [1, 2, 3, 4, 5];
for (let i = myNumbers.length - 1; i >= 0; i--) {
    const number = myNumbers[i];
    console.log(number);
}

let i = myNumbers.length - 1
while(i>=0){
    console.log(myNumbers[i]);
    i--;
}

// 9.Create an array of strings called pets that has 6 elements. Write the name of the 3rd pet in the array to the console.

let pets = ["Slimey", "Scooter", "Tom", "Tom2", "Jeffrey", "Effie"];
console.log(pets[2]);

// 10.Create an array of numbers with 3 elements. Remove the last element of the array and then add a new element with the value 7.

let myNumbers = [5, 6, 8];
console.log(myNumbers);
myNumbers.pop();
myNumbers.push(7);
console.log(myNumbers);

// 11.Create an array of strings called names. Use a for loop to iterate through the array and find if the array contains the name "Luke" and then log whether the name was found. Do the same using a while loop.

let names = ["Amy", "Sally", "Jack", "Bob", "Christian", "Karina"];

let findLuke = false;
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if (element == "Luke") {
        findLuke = true;
    }
}
if (findLuke == true) {
    console.log("Luke is included");
} else {
    console.log("Luke is not in the array")
}


let i = 0
let whileLuke = false;
while (i < names.length) {
    if (names[i] == "Luke") {
        whileLuke = true;
        break;
    } else {
        i++
    }
}
if (whileLuke == true) {
    console.log("Luke is included");
} else {
    console.log("Luke is not in the array")
}

// 12.Create an object called cat with 2 properties, name and age. Set the name to be "Felix" and the age to be 3. Create another property for the object called owner and set it to be your name.

let cat = {
    name: "Felix",
    age: 3
};
cat.owner = "Jack";

console.log(cat);

// 13.Create an array of objects that represent people. Each with a property called name and a property called age. Use a for or while loop to iterate through the array and create a new array with all the people over 30. Do the same using the Array.filter method.

let people =[{
    name: "Jack",
    age: 29,
},{
    name: "Donald",
    age: 64,
},{
    name: "Denise",
    age: 67,
},{
    name: "Karina",
    age: 29,
},{
    name: "Christian",
    age: 29,
}];

let peopleOver30 = [];
for (let i = 0; i < people.length; i++) {
    const person = people[i];
    if (person.age > 30){
        peopleOver30.push(person);
    }
}
console.log(peopleOver30);

let oldPeople = people.filter(person => person.age > 30)
console.log(oldPeople);

// 14.Declare a function called subtract numbers that takes 2 parameters that are numbers. The function should return the value of the first number minus the second number.

function subtractNumbers(num1, num2){
    return num1 - num2;
}
console.log(subtractNumbers(5,3));

// 15.Declare a function that takes 1 parameter that is an array. The function should output the value of each element in the array to the console. The function should not return a value.

myNames = ["Jack", "Denise", "Donald", "Amy", "Sally"];

function printArray(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
    console.log(element)
    }
}

printArray(myNames);

// 16.Use an if/else statement to determine if a number is between 10 and 20 and log whether it is or isn't to the console. (Hint: you will need to use the && or || operator)

let number = 15;
if (number >= 10 && number <= 20){
    console.log("your number is between 10 and 20")
} else {
    console.log("your number does not fit within the parameters")
}
// 17.Create an array of strings called foods. Use the Array.includes function to find if the array contains a string "pizza", if it does the output "I like pizza" to the console, otherwise output "I wish I had pizza" instead

let foods = ["bread", "artichoke", "pizza", "broccoli", "Brussel Sprouts"];

if(foods.toLowerCase().includes("pizza")){
    console.log("I like pizza");
} else {
    console.log("I wish I had pizza")
}

// 18.Create a function that takes a list of names as a string with comma-separated values and returns an array of the names. (Hint: use the string.split method)

let myString = "I won't get that far away without you"
console.log (myString)
let myArray = myString.split(" ");
console.log (myArray)

// 19.Declare a string variable called city and assign it the value of a city you would like to visit. Use the string.substring method to get all the characters in the string except for the first and last characters and output that value to the console.

let city = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";
// east coast New Zealand below Napier. Translates to “the summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who traveled about, played his nose flute to his loved one.”

let shortenedCity = city.substring(1, city.length - 1);
console.log(shortenedCity);

// 20.Create a variable called food and assign it to a variable. Use a switch statement to output a value to the console for the following cases. If food is "Ramen" or "Sushi" then output "I like Japanese food". If the value is "Pizza" or "Spaghetti" then output "I like Italian food". If the value is "Sausage" or "Schnitzel" then output "I like German food". If none of the other values are found then output "Wow, where's that food from?"

let myfood = "Ramen";
let food = myfood; //create a variable and assign it to a variable????
switch (food) {
    case "Ramen":
    case "Sushi":
        console.log("I like Japanese food");
        break;
    case "Pizza":
    case "Spaghetti":
        console.log("I like Italian food");
        break;
    case "Sausage":
    case "Schnitzel":
        console.log("I like German food");
        break;
    default:
        console.log("Wow, where's that food from?");
        break;
}

// 21.Create a class called Car which should have a constructor that sets the value of the following properties: model, year and colour. Inside the class, declare a method called getInfo that returns the basic information about the car as a string.

class Car {
    constructor(model, year, colour) {
        this.model = model,
            this.year = year,
            this.colour = colour
    }

    getInfo() {
        return `This ${this.year} ${this.model} is ${this.colour} in colour`
    }
}
let myCar = new Car("Lancer", 2006, "white")
console.log(myCar);
console.log(myCar.getInfo());

// 22.Create a class called Rectangle that has 2 properties, height and width that are both set in a constructor. Create a getter for a property area that returns the height times the width. Create a class Square that extends Rectangle. It should have a constructor that only takes 1 value that assigns both the height and width.

class Rectangle{
    constructor(height, width){
        this.height = height,
        this.width = width
    }
    get Area(){
        return this.height * this.width
    }
}
myRectangle = new Rectangle(10, 5);
console.log(myRectangle.Area);

class Square extends Rectangle{
    constructor(side){
        super(side, side)
    }
}
mySquare = new Square(10);
console.log(mySquare.Area);

// 23.Create a string array called companies that is a list of all the companies you have worked at. Use the Array.map function to create an array of objects each with 1 property called name that is equal to the name of the company.

myJobs =["McDonalds", "Video Ezy", "Showbiz", "HCF Eyecare", "XPO Brands", "Service NSW"];

let jobArray = myJobs.map(company =>  ({ company }))

console.log(jobArray);

// 24.Create an array of objects called friends that is a list of people you are friends with. Each object should have 2 properties, firstName and lastName. Use the Array.map function to create another array that is a string array representing the full names of each of those friends. You must use an arrow function as the parameter for Array.map.

let friends = [{
    firstName: "Karina",
    lastName: "Caltabiano"
}, {
    firstName: "Christian",
    lastName: "Caltabiano"
}, {
    firstName: "Kate",
    lastName: "Groom"
}];

let friendNames = friends.map(name => (name.firstName + " " + name.lastName))

console.log(friendNames)

// 25.Create a method called sayHello that takes 1 parameter which is a name and outputs "Hello " and then the name given. Add a line to the function to cause it to throw an error if the name is not provided. Then call the function inside a try/catch block and if there is an error, then log the error message.

function sayHello(name) {
    if (!name == "") {
        console.log("Hello " + name)
    } else {
        throw new Error("ERROR: You have not entered anything")
    }
}

try {
    sayHello("Jack")
} catch (error) {
    console.log(error.message)
}


// 26.Create an object called shop. It should have 3 properties - address, name and category (set these properties to whichever values you would like). Convert the object to a JSON string and output the string to the console.

let shop ={
    address: "123, Sydney Street",
    name: "Stellar Sydney Stuff",
    category: "Souvenirs"
}

console.log(JSON.stringify(shop))

// 27.What is the command you need to run to create a package.json file inside a project (don't make a gist for this one)
        npm init -yes

// 28.What is the command to install an npm package called uuid (don't make a gist for this one)
        npm i uuid --save
