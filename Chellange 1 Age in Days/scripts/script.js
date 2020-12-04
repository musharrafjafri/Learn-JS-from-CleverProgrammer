function ageInDays(){
    var birthYear = Number(prompt("What is your birthyear?"))
    var result = (2020 - birthYear) * 365
    document.getElementById("result").innerHTML = "You are " + result + " days old.";
}

function reset(){
    document.getElementById("result").remove();
}