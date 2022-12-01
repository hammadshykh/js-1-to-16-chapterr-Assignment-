// CHAPTER # NO 1

let error = "Error! pleace enter a valid password";
alert(error);

let lineBreak = "Welcome to JS Land...\n Happy Coading";
alert(lineBreak);

let showConsole = "Hello.. i can run JS through my wb browser's Console";
alert(showConsole);
console.log(showConsole);

// CHAPTER # NO 2

//  Declare a variable
let fullName;
let age;
fullName = "Hammad Shaikh";
age = "18 Year Old";
// student’s bio data
let bio_data;
bio_data = "Sirtified Mobile Application";

// Show an Alert
alert(fullName);
alert(age);
alert(bio_data);

// Write a Script To Display
let one;
one = " Pizza \n Pizz \n Piz \n Pi \n P";
alert(one);

// Email
let email;
email = "My email adress is hammadshaikh.508@gmail.com";
alert(email);

// Message
let message =
  "I am trying to learn from the Book a Smarter way to learn Java Script";

alert(message);

// Design
let design;
design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(design);

//  Write a script to display this in browser through JS

let writeDisplay;
writeDisplay = "Yah! I can write HTML content through javaScript";

document.write(writeDisplay + "<br>");

// CHAPTER # No 3

// input value = age

let num = parseInt(prompt("Enter the age"));
if (!num == "") {
  alert("I am " + num + " Year Old");
  document.write("I am " + num + " Year Old " + "<br>");
} else {
  alert("I am  15  Year Old");
  document.write("I am  15  Year Old " + "<br>");
}

// vist Web page times
let visit2 = 10;

let visit = "You have visited this site" + visit2++ + " times ";

alert(visit);

// User input value birth

let birth = parseInt(prompt("Enter Your Birth"));
if (!birth == "") {
  alert("My Birth year is " + birth);
  alert("Data type of my ddecleared variable is" + typeof birth);
  document.write("My Birth year is " + birth + "<br>");
  document.write(
    "Data type of my ddecleared variable is" + typeof birth + "<br>"
  );
} else {
  alert("My Birth Year is 1990");
  alert("Data type of my ddecleared variable is " + typeof birth);
  document.write("My Birth year is 1990" + "<br>");
  document.write(
    "Data type of my ddecleared variable is " + typeof birth + "<br>"
  );
}

// Clothing order
let orderName = prompt("Enter The order user Name");

let cloth = parseInt(prompt("Enter the Shirt order"));

alert(orderName + " ordered " + cloth + " T-Shirt (s) on XYZ Clothing store ");
document.write(
  orderName +
    " ordered " +
    cloth +
    " T-Shirt (s) on Shahi Narket Clothing store <br>"
);

// Chapter # no 4

// Legal Variable
var $name;
var $23hm;
var _First$name;
var s1d3_8p;
var name_12_first;

// Illegal Variable

// var 12gmm
// var 22_sss
// var _$-sd

// Chapter # no 5

const num1 = parseInt(prompt("Enter the Number value 1"));
const num2 = parseInt(prompt("Enter the Number value 2"));

const sum = num1 + num2;
document.write("sum of " + num1 + " and " + num2 + "is" + sum + "<br>");

// Question No 2

var aa;
document.write(aa);
aa = 5;
document.write("<br>" + aa);
aa = ++aa;
document.write("<br>" + aa);
aa = aa + 7;

document.write("<br>");

// Movie Ticket

const Ticket = 600;

const movie = Ticket * 5;

document.write(
  "Total cost to buy 5 tickets to a movie is" + `<b> ${movie}</b>` + "PKR"
);

// Create Table
var table = parseInt(prompt("Enter The Table"));

var currentTable = table;
// console.log(currentTable);

if (!table == "") {
  document.write(
    currentTable + " x " + 1 + "  =  " + currentTable * 1 + "<br>"
  );
  document.write(
    currentTable + " x " + 2 + "  =  " + currentTable * 2 + "</br>"
  );
  document.write(
    currentTable + " x " + 3 + "  =  " + currentTable * 3 + "<br>"
  );
  document.write(
    currentTable + " x " + 4 + "  =  " + currentTable * 4 + "<br>"
  );
  document.write(
    currentTable + " x " + 5 + "  =  " + currentTable * 5 + "<br>"
  );
  document.write(
    currentTable + " x " + 6 + "  =  " + currentTable * 6 + "<br>"
  );
  document.write(
    currentTable + " x " + 7 + "  =  " + currentTable * 7 + "<br>"
  );
  document.write(
    currentTable + " x " + 8 + "  =  " + currentTable * 8 + "<br>"
  );
  document.write(
    currentTable + " x " + 9 + "  =  " + currentTable * 9 + "<br>"
  );
  document.write(
    currentTable + " x " + 10 + "  =  " + currentTable * 10 + "<br>"
  );
} else {
  document.write(5 + " x " + 1 + " = " + 5 * 1 + "<br>");
  document.write(5 + " x " + 2 + " = " + 5 * 2 + "<br>");
  document.write(5 + " x " + 3 + " = " + 5 * 3 + "<br>");
  document.write(5 + " x " + 4 + " = " + 5 * 4 + "<br>");
  document.write(5 + " x " + 5 + " = " + 5 * 5 + "<br>");
  document.write(5 + " x " + 6 + " = " + 5 * 6 + "<br>");
  document.write(5 + " x " + 7 + " = " + 5 * 7 + "<br>");
  document.write(5 + " x " + 8 + " = " + 5 * 8 + "<br>");
  document.write(5 + " x " + 9 + " = " + 5 * 9 + "<br>");
  document.write(5 + " x " + 10 + " = " + 5 * 10 + "<br>");
}
// The Temprature Converter

const temp = parseInt(prompt("enter the Temprature"));

var res = (temp * 9) / 5 + 32;
document.write("<sup>0</sup>");
var fer = parseInt(prompt("enter cel"));
var res1 = ((fer - 32) * 5) / 9;
document.write(temp + " F is " + res1 + " C " + "<br>");

// SHOPPING CART

document.write("<b>");

let item_1 = parseInt(prompt("Enter the item 1 price"));
if (item_1) {
  document.write("Price of item one is " + item_1 + "<br> <br>");
  let quantity_1 = parseInt(prompt("Enter the Quantity of item 1"));
  if (quantity_1) {
    document.write("Quantity of item one is " + quantity_1 + "<br>");
    let item_2 = parseInt(prompt("Enter the item 2 price"));
    document.write("Price of item 2 is " + item_2 + "<br>");
    let quantity_2 = parseInt(prompt("Enter the quantity item of 2"));
    if (quantity_2) {
      document.write("Quantity of item 2 is " + quantity_2 + "<br>");
      let shiping = parseInt(prompt("shipping charges "));
      document.write("shipping Charges is " + shiping + "<br> <br>");
      let total = `Total Coast Of Your Order is  ${
        item_1 * quantity_1 + item_2 * quantity_2 + shiping + "<br>"
      }`;
      document.write(total);
    }
  }
}

// Mark Sheet
var eng = parseInt(prompt("Enter English Marks"));

if (eng >= 0 && eng <= 100) {
  var urdu = parseInt(prompt("Enter Urdu Marks"));
  if (urdu >= 0 && urdu <= 100) {
    var math = parseInt(prompt("Enter Urdu Marks"));
    if (math >= 0 && math <= 100) {
      console.log("Good");

      var eng_per = ((eng / 100) * 100).toFixed();
      var urdu_per = ((urdu / 100) * 100).toFixed();
      var math_per = ((math / 100) * 100).toFixed();

      var sums = eng + urdu + math;

      var tper = ((sum / 300) * 100).toFixed();

      document.write("<table>");
      document.write("<tr><th> Subject </th>");
      document.write("<th> Obtained Marks </th>");
      document.write("<th> Total Marks </th>");
      document.write("<th> sub Percentage </th>");
      document.write("</tr>");

      document.write("<tr><th> English </th>");
      document.write("<th> " + eng + " </th>");
      document.write("<th> 100 </th>");
      document.write("<th> " + eng_per + "</th>");
      document.write("</tr>");

      document.write("<tr><th> Urdu </th>");
      document.write("<th> " + urdu + " </th>");
      document.write("<th> 100 </th>");
      document.write("<th> " + urdu_per + "</th>");
      document.write("</tr>");

      document.write("<tr><th> Math </th>");
      document.write("<th> " + math + " </th>");
      document.write("<th> 100 </th>");
      document.write("<th> " + math_per + "</th>");
      document.write("</tr>");

      document.write("<tr><th> </th>");
      document.write("<th> " + sum + "</th>");
      document.write("<th> 300 </th>");
      document.write("<th> " + tper + "</th>");
      document.write("</tr>");
    } else {
      alert("You enter encorrect marks of Math");
    }
  } else {
    alert("You enter encorrect marks of Urdu");
  }
} else {
  document.write("You enter encorrect marks of eng" + "<br>");
  alert("You enter encorrect marks of eng");
}

//  Question No 9

// Doller
let us = parseInt(prompt("Enter us Doller"));

let sr = 10 * 10.78 + 25 * 28;
console.log("Total Currency in PKR : " + sr);
document.write("Total Currency in PKR : " + sr + "<br>");

//  Question No 10

let inp_1 = parseInt(prompt("enter the number one"));
let ress = inp_1 + (5 * 10) / 2;
console.log(ress);
document.write(ress + "<br>");

//  Question No 13
// AGE Calculator

let currentYear = parseInt(prompt("Enter the current year"));
let birthYear = parseInt(prompt("Enter the Birth year"));
let calculateYear = currentYear - birthYear;
document.write("Your age is " + calculateYear + "<br>" + "<br>");

//  Question No 13

let currentAge = parseInt(prompt("Enter the current age"));
let Snacks = parseInt(prompt("Enter the current age"));
let maximumAge = 65;
document.write("Current Age is " + currentAge + "<br>");
document.write("Estimated Maximum Age is " + maximumAge + "<br>");
document.write("Ammount of snacks per day " + 3 + "<br>");

document.write(
  "You will need  " +
    Snacks * 365 +
    "To last you until the rip old age of " +
    currentAge +
    "<br>" +
    "<br>"
);

// CHAPTER # No 6-9
document.write("<br>");
let aValue = 10;
document.write("Result : " + "</b>");
document.write("The value of a is" + aValue + "</br>");
document.write("<br>");
document.write("<b>");
document.write("The Value of ++a is : " + ++aValue + "<br>");
document.write("Now The Value of a is : " + aValue + "<br>");
document.write("<br>");

document.write("The Value of a++ is : " + aValue++ + "<br>");
document.write("Now The Value of a is : " + aValue + "<br>");
document.write("<br>");

document.write("The Value of a-- is : " + aValue-- + "<br>");
document.write("Now The Value of a is : " + aValue + "<br>" + "<br>");
document.write("</b>");
// Execution

let a = 2,
  b = 1;
let resultA = --a - --b + ++b + b;
let resultB = --b - --a + ++a + a;
console.log("a is " + resultA + "<br>");
document.write("a is " + resultA + "<br>");
console.log("b is " + resultB + "<br>");
document.write("b is " + resultB + "<br>");
console.log("Result is " + resultA + resultB);
document.write("Result is " + resultA + resultB + "<br>" + "<br>");

// Create Table
var table = parseInt(prompt("Enter The Table"));

var currentTable = table;
// console.log(currentTable);

if (!table == "") {
  document.write(
    currentTable + " x " + 1 + "  =  " + currentTable * 1 + "<br>"
  );
  document.write(
    currentTable + " x " + 2 + "  =  " + currentTable * 2 + "</br>"
  );
  document.write(
    currentTable + " x " + 3 + "  =  " + currentTable * 3 + "<br>"
  );
  document.write(
    currentTable + " x " + 4 + "  =  " + currentTable * 4 + "<br>"
  );
  document.write(
    currentTable + " x " + 5 + "  =  " + currentTable * 5 + "<br>"
  );
  document.write(
    currentTable + " x " + 6 + "  =  " + currentTable * 6 + "<br>"
  );
  document.write(
    currentTable + " x " + 7 + "  =  " + currentTable * 7 + "<br>"
  );
  document.write(
    currentTable + " x " + 8 + "  =  " + currentTable * 8 + "<br>"
  );
  document.write(
    currentTable + " x " + 9 + "  =  " + currentTable * 9 + "<br>"
  );
  document.write(
    currentTable + " x " + 10 + "  =  " + currentTable * 10 + "<br>"
  );
} else {
  document.write(5 + " x " + 1 + " = " + 5 * 1 + "<br>");
  document.write(5 + " x " + 2 + " = " + 5 * 2 + "<br>");
  document.write(5 + " x " + 3 + " = " + 5 * 3 + "<br>");
  document.write(5 + " x " + 4 + " = " + 5 * 4 + "<br>");
  document.write(5 + " x " + 5 + " = " + 5 * 5 + "<br>");
  document.write(5 + " x " + 6 + " = " + 5 * 6 + "<br>");
  document.write(5 + " x " + 7 + " = " + 5 * 7 + "<br>");
  document.write(5 + " x " + 8 + " = " + 5 * 8 + "<br>");
  document.write(5 + " x " + 9 + " = " + 5 * 9 + "<br>");
  document.write(5 + " x " + 10 + " = " + 5 * 10 + "<br>");
}

// Mark Sheet
var eng = parseInt(prompt("Enter English Marks"));

if (eng >= 0 && eng <= 100) {
  var urdu = parseInt(prompt("Enter Urdu Marks"));
  if (urdu >= 0 && urdu <= 100) {
    var math = parseInt(prompt("Enter Urdu Marks"));
    if (math >= 0 && math <= 100) {
      console.log("Good");

      var eng_per = ((eng / 100) * 100).toFixed();
      var urdu_per = ((urdu / 100) * 100).toFixed();
      var math_per = ((math / 100) * 100).toFixed();

      var sums = eng + urdu + math;

      var tper = ((sum / 300) * 100).toFixed();

      document.write("<table>");
      document.write("<tr><th> Subject </th>");
      document.write("<th> Obtained Marks </th>");
      document.write("<th> Total Marks </th>");
      document.write("<th> sub Percentage </th>");
      document.write("</tr>");

      document.write("<tr><th> English </th>");
      document.write("<th> " + eng + " </th>");
      document.write("<th> 100 </th>");
      document.write("<th> " + eng_per + "</th>");
      document.write("</tr>");

      document.write("<tr><th> Urdu </th>");
      document.write("<th> " + urdu + " </th>");
      document.write("<th> 100 </th>");
      document.write("<th> " + urdu_per + "</th>");
      document.write("</tr>");

      document.write("<tr><th> Math </th>");
      document.write("<th> " + math + " </th>");
      document.write("<th> 100 </th>");
      document.write("<th> " + math_per + "</th>");
      document.write("</tr>");

      document.write("<tr><th> </th>");
      document.write("<th> " + sum + "</th>");
      document.write("<th> 300 </th>");
      document.write("<th> " + tper + "</th>");
      document.write("</tr>");
    } else {
      alert("You enter encorrect marks of Math");
    }
  } else {
    alert("You enter encorrect marks of Urdu");
  }
} else {
  document.write("You enter encorrect marks of eng" + "<br>");
  alert("You enter encorrect marks of eng");
}

// CHAPTER # NO 9-11

// Question No 1
// User input get city
let cityies = prompt("Enter the city Name");
document.write("Welcome to city of " + cityies + "<br>");

// Question No 2
// Gender

let gender = prompt("Enter the gender");

if (gender === "male") {
  document.write("Good Morning Sir..");
} else if (gender === "female") {
  document.write("Good Morning Ma'am..");
} else {
  document.write("Good Morning Everyone..");
}
document.write("<br>");

// Question No 3
// Table Styling
const tableStyle = `
<table>
<tr class="text-blue">
  <th>Signal color</th>
  <th>Message</th>
</tr>
<tr class="text-blue bg-skyblue">
  <th>Red</th>
  <td>Must stop</td>
</tr>
<tr class="text-blue">
  <th>Yellow</th>
  <td>Ready to move</td>
</tr>
<tr class="text-blue bg-skyblue">
  <th>Green</th>
  <td>Move now</td>
</tr>
</table>
`;

document.write(tableStyle);

document.write("<br>");

// Question No 4
// Reamaing Fuel

let fuel = parseInt(prompt("Enter the fuel"));

if (fuel < 0.25) {
  document.write("Please refill the fuel in your car ");
} else {
  document.write("fuel is full");
}

// Question No 5

let c = 4;
if (++c === 4) {
  alert("given condition for variable a is true");
}

// Question No 6
// New Table Mark Sheet

let outPut = `
<table>
        <tr class="bg-blue text-white">
          <th>Percentage %</th>
          <th>Grade</th>
          <th>Remarks</th>
        </tr>
        <tr class="bg-skyblue">
          <th>Greater then equal to 80</th>
          <th>A-one</th>
          <th>Excellent</th>
        </tr>
        <tr>
          <th>Greater then equal to 80</th>
          <th>A</th>
          <th>Good</th>
        </tr>
        <tr class="bg-skyblue">
          <th>Greater then equal to 80</th>
          <th>B</th>
          <th>You Need to improve</th>
        </tr>
        <tr class="bg-skyblue">
          <th>less then 60</th>
          <th>Fail</th>
          <th>Sorry</th>
        </tr>
      </table>
`;
// Question No 7

document.write(outPut);

// Question No 8
// Number Guess Game

let guessNumber = parseInt(prompt("Enter The Guess Number"));

let guessRandom = (Math.random() * 10).toFixed();
console.log(guessNumber);

if (guessNumber === guessRandom) {
  alert("You Win !");
  document.write("You Win !" + "<br>");
  console.log("You Win !");
} else {
  alert("Try Again not match number");
  console.log("Try Again not match number");
  document.write("Try Again not match number" + "<br>");
}
document.write("<br>");

// Question No 9
// Check The Even Odd NUmber

let evenOdd = parseInt(prompt("Enter the number check even odd"));

if (evenOdd % 2 === 0) {
  console.log("even Number");
  alert("even Number");
  document.write("even Number" + "<br>");
} else {
  alert("Odd Number");
  console.log("even Number");
  document.write("even Number" + "<br>");
}
document.write("<br>");

// Question No 10
// Check the Temprature Wheater

let wheather = parseInt(prompt("Enter the wheater temprature"));

if (wheather > 40) {
  document.write("“It is too hot outside.”" + "<br>");
  alert("“It is too hot outside.”");
} else if (wheather > 30) {
  alert(" “The Weather today is Normal.”");
  document.write(" “The Weather today is Normal.”" + "<br>");
} else if (wheather > 20) {
  alert(" “Today Weather is cool.”");
  document.write(" “Today Weather is cool.”" + "<br>");
} else if (wheather > 10) {
  alert(" “OMG! Today weather is so Cool.”");
  document.write(" “OMG! Today weather is so Cool.”" + "<br>");
}

document.write("<br>");

// Question No 11
// CAlculation

let num_one = parseInt(prompt("Enter the First Number calculate"));
let num_second = parseInt(prompt("Enter the First Number calculate"));
let oprator = parseInt(prompt("Enter the oprator +, -, *, /, %"));

if (oprator === "+") {
  document.write("you value is plus" + num_one + num_second);
} else if (oprator === "-") {
  document.write("you value is Minus" + num_one - num_second);
} else if (oprator === "*") {
  document.write("you value is Multiply" + num_one * num_second);
}

// CHAPTER # NO 12-13
// Check the Caractor ASSCI
// Question No 1

let acci = prompt("enter the charactor");

if (
  (acci.charCodeAt(0) >= 65 && acci.charCodeAt(0) <= 90) ||
  (acci.charCodeAt(0) >= 97 && acci.charCodeAt(0) <= 127)
) {
  console.log(acci.charCodeAt(0));
  document.write("Current Charactor Cod is " + acci.charCodeAt(+0));
}

// Question No 2
// Integer value check equal and greater then less then

let numInteger1 = parseInt(prompt("Enter the 1 integer value"));
let numInteger2 = parseInt(prompt("Enter the 2 integer value"));

if (numInteger1 === numInteger2) {
  alert("Both Are equal");
  document.write("Both Are equal" + "<br>");
} else if (numInteger1 < numInteger2) {
  alert("num1 Greater Then num2");
  document.write("num1 Greater Then num2" + "<br>");
} else if (numInteger1 > numInteger2) {
  alert("num1 Greater Then num2");
  document.write("num1 less Then num2" + "<br>");
}
//  Question Number 3

let negNum = parseInt(prompt("Enter the Negative Number"));
// Positive and negative zero are equal to each other in JavaScript:
if (negNum === -0) {
  console.log("Negative Number");
  alert('"Negative Number');
}

//  Question Number 4
// Check The voWel

let vowel = prompt("Enter the vowel alphabat");

if (vowel.length > 1) {
  alert("only one letter limit");
} else {
  if (
    vowel === "e" ||
    vowel === "a" ||
    vowel === "i" ||
    vowel === "o" ||
    vowel === "u"
  ) {
    alert("this Charactor is Vowel");
    document.write("thiS Charactor is Vowel" + "<br>");
  } else {
    alert("this Charactor Not a Vowel");
    document.write("thiS Charactor Not a Vowel" + "<br>");
  }
}

// //  Question Number 5

let hisPassword = prompt("Enter the his Password");
let herPassword = prompt("Enter the her Password");

if (hisPassword === herPassword) {
  alert("Correct! The password you");
  document.write("Correct! The password you" + "<br>");
} else {
  alert("Incorrect password");
  alert("Please enter your password");
}

// 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
  document.write(greeting);
} else {
  greeting = "Good evening";
  document.write(greeting);
}

// Question No 7
// Hours

let hours = parseInt(prompt("Enter the Hours"));

if (hours === 1900) {
  alert("");
}

// CHAPTER # No 14-16
// Question No 1

let studenName = prompt("Enter the studen name");
let storeStudent = [];
storeStudent.push(storeStudent);

// Question No 2

let storeObject = [{ name: storeStudent }];
console.log(storeObject.name);

// Question No 3
// Declare and initialize a strings array

let stringArray = [""];
console.log(stringArray);

// Question No 4
// Declare and initialize a Number array

let numberArray = [1, 2, 3, 4, 5];
console.log(numberArray);

// Question No 5
// Declare and initialize a boolean array
let booleanArray = [true, false];
console.log(booleanArray);

// Question No 6
// Declare and initialize a mixed array
let mixedArray = ["Hammad", 123, true];
console.log(mixedArray);

// Question No 7
// Declare and Initialize an array and store available
// education qualifications in Pakistan

let education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PDH"];

for (let i = 0; i < education.length; i++) {
  let storeEducation = `
  <ul>
  <li>${i + 1} ) ${education[i]}</li>
  </ul>
  `;
  document.write(storeEducation);
}

// Question No 8

let fStudentName = prompt("Enter the first Student Name");
let score = [];

if (fStudentName) {
  let fScore = parseInt(prompt("Enter the first Student Score"));
  var first_per = ((fScore / 100) * 100).toFixed();
  if (fScore) {
    let secStudentName = prompt("Enter the Second Student Name");
    if (secStudentName) {
      let secScore = parseInt(prompt("Enter the Second Student Score"));
      var sec_per = ((secScore / 100) * 100).toFixed();
      if (secScore) {
        let thdStudentName = prompt("Enter the Third Student Name");
        if (thdStudentName) {
          let thdScore = parseInt(prompt("Enter the Third Student Score"));
          var third_per = ((thdScore / 100) * 100).toFixed();
          let display = ` <ul>
          <li>
          score of ${fStudentName} is ${fScore}. Percentage : ${first_per} 
          </li>
          <li>
          score of ${secStudentName} is ${secScore}. Percentage : ${sec_per} 
          </li>
          <li>
          score of ${secStudentName} is ${thdScore}. Percentage : ${third_per} 
          </li>
          </ul>
          `;
          document.write(display);
        }
      }
    }
  }
}

// Question No 10

let scoreOf = [320, 230, 480, 120];
console.log(scoreOf);
let orderedScore = score.sort();
console.log(orderedScore);

// Question No 11

let city = [
  ["Karachi", "Hyderabad", "Lahore", "Islamabad", "Pishawar"],
  ["Karachi", "Hyderabad", "Lahore", "Islamabad", "Pishawar"],
  ["Karachi", "Hyderabad", "Lahore", "Islamabad", "Pishawar"],
];
console.log(city);
console.log(city[0].slice(2, 4));

// Question No 12

let newArray = ["This", "is", "My", "Cat"];
console.log(newArray);

let ArraySring = newArray.toString();
console.log(ArraySring);
document.write(ArraySring + "<br>");

// Question No 13

let arr = ["mouse", "Keyboard", "computer", "printer"];

for (var i = 0; i < arr.length; i++) {
  const remove = arr.pop();
  console.log("remove data", +remove);
  console.log(arr);
  i = i - 1;
}

// Question No 14

let Reverse = arr.reverse();
console.log(Reverse);

// Question No 15
//Selected Tag

let mobileFeatures = `
<select>
<option value="Samsung">Samsung</option>
<option value="Motorola">Motorola</option>
<option value="Nokia">Nokia</option>
<option value="I Phone">I Phone</option>
<option value="Sony">Sony</option>
</select>
`;
document.write(mobileFeatures);
