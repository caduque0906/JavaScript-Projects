var x = 10; //creating global variable
function Add_Numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_Numbers_2() {
    document.write(x + 100);
}
Add_Numbers_1();
Add_Numbers_2();

function Add_Numbers_3() {
    var a = 10; //creating loacl variable
    document.write(20 + a + "<br>");
}
function Add_Numbers_4() {
    console.log(a + 100); //using console.log to debug intentional error in Chrome Dev Tools. a is undefined.
}
Add_Numbers_3();
Add_Numbers_4();

function timing() { //creating function from onclick
    if (new Date().getHours() < 18) { //comparing time to 6pm
        document.getElementById("time").innerHTML = "Hello there!"; //printing statement if true
    }
}

function greater_than() {
    if (8 > 7) {
        document.getElementById("if_statement").innerHTML = "This statement is true";
    }
}

function Age() { //creating function for button
    var d = document.getElementById("Age_Value").value; //creating variable for Age_Value
    if (d >= 21) { //grabbing id from input element to verify age
       Verified = "You are old enough to buy a drink"; // verified if age legal to drink
    }
    else {
        Verified = "You are not old enough to buy a drink"; // verified if age legal to drink
    }
    document.getElementById("Age_Verification").innerHTML = Verified;
}

function Time_function() { //creating function for button
    var Time = new Date().getHours(); //creating variable to get the time
    var Reply; //creating variable to document time
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}