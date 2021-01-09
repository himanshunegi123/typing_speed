const testWrapper = document.querySelector(".test-wrapper");
let testArea = document.querySelector("#test-area");
let originText = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let timer = [0,0,0,0];
let interval;
let timerRunning = false;

function randomN2()
{
let randomNumber=Math.floor(Math.random()*8);
let question_para ="";
switch (randomNumber) {
case 0:
question_para = "It is certain and also hard";
break;
case 1:
question_para = "It is decidedly right; ";
break;
case 2:
question_para = "Reply hazy try again";
break; console.log(str);
case 3:
question_para = "Cannot predict now";
break;
case 4:
question_para = "Do not count on it";
break;
case 5:
question_para = "My sources say no";
break;
case 6:
question_para = "Outlook not so good"
break;
case 7:
question_para = '\"Signs point to yes\"';
break;
default:
question_para = '\"OOPS!';
}
document.querySelector("#origin-text p").innerHTML=question_para;
return question_para;
}


function leadingZero(time) {
if (time <= 9) {
time = "0" + time;
}
return time;
}

function runTimer() {
let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
theTimer.innerHTML = currentTime;
timer[3]++;

timer[0] = Math.floor((timer[3]/100)/60);
timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
timer[2] = Math.floor(timer[3] - (timer[1] *100) - (timer[0]* 6000));
}

function checkstr() {

let str=document.getElementById("para").innerHTML;

originText=str;
let textEntered = testArea.value;
let originTextMatch = originText.substring(0,textEntered.length);

if (textEntered == originText) {
clearInterval(interval);
testWrapper.style.borderColor = "#429890";
document.getElementById("alert").innerHTML = ("You did this Right !");
document.getElementById("alert").style.color = "#429890";
} else {
if (textEntered == originTextMatch) {
testWrapper.style.borderColor = "#65CCf3";
} else {
testWrapper.style.borderColor = "#E95D0F";
}
}

}

function checkinput() {
let textEnterdLength = testArea.value.length;
if (textEnterdLength === 0 && !timerRunning) {
timerRunning = true;
interval = setInterval(runTimer, 10);
}
console.log(textEnterdLength);
}


function resetbtn() {
clearInterval(interval);
interval = null;
timer = [0,0,0,0];
timerRunning = false;

testArea.value = "";
theTimer.innerHTML = "00:00:00";
testWrapper.style.borderColor = "grey";
randomN2();
document.getElementById("alert").innerHTML = ("");
}

testArea.addEventListener("keypress", checkinput, false);
testArea.addEventListener("keyup", checkstr, false);
resetButton.addEventListener("click", resetbtn, false);

function warn() {
    document.getElementById("alert").innerHTML = ("Hurry up !!!");
    document.getElementById("alert").style.color = "red";
}
