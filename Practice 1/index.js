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