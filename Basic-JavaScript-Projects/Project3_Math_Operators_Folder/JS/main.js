function Add() { //adding function Add to button
    var Addition = 5 + 5; //variable for Add operator
    document.getElementById("Math_Add").innerHTML = Addition; //displaying addition on p #Math_Add
}
function Minus() {
    var Subtract = 10 - 5; 
    document.getElementById("Math_Subtract").innerHTML = Subtract;
}
function Multiply() {
    var Multiplication = 5 * 5;
    document.getElementById("Math_Multiply").innerHTML = Multiplication;
}
function Random_Math() {
    var Random_Num = Math.random(); //returning a number lower than 1.
    document.getElementById("Math_Random").innerHTML = Random_Num;
}
function Mod() {
    var Modulus = 26 % 7;
    document.getElementById("Math_Modulus").innerHTML = Modulus;
}
function Increase() {
    var Increment = 5;
    Increment++
    var x = Increment;
    document.getElementById("Math_Increase").innerHTML = Increment;
}
function Decrease() {
    var Decrement = 5;
    Decrement--
    var x = Decrement;
    document.getElementById("Math_Decrease").innerHTML = Decrement;
}