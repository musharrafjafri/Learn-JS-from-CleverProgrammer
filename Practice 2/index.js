/*
num1 = Number(prompt("Enter No.1: "))
num2 = Number(prompt("Enter No.2: "))
type = Number(prompt("Enter 1 for Addition and 2 for Subtraction: "))
add = false;
sub = false;
result = 0;
calTypeName = "";
if(type === 1){
    add = true;
    result = num1 + num2;
    calTypeName = "Addition"
}
else if (type === 2){
    sub = true;
    result = num1 - num2;
    calTypeName = "Subtraction"
}

document.getElementById("add").innerHTML = calTypeName + " of two given numbers are: "+ result;


let fruits = ["Apple", "Banana", "Orange"]
console.log(fruits)
console.log(fruits.length)
console.log(fruits.slice(1, 3))
console.log(fruits.join('-'))
console.log(fruits.join(' ** '))
let arrayToString = fruits.toString()
console.log(arrayToString)
console.log(arrayToString.split(' ,'))
*/
var weekday = Number(prompt("What day is it?"))
switch(weekday){
    case 1:
        dayType = "Monday is a weekday"
        break;
    case 2:
        dayType = "Tuesday is a weekday"
        break;
    case 3:
        dayType = "Wednesday is a weekday"
        break;
    case 4:
        dayType = "Thursday is a weekday"
        break;
    case 5:
        dayType = "Friday is a weekday"
        break;
    case 6:
        dayType = "Saturday is a Weekend"
        break;
    case 7:
        dayType = "Hurray, Sunday is a Weekend"
        break;
    }

    console.log(dayType)
