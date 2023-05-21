//chp 31 to 34 start.
//01
var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

//02
var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
var currentMonthName = monthNames[currentMonth];
alert("The current month is: " + currentMonthName);

//03
var currentDate = new Date();
var dayOfWeek = currentDate.getDay();
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var firstThreeLetters = daysOfWeek[dayOfWeek].substring(0, 3);
console.log(firstThreeLetters);

//04
var currentDate = new Date();
currentDate.toString;
var b = currentDate.toString();
var c = b.slice(0,3);
if (c === "Sat"){
    document.write("It's Fun Day")
}else if(c === "Sun"){
    document.write("It's Fun Day")
}else if(c === "Mon"){
    document.write()
}else if(c === "Tue"){
    document.write()
}else if(c === "Wed"){
    document.write()
}else if(c === "Thr"){
    document.write()
}else if(c === "Fri"){
    document.write()
}

//05
var currentdate=new Date();
var currentDay=currentdate.getDay();
if(currentDay<16){
    alert("first fifteen days")
}else{
    alert("last days of the month")
}

//06

var currentDate = new Date();
var epochDate = new Date(1970, 0, 1, 0, 0, 0, 0);
var timeDifference = currentDate.getTime() - epochDate.getTime();
var minutesSinceEpoch = Math.floor(timeDifference / 60000);

document.write("Minutes since midnight, January 1, 1970:", minutesSinceEpoch);

//07

var currentDate = new Date();
var currentHour = currentDate.getHours();
if (currentHour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

//08
var ddate=new Date(2015,5,18);
var currentDate=new Date();
var timeDifference=currentDate.getTime()-ddate.getTime();
var daysPassed=Math.floor(timeDifference/(1000*60*60*24));
alert("days past :" +daysPassed);

//09
var ddate= new Date(2015, 5, 18); 
var currentDate = new Date(); 
var timeDiff = currentDate.getTime() - ddate.getTime();
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert("Days past: " + daysPassed);

//10
var date=new Date(2016,7,12);
var refrenceDate=new Date(2015,0,1);
var timeDifference=refrenceDate.getTime()-date.getTime();
document.write("seconds elapsed between the refrence date and the beginning of 2015:" +timeDifference);

//11
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write(currentDate);

//12
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var targetYear = currentYear - 100;
currentDate.setFullYear(targetYear);
alert("100 years ago, the date was: " + currentDate.toDateString());

//13
var age = prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear);

//14
function generateBill() {

    var customerName = prompt("Enter customer name:");
    var currentMonth = prompt("Enter current month:");
    var numberOfUnits = parseFloat(prompt("Enter number of units:"));
    var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
    var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));
    
        var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
    var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
    
    
        document.write("Customer Name: " + customerName);
    document.write("<br>")
    document.write("Current Month: " + currentMonth);
    document.write("<br>")
    
    document.write("Number of Units: " + numberOfUnits.toFixed(2));
        document.write("<br>")
    
        document.write("Charges per Unit: " + chargesPerUnit.toFixed(2));
    document.write("<br>")
    
    document.write("Net Amount Payable (within Due Date): " + netAmountPayable);
    document.write("<br>")
    
        document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2));
        document.write("<br>")
    
        document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable);
    }
    
    generateBill();
// chp 31 to 34 end.


//chp 35 to 38 start.

//01
function dateTime(){
    var currentDate=new Date();
    var datetime=currentDate.toLocaleString()
    document.write(datetime)
}
dateTime()

//02
 function firstLastname(){
    var firstName=prompt("enter your 1st name")
    var lastName=prompt("enter last name")
    var greet= (firstName +  " "  +lastName)
    document.write(greet)
 }
 firstLastname();

 //03
  function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var sum = num1 + num2;
     return sum;
}
var result=addNumbers();
alert("The sum of the two numbers is: " + result);

//04
function computeOperation(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      case '%':
        result = num1 % num2;
        break;
      case '**':
        result = num1 ** num2;
        break;
      default:
        return 'Invalid operator';
    }
  
    document.write('The result is: ' + result);
    return result;
  }
  const num1 = 6;
  const num2 = 4;
  const operator = '+';
  
  computeOperation(num1, num2, operator);

//05

function square(number) {
    return number * number;
}
let results = square(8);
document.write(results)

//06
 function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
  
    return result;
  }
  const number = 5;
const marks = factorial(number);
console.log(`The factorial of ${number} is ${marks}`);

//07
function countNumbers(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number' || start > end) {
      console.error('Invalid input!');
      return;
    }
    for (let i = start; i <= end; i++) {
      document.write(i + '<br>');
    }
  }
  countNumbers(1, 20);  
  
//08
  function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(value) {
      return Math.pow(value, 2);
    }
  
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
  
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
  
    return hypotenuse;
  }
  var base = 5;
  var perpendicular = 6;
  var hypotenuse = calculateHypotenuse(base, perpendicular);
  console.log("Hypotenuse:", hypotenuse);

//09
function calculateRectangleArea(width, height) {
    return width * height;
  }
  const area1 = calculateRectangleArea(5, 6);
  console.log(area1);
  function calculateRectangleArea(width, height) {
    return width * height;
  }
  const rectangleWidth = 5;
  const rectangleHeight = 6;
  const area2 = calculateRectangleArea(rectangleWidth, rectangleHeight);
  console.log(area2);

//10
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  const str1 = "Miss";
  console.log(isPalindrome(str1));
  
  const str2 = "Hello";
  console.log(isPalindrome(str2));
    
//11
function capitalizeWords(str) {
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    words[i] = capitalizedWord;
  }
  var capitalizedStr = words.join(' ');
  return capitalizedStr;
}
var str = 'the quick brown fox';
var capitalizedStr = capitalizeWords(str);
console.log(capitalizedStr);

//12
function findLongestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  var inputString = "Web Development Tutorial";
  var longestWord = findLongestWord(inputString);
  console.log(longestWord);
  
//13
function countOccurrences(str, letter) {
    var count = 0;
    
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        count++;
      }
    }
    
    return count;
  }
  var str = 'JSResourceS.com';
  var letter = 'o';
  
  var occurrences = countOccurrences(str, letter);
  console.log("Number of occurrences of '" + letter + "' in '" + str + "': " + occurrences);
  
//14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);
  }
  function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area);
  }
  var radius = 5;
  calcCircumference(radius);
  calcArea(radius);
// chp 35 to 38 end.

//chp 39 to 42 start.

//01
function power(a, b) {
    return Math.pow(a, b);
  }
console.log(power(3, 5));
console.log(power(2, 4));
console.log(power(10, 0));

//02
function isLeapYear(year) { 
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  var year = 2020;
  if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
    
//03
function calculateTriangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  var sideA = 5;
  var sideB = 7;
  var sideC = 9;
  var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
  console.log("Area of the triangle: " + triangleArea);
  function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
  }
  
  function calculateTriangleArea(a, b, c) {
    var s = calculateSemiPerimeter(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  var sideA = 5;
  var sideB = 7;
  var sideC = 9;
  var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
  console.log("Area of the triangle: " + triangleArea);
    
//04
function calculateAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
  }
  
  function calculatePercentage(totalMarks, maximumMarks) {
    return (totalMarks / maximumMarks) * 100;
  }
  
  function mainFunction(subject1, subject2, subject3) {
    const average = calculateAverage(subject1, subject2, subject3);
    const totalMarks = subject1 + subject2 + subject3;
    const maximumMarks = 300;
    const percentage = calculatePercentage(totalMarks, maximumMarks);
  
    console.log("Average:", average);
    console.log("Percentage:", percentage);
  }
  mainFunction(85, 90, 95);
  
//05
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1;
  }
  const war = "Hello, World!";
  const blo = "o";
  const index = customIndexOf(war, blo);
  console.log(index);

//06
function deleteVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = '';
    
    for (let i = 0; i < sentence.length; i++) {
      if (!vowels.includes(sentence[i])) {
        result += sentence[i];
      }
    }
    return result;
  }const sentence = "Hello, world!";
  const modifiedSentence = deleteVowels(sentence);
  console.log(modifiedSentence);

//07
function countSuccessiveVowels(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    text = text.toLowerCase();
    for (let i = 0; i < text.length - 1; i++) {
      const currentChar = text[i];
      const nextChar = text[i + 1];
      if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
        switch (currentChar + nextChar) {
          case 'ea':
          case 'ai':
          case 'ei':
          case 'oi':
          case 'au':
          case 'ou':
          case 'iu':
            count++;
            break;
          default:
            break;
        }
      }
    }
    
    return count;
  }
  const value = "Pleases read this application and give me gratuity";
  const occurrenceCount = countSuccessiveVowels(value);
  console.log(`Number of occurrences: ${occurrenceCount}`);
  
//08
function convertToMeters(distance) {
    return distance * 1000;
  }
  function convertToFeet(distance) {
    return distance * 3280.84;
  }
  function convertToInches(distance) {
    return distance * 39370.1;
  }
  function convertToCentimeters(distance) {
    return distance * 100000;
  }
  const distanceInKm = parseFloat(prompt("Enter the distance between two cities (in km):"));
  
  const distanceInMeters = convertToMeters(distanceInKm);
  console.log("Distance in meters:", distanceInMeters);
  
  const distanceInFeet = convertToFeet(distanceInKm);
  console.log("Distance in feet:", distanceInFeet);
  
  const distanceInInches = convertToInches(distanceInKm);
  console.log("Distance in inches:", distanceInInches);
  
  const distanceInCentimeters = convertToCentimeters(distanceInKm);
  console.log("Distance in centimeters:", distanceInCentimeters);

//09
function calculateOvertimePay(hoursWorked) {
    const regularHours = 50;
    const overtimeRate = 12.00;
  
    if (hoursWorked <= regularHours) {
      return 0;
    } else {
      const overtimeHours = hoursWorked - regularHours;
      const overtimePay = overtimeHours * overtimeRate;
      return overtimePay;
    }
  }
  const hoursWorked = 55;
  const overtimePay = calculateOvertimePay(hoursWorked);
  console.log("Overtime pay: Rs.", overtimePay.toFixed(2));

//10
function calculateCurrencyNotes(amount) {
    var hundredNotes = Math.floor(amount / 100);
    amount %= 100;
    var fiftyNotes = Math.floor(amount / 50);
    amount %= 50;
    var tenNotes = Math.floor(amount / 10);
    return {
      hundreds: hundredNotes,
      fifties: fiftyNotes,
      tens: tenNotes
    };
  }
  var amountToWithdraw = prompt("Enter the amount to withdraw (in hundreds):");
  var result = calculateCurrencyNotes(amountToWithdraw);
  console.log("Number of 100 rupee notes:", result.hundreds);
  console.log("Number of 50 rupee notes:", result.fifties);
  console.log("Number of 10 rupee notes:", result.tens);
  // chp 39 to 42 end.
  
  