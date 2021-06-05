var numCalc1=0;
var numCalc2=0;
var operation="";
var operationIndex = 0;
var display="";
var answerDone = false;
var ans="0";
var PiUsed = false;


function displayValues(val){
    if (answerDone ==false){
        display = display  + val;
    }
    else{
        display="";
        display = display + val;
        answerDone = false;
    }
    return display;
}

function doOutput(val,type) {
    document.getElementById("output").innerHTML= displayValues(val);
    if(type == "op")        
    {            
        operation = val;
    }
}
function mathPI() {
    doOutput("Pi","num");
    PiUsed = true;
}
function store() {
    doOutput(ans,"num");
}
function randomNumber(){
    var lower = numCalc2;
    var upper = numCalc1;
    var rang = Math.floor(Math.random()*(upper-lower+1))+lower;
    document.getElementById("output").innerHTML= rang;
}
function determineAnswer() {
    operationIndex = (document.getElementById("output").innerHTML).indexOf(operation);

    if(PiUsed){
        piIndex = (document.getElementById("output").innerHTML).indexOf("Pi");
        if(piIndex<operationIndex){
            numCalc1 = Math.PI;
            numCalc2 = parseInt((document.getElementById("output").innerHTML).substring(operationIndex + 1));
        }else{
            numCalc2 = Math.PI;
            numCalc1 = parseInt((document.getElementById("output").innerHTML).substring(0, operationIndex));

        }
    }else{
        numCalc1 = parseInt((document.getElementById("output").innerHTML).substring(0, operationIndex));
        numCalc2 = parseInt((document.getElementById("output").innerHTML).substring(operationIndex + 1));
    }
    
    alert(numCalc1);
    if (operation == "sqrt")
    {
        ans = Math.sqrt(numCalc1);
        document.getElementById("output").innerHTML= ans;
    }
    else if (operation == "+")
    {
        ans = numCalc1 + numCalc2;
        document.getElementById("output").innerHTML= ans;
    }
    else if (operation == "*")
    {
        ans = numCalc1 * numCalc2;
        document.getElementById("output").innerHTML= ans;
    }
    else if (operation == "-")
    {
        ans = numCalc1 - numCalc2;
        document.getElementById("output").innerHTML= ans;
    }
    else if (operation == "/")
    {
        ans = numCalc1 / numCalc2;
        document.getElementById("output").innerHTML= ans;

    }
    else if (operation == "^")
    {
        alert(numCalc1 + " " + numCalc2);
        ans = Math.pow(numCalc1, numCalc2);
        document.getElementById("output").innerHTML= ans;
    }
    else if(operation == "r")
    {
        randomNumber();
    }
   numCalc1="";
   numCalc2="";
   operation="";
   answerDone = true;

}
function clearOutput() {
    document.getElementById("output").innerHTML="0";
    numCalc1="";
    numCalc2="";
    operation="";
    answerDone = true;
}